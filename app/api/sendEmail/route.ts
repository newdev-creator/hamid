import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  firstname: z.string().min(1, "Le prénom est requis."),
  lastname: z.string().min(1, "Le nom est requis."),
  email: z.string().email("L'email doit être valide."),
  phone: z.string().optional(),
  message: z.string().min(1, "Le message est requis."),
});

export async function POST(req: NextRequest) {
  try {
    const jsonData = await req.json();
    const data = contactFormSchema.parse(jsonData);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.GOOGLE_EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_EMAIL_USER,
        pass: process.env.GOOGLE_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: data.email,
      to: process.env.CLIENT_EMAIL,
      subject: `Message de ${data.firstname} ${data.lastname}`,
      html: `<h1>Message de ${data.firstname} ${data.lastname}</h1><p>${data.message}</p><p>Téléphone: ${data.phone}</p><p>Email: ${data.email}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Erreur de validation", errors: error.errors },
        { status: 400 }
      );
    } else {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }
  }
}

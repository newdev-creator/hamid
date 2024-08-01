"use client";

import React, { useEffect, useRef, useState } from "react";
import TitleCard from "../titles/TitleCard";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Input from "./inputs/Input";
import Loader from "../icons/Loader";
import Link from "next/link";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

export default function ContactSide() {
  const form = useRef<HTMLFormElement>(null);

  const [formLoaded, setFormLoaded] = useState<boolean>(false);

  useEffect(() => {
    setFormLoaded(true);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.current);

    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="bg-fontBlack text-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
      <TitleCard titleCard="contact" />
      <p className="mb-4">Say something to start a live chat!</p>

      {/* infos contact */}
      <div>
        <div className="mb-4 flex items-center">
          <PhoneCall className="w-7 h-7 mr-2" />
          <span>+1012 3456 789</span>
        </div>
        <div className="mb-4 flex items-center">
          <Mail className="w-7 h-7 mr-2" />
          <span>demo@gmail.com</span>
        </div>
        <div className="mb-4 flex items-center">
          <MapPin className="w-10 h-10 mr-2" />
          <span>
            132 Dartmouth Street, Boston, Massachusetts 02156 United States
          </span>
        </div>
      </div>

      {/* form */}
      {formLoaded ? (
        <form ref={form} onSubmit={sendEmail} className="space-y-4 mb-4">
          <div className="flex space-x-4">
            <Input
              label="Nom"
              type="text"
              name="user_firstname"
              placeholder="John"
            />
            <Input
              label="Prénom"
              type="text"
              name="user_lastname"
              placeholder="doe"
            />
          </div>

          <div className="flex space-x-4">
            <Input
              label="Email"
              type="email"
              name="user_email"
              placeholder="JohnDoe@mail.com"
            />
            <Input
              label="Téléphone"
              type="tel"
              name="user_phone"
              placeholder="0600000000"
            />
          </div>

          <div>
            <label className="block text-white">Message</label>
            <textarea
              name="message"
              className="w-full p-2 text-fontBlack border border-gray-300 rounded-md"
              rows={4}
              placeholder="Votre message..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-400 text-white p-2 rounded-md w-full transition duration-300"
            >
              Envoyer
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}

      {/* social networks */}
      <div className="flex justify-center items-center space-x-4">
        <Link
          href="#"
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
        >
          <Facebook />
        </Link>
        <Link
          href="#"
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
        >
          <Instagram />
        </Link>
      </div>
    </div>
  );
}

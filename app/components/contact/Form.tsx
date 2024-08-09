"use client";

import React, { useEffect, useState } from "react";
import TitleCard from "../titles/TitleCard";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Input from "./inputs/Input";
import Loader from "../icons/Loader";
import Link from "next/link";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

const Validate = () => {
  return (
    <p className="bg-sky-400 text-white p-2 mt-4 text-center rounded-md w-full scale-100 transition duration-300">
      Votre message a bien été envoyé !
    </p>
  );
};

const Warning = ({ errors }: { errors: string[] }) => {
  return (
    <div className="bg-red-600 text-white p-2 mt-4 text-center rounded-md w-full scale-100 transition duration-300">
      {/* <p>Une erreur est survenue, veuillez réessayer plus tard.</p> */}
      {errors && errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Form() {
  const [formLoaded, setFormLoaded] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [result, setResult] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setFormLoaded(true);
  }, []);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(false);
    setWarning(false);
    setErrors([]);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phone,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(true);
        setWarning(false);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setResult(false);
        setWarning(true);
        if (data.errors) {
          setErrors(data.errors.map((err: any) => err.message));
        }
      }
    } catch (error) {
      console.log("Error email: ", error);
      setWarning(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-fontBlack text-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 md:absolute top-1 left-5 right-0 z-10">
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
        <form onSubmit={sendMessage} className="space-y-4 mb-4">
          <div className="flex space-x-4">
            <Input
              onChange={(e) => setFirstname(e.target.value)}
              label="Nom"
              type="text"
              name="firstname"
              placeholder="John"
              value={firstname}
            />
            <Input
              onChange={(e) => setLastname(e.target.value)}
              label="Prénom"
              type="text"
              name="lastname"
              placeholder="Doe"
              value={lastname}
            />
          </div>

          <div className="flex space-x-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              name="email"
              placeholder="JohnDoe@mail.com"
              value={email}
            />
            <Input
              onChange={(e) => setPhone(e.target.value)}
              label="Téléphone"
              type="tel"
              name="phone"
              placeholder="0600000000"
              value={phone}
            />
          </div>

          <div>
            <label className="block text-white">Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="w-full p-2 text-fontBlack border border-gray-300 rounded-md"
              rows={4}
              placeholder="Votre message..."
              value={message}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-400 text-white p-2 rounded-md w-full transition duration-300"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
            {result ? <Validate /> : null}
            {warning ? <Warning errors={errors} /> : null}
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

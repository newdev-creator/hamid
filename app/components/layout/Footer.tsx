import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import TitleCard from "../titles/TitleCard";

import navigationData from "./navigationData.json";
import legalMentionData from "./legalMentionsData.json";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-fontBlack text-white max-w-full">
      <div className="max-w-7xl mx-auto p-6 md:flex md:justify-between">
        <div className="flex flex-col mb-6">
          <Link
            href="#"
            className="mb-4"
            aria-label="Page d'accueil de Hamid Coaching"
          >
            <Logo />
          </Link>
          <p className="w-96 font-medium text-white mb-4">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <div className="flex items-center gap-4">
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

            <Button href="#" label="contact" />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <TitleCard titleCard="navigation" />
            <ul className="text-medium text-white">
              {navigationData.map((link, i) => (
                <li
                  key={i}
                  className="transition-opacity duration-300 ease-in-out hover:opacity-80"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <TitleCard titleCard="mentions legal" />
            <ul className="text-medium text-white">
              {legalMentionData.map((link, i) => (
                <li
                  key={i}
                  className="transition-opacity duration-300 ease-in-out hover:opacity-80"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

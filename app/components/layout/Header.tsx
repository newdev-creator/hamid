"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "../icons/Menu";
import Cross from "../icons/Cross";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#", label: "Accueil" },
    { href: "#", label: "A propos" },
    { href: "#", label: "Mes services" },
    { href: "#", label: "Chez vous ou en salle" },
    { href: "#", label: "Tarifs" },
    { href: "#", label: "Contact" },
  ];

  return (
    <header className="bg-white z-50 fixed top-0 w-full shadow">
      <nav className="bg-white max-w-5xl mx-auto font-poppins p-6 flex items-center justify-between">
        <Link
          href="#"
          className="flex"
          aria-label="Page d'accueil de Hamid Coaching"
        >
          <h1 className="hidden md:w-7 md:inline md:mr-4">LOGO</h1>
        </Link>
        <button
          aria-label="toggle button"
          aria-expanded={isMenuOpen ? "true" : "false"}
          className="cursor-pointer w-7 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Cross /> : <Menu />}
        </button>
        <ul
          className={`w-full absolute top-full left-0 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } -z-10 text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:w-max md:transform-none md:border-none md:flex-row`}
        >
          {links.map((link, i) => (
            <li
              key={i}
              className="py-4 md:py-0 md:mr-6 hover:text-rose-600 cursor-pointer"
            >
              <Link
                href={link.href}
                className="text-sm uppercase font-semibold w-full"
                // relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "../icons/Menu";
import Cross from "../icons/Cross";
import Logo from "./Logo";

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
    <header className="bg-orange z-50 fixed top-0 w-full shadow">
      <nav className="bg-orange max-w-full mx-auto p-6 flex items-center justify-between">
        <Link
          href="#"
          className="flex"
          aria-label="Page d'accueil de Hamid Coaching"
        >
          <Logo />
        </Link>
        <button
          aria-label="toggle button"
          aria-expanded={isMenuOpen ? "true" : "false"}
          className="cursor-pointer w-7 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Cross /> : <Menu />}
        </button>
        <ul
          className={`w-full absolute top-full left-0 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } bg-orange -z-10 text-blue flex flex-col items-center lg:static lg:z-10 lg:w-max lg:transform-none lg:flex-row`}
        >
          {links.map((link, i) => (
            <li
              key={i}
              className="text-xl py-4 lg:py-0 lg:mr-6 relative w-fit block after:rounded-lg after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              <Link
                href={link.href}
                className="font-semibold"
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

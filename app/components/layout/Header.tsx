"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white z-50 fixed top-0 w-full shadow">
      <nav
        id="main-nav"
        className="bg-white max-w-5xl mx-auto font-poppins p-6 flex items-center justify-between"
      >
        <a
          href="#top"
          className="flex"
          aria-label="Page d'accueil du portfolio"
        >
          <Image
            src="images/logo.png"
            className="hidden md:w-7 md:inline md:mr-4"
            alt=""
          />
          <span aria-hidden="true" className="text-lg lg:text-xl">
            Jane{" "}
            <strong>
              C<span className="text-rose-600">.</span>
            </strong>
          </span>
        </a>
        <button
          aria-label="toggle button"
          aria-expanded={isMenuOpen ? "true" : "false"}
          id="menu-btn"
          className="cursor-pointer w-7 md:hidden"
          onClick={toggleMenu}
        >
          <Image src="images/menu.svg" alt="Menu" />
        </button>
        <ul
          id="toggled-menu"
          className={`w-full absolute top-full left-0 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } -z-10 text-gray-800 border-b border-gray-200 flex flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row`}
        >
          <li className="py-4 md:py-0 md:mr-6">
            <a
              href="#cv"
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              CV
            </a>
          </li>
          <li className="py-4 md:py-0 md:mr-6">
            <a
              href="#competences"
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              Compétences
            </a>
          </li>
          <li className="py-4 md:py-0 md:mr-6">
            <a
              href="#projets"
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              Projets
            </a>
          </li>
          <li className="py-4 md:py-0 md:mr-6">
            <a
              href="#contact"
              className="text-sm uppercase font-semibold w-full hover:text-rose-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

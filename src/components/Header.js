'use client'
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-4 md:py-10 flex justify-between px-6 text-black items-center bg-white">
      <div className="flex items-center gap-8">
        <img
          src="logo.svg"
          alt="logo"
          className="h-[50px] md:w-[200px]"
        />
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/" className="text-[18px] font-normal leading-[9px]">
              Für Brands
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[18px] font-normal leading-[9px]">
              So funktioniert's
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[18px] font-normal leading-[9px]">
              Preise
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[18px] font-normal leading-[9px]">
              Häufige Fragen
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <button className="text-[20px] leading-[9px] font-medium">Login</button>
        <button className="bg-[#F0CF90] rounded-[24px] py-2 px-4 text-[20px] font-medium flex items-center justify-center">
          Registrieren
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-[70px] left-0 w-full bg-white shadow-2xl md:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li>
            <Link href="/" className="text-[18px] font-normal leading-[9px]">
              Für Brands
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[18px] font-normal leading-[9px]">
              So funktioniert's
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[18px] font-normal leading-[9px]">
              Preise
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[18px] font-normal leading-[9px]">
              Häufige Fragen
            </Link>
          </li>
          <li>
            <button className="text-[20px] leading-[9px] font-medium">
              Login
            </button>
          </li>
          <li>
            <button className="bg-[#F0CF90] rounded-[24px] py-2 px-4 text-[20px] font-medium flex items-center justify-center">
              Registrieren
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

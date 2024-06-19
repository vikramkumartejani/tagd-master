import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 py-20 flex flex-col lg:flex-row text-center lg:text-start gap-20 text-[#4F5665] font-[400]">
      <div className="flex flex-col items-center lg:items-start">
        <div className="h-20 w-40 mx-auto lg:mx-0">
          <Image src="/logo.svg" alt="logo" width={100} height={100} className="h-full py-2 w-full object-cover"/>
        </div>
        <p>Embrace your network</p>
        <div className="flex items-center w-full justify-center lg:justify-start gap-3 pt-6">
          <div className="bg-white cursor-pointer rounded-full text-red-500 shadow-lg p-2">
            <FaFacebookF size={20} />
          </div>
          <div className="bg-white cursor-pointer rounded-full text-red-500 shadow-lg p-2">
            <FaTwitter size={20} />
          </div>
          <div className="bg-white cursor-pointer rounded-full text-red-500 shadow-lg p-2">
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-20 justify-center lg:justify-start">
        <ul className="space-y-4">
          <li className="pb-3 font-[600] text-black"><Link href='/'>Inhalt</Link></li>
          <li className="cursor-pointer"><Link href='/'>Influencer Programm</Link></li>
          <li className="cursor-pointer"><Link href='/'>Brand Programm</Link></li>
        </ul>
        <ul className="space-y-4">
          <li className="pb-3 font-[600] text-black">Rechtliches</li>
          <li className="cursor-pointer"><Link href='/'>Impressum</Link></li>
          <li className="cursor-pointer"><Link href='/'>AGB</Link></li>
          <li className="cursor-pointer"><Link href='/'>Datenschutz</Link></li>
        </ul>
        <ul className="space-y-4">
          <li className="pb-3 font-[600] text-black"><Link href='/'>Kontakt</Link></li>
          <li className="cursor-pointer"><Link href='/'>Mail</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

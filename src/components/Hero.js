import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between mx-6 md:px-28 py-8 lg:py-0">
      <div className="h-full flex flex-col text-center lg:text-start justify-center gap-[20px] max-w-[600px]">
        <h1 className="text-[#0B132A] font-bold text-[36px] md:text-[50px] leading-[42px] md:leading-[65px]">
          Bis zu 100% Cashback für eine Insta Story
        </h1>
        <p className="text-[#4F5665] text-[15px] md:text-[18px] max-w-[500px] mx-auto md:mx-0">
          Mit Tagd kannst du Cashback erhalten indem du deine Käufe auf Insta postest und damit Unternehmen unterstützt.
        </p>
        <div>
          <button className="rounded-[5px] bg-[#F0CF90] w-[160px] md:w-[207px] h-[45px] md:h-[50px] text-white font-bold">
            Spare Jetzt
          </button>
        </div>
      </div>
      <div className="w-full lg:w-auto mb-8 lg:mb-0">
        <Image src="/hero.svg" alt="hero" width={500} height={500} className="w-full h-auto lg:h-[400px]" />
      </div>
    </div>
  );
};

export default Hero;

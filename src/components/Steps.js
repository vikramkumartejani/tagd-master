import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <div className="py-10">
      <h1 className="font-bold text-3xl md:text-5xl text-center">
        So funktioniert <br /> <span className="text-[#F1CF90]">Tagd</span>
      </h1>
      <div className="py-10 space-y-16">
        {/* Step One */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 gap-10">
          <div className="space-y-4">
            <h5 className="text-2xl lg:text-3xl font-bold">1. <br /> <span className="text-[#F1CF90]"> Let´s </span>Go</h5>
            <p className="text-[#4F5665] text-[18px] leading-[25px] custom-text-shadow max-w-[320px] mx-auto md:mx-0">
              Downloade die App und melde dich problemlos bei uns an und lege
              direkt los.
            </p>
          </div>
          <Image src="/Log In-cropped.svg" width={185} height={200} alt="image" className="custom-box-shadow h-[200px] md:h-[400px] mx-auto md:mx-0" />
        </div>
        {/* Step Two */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 gap-10">
          <div className="space-y-4">
            <h5 className="text-2xl lg:text-3xl font-bold">2. <br /> <span className="text-[#F1CF90]"> Kauf </span>Posten</h5>
            <p className="text-[#4F5665] text-[18px] leading-[25px] max-w-[320px] mx-auto md:mx-0">
              Kaufe und poste ein Produkt von einer unserer Partnerunternehmen in deine Instagram Story 
              <Image src='/insta.svg' width={20} height={20} alt="Instagram" className="inline-block ml-1" />
            </p>
          </div>
          <Image src="/hero.svg" alt="image" width={350} height={200} className="h-[200px] md:h-[300px] mx-auto md:mx-0" />
        </div>
        {/* Step Three */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 gap-10">
          <div className="space-y-4">
            <h5 className="text-2xl lg:text-3xl font-bold">3. <br /> <span className="text-[#F1CF90]"> Cashback </span>erhalten</h5>
            <p className="text-[#4F5665] text-[18px] leading-[25px] max-w-[320px] mx-auto md:mx-0">
              Sobald der Post von uns Verfiziert wurde, erhälst du Cashback 🤑🤑
            </p>
          </div>
          <Image src="/hero.svg" alt="image" width={350} height={350} className="h-[200px] md:h-[300px] mx-auto md:mx-0"/>
        </div>
      </div>
    </div>
  );
};

export default Steps;

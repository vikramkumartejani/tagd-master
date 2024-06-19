import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="px-6 pt-14">
      <h1 className="font-medium text-3xl md:text-5xl text-center">Überzeug dich <span className="text-[#F1CF90]">selbst</span></h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-6">
        <Image src="/yourself.svg" alt="profile" width={350} height={350} className="h-[350px] w-auto" />
        <div className="bg-white rounded-[33px] w-full md:w-[600px] py-[14px] px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#4F5665]">Moses, 22 Jahre</h3>
          <div className="my-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-[#4F5665] text-[20px] font-bold">Follower</h2>
                <span className="bg-[#AD4545] rounded-[33px] w-[150px] h-[5px]"></span>
              </div>
              <h3 className="text-xl font-bold text-[#4F5665]">674</h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-[#4F5665] text-[20px] font-bold">⌀ Likes</h2>
                <span className="bg-[#396995] rounded-[33px] w-[80px] h-[5px]"></span>
              </div>
              <h3 className="text-xl font-bold text-[#4F5665]">213</h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-[#4F5665] text-[20px] font-bold">⌀ Kommentare</h2>
                <span className="bg-[#943995] rounded-[33px] w-[30px] h-[5px]"></span>
              </div>
              <h3 className="text-xl font-bold text-[#4F5665]">11</h3>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-[#4F5665] font-bold text-3xl">Cashback</h2>
            <h2 className="text-[#F0CF90] font-bold text-3xl">0,50€</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

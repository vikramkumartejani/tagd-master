import React from "react";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";

const Subscription = () => {
  return (
    <div className="px-4 py-14">
      <h1 className="text-3xl md:text-5xl text-center font-medium">Wähle dein <span className="text-[#F0CF90]">Abo</span></h1>
      <div className="grid lg:grid-cols-3 gap-[50px] py-9">
        {/* Subs One */}
        <div className="flex flex-col items-center border border-[#DDDDDD] hover:border-[#F53838] transition duration-300 rounded-[5px] py-14 px-7">
          <img src="/subscription1.png" alt="logo" className="h-[80px] w-[80px]" />
          <h3 className="text-xl font-[700] py-6">Standard</h3>
          <div className=" w-full rounded-lg overflow-hidden">

            <div className="flex gap-4 items-start p-4">
              <div className="">
                <ImCross className="text-red-500" />
              </div>
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="text-[#4F5665]">Kostenlos</div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <ImCross className="text-red-500" />
              </div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2 text-[#4F5665]">Post Limit (5)</div>
            </div>

            <div className="flex p-4">
              <div className="flex-1 text-center">
                <ImCross className="text-red-500" />
              </div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2 text-[#4F5665]">Auszahlungsminimum (1€)</div>
            </div>

            <div className="flex p-4">
              <div className="flex-1 text-center"></div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2 text-[#4F5665]">4€ Cashback Limit pro Monat</div>
            </div>

            <div className="flex p-4">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2 text-[#4F5665]">Standortnutzung</div>
            </div>

            <div className="flex gap-4 items-start p-4">
              <div className="">
                <ImCross className="text-red-500" />
              </div>
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className=" text-left text-[#4F5665]">Alle Branchen</div>
            </div>

            <div className="flex p-4">
              <div className="flex-1 text-center"></div>
              <div className="flex-1 text-center"></div>
              <div className="flex-2 ml-2 text-[#4F5665]">Bilder & Videos verkaufen</div>
            </div>
          </div>

          <h3 className="text-4xl font-[500] pt-12 pb-4">0€</h3>

          <button className="w-[180px] h-[40px] border-2 font-[700] border-[#F53838] hover:bg-[#F53838] hover:text-white transition duration-300 text-[#F53838] rounded-full">
            Abonnieren
          </button>

        </div>
        {/* Subs Two */}
        <div className="flex flex-col items-center border border-[#DDDDDD] hover:border-[#F53838] transition duration-300 rounded-[5px] py-14 px-7">
          <img src="/subcription2.png" alt="logo" className="h-[80px] w-[80px]" />
          <h3 className="text-xl font-[700] text-[#F0CF90] pt-6 pb-3">Exclusive</h3>
          <p className="text-xs">Monatlich kündbar</p>
          <div className="w-full rounded-lg overflow-hidden">

            <div className="flex p-4">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Kostenlos</div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Post Limit (5)</div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Auszahlungsminimum (1€)</div>
            </div>

            <div className="flex p-4 justify-between">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-end text-[#4F5665]">
                4€ Cashback Limit pro Monat
              </div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Standortnutzung</div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Alle Branchen</div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Bilder & Videos verkaufen</div>
            </div>

          </div>

          <div className="flex items-end mt-12">
            <h3 className="text-4xl font-[500] pb-4">1,99€</h3>
            <del className="text-[#4F5665] text-3xl">3,99€</del>
          </div>

          <p className="text-xs py-3">Die ersten 3 Monate 0€, danach 3,99€</p>
          <button className="w-[180px] h-[40px] border-2 font-[700] border-[#F53838] hover:bg-[#F53838] hover:text-white transition duration-300 text-[#F53838] rounded-full">
            Abonnieren
          </button>

        </div>
        {/* Subs Three */}
        <div className="flex flex-col items-center border border-[#DDDDDD] hover:border-[#F53838] transition duration-300 rounded-[5px] py-14 px-7">
          <img src="/subcription2.png" alt="logo" className="h-[80px] w-[80px]" />
          <h3 className="text-xl font-[700] text-[#F0CF90] pt-6 pb-3">Exclusive</h3>
          <p className="text-xs">Monatlich kündbar</p>
          <div className="w-full rounded-lg overflow-hidden">
            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-left text-[#4F5665]">Kostenlos</div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Post Limit (5)</div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Auszahlungsminimum (1€)</div>
            </div>

            <div className="flex p-4 justify-between ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-end text-[#4F5665]">
                4€ Cashback Limit pro Monat
              </div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Standortnutzung</div>
            </div>

            <div className="flex p-4 ">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Alle Branchen</div>
            </div>

            <div className="flex p-4">
              <div className="flex-1 text-center">
                <FaCheck className="text-green-500" />
              </div>
              <div className="flex-2 ml-2 text-[#4F5665]">Bilder & Videos verkaufen</div>
            </div>
          </div>

          <div className="flex items-end mt-12">
            <h3 className="text-4xl font-[500] pb-4">0,99€</h3>
            <del className="text-[#4F5665] text-3xl">2,99€</del>
          </div>

          <p className="text-xs py-3">Die ersten 6 Monate 0€, danach 2,99€</p>

          <button className="w-[180px] h-[40px] border-2 font-[700] border-[#F53838] hover:bg-[#F53838] hover:text-white transition duration-300 text-[#F53838] rounded-full">
            Abonnieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

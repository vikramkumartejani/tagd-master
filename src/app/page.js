import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Steps from "@/components/Steps";
import Subsciption from "@/components/Subsciption";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Header />
      <Hero />
      <Steps />
      <Subsciption />
      <div className="bg-gray-50">  
        <Portfolio />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

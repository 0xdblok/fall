import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
import plan from "../asset/plan.png";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-center pt-6">
        {" "}
        <Image src={hero} alt="hero" width={350} height={350} />{" "}
      </div>
      <h1 className="text-center font-mono font-bold text-2xl pt-6">
        Hank MacLean on Base
      </h1>

      <div className="flex-none md:flex md:justify-center md:gap-48    pt-16">
        {" "}
        <div className="flex justify-center">
          <Image src={plan} alt="plan" width={350} height={350} />{" "}
        </div>
        <div className="pt-6 md:pt-0 text-center">
          <h1>Tokenomics</h1>
          <p>85% LP</p>
          <p>10% MARKETING</p>
          <p>5% TEAM</p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Hero from "./component/hero";

import Tokenomics from "./component/tokenomics";
import Footer from "./component/footer";

export default function Home() {
  return (
    <div className="bg-[#445C6C]">
      <Hero />

      <Tokenomics />
      <Footer />
    </div>
  );
}

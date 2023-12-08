import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import One from "@/app/components/One";
import Third from "@/app/components/Third";
import Four from "@/app/components/Four";
import Five from "@/app/components/Five";
import Six from "@/app/components/Six";
import Carousel from "@/app/components/Carousel";
import FinalOne from "@/app/components/FinalOne";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <One />
      <Third />
      <Five />
      <Six />
      <Carousel />
      <FinalOne />
      {/*<Four />*/}
      <Footer />
    </main>
  );
}

"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import First from "@/app/about/First";
import Two from "@/app/about/Two";
import Three from "@/app/about/Three";
import Four from "@/app/about/Four"
import Footer from "@/app/about/Footer";
import ScrollToTop from "@/app/components/ScrollToTop"

export default function Home() {
  return (
    <main>
      <Navbar />
      <First />
      <Two />
      <ScrollToTop/>
      <Three />
      <Four/>
      <Footer />
    </main>
  );
}

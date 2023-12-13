"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import First from "@/app/features/First";
import Two from "@/app/features/Two";
import Third from "@/app/features/Third";
import Four from "@/app/features/Four"
import Footer from "@/app/features/Footer";
import ScrollToTop from "@/app/components/ScrollToTop"

export default function Home() {
  return (
    <main>
      <Navbar />
      <First />
      <ScrollToTop/>
      <Two />
      <Third />
      <Four/>
      <Footer />
    </main>
  );
}

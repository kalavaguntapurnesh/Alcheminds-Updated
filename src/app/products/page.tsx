import Image from 'next/image'
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import First from "@/app/products/First"
import Two from "@/app/products/Two"
import Three from "@/app/products/Three"
import Footer from "@/app/products/Footer"


export default function Home() {
  return (
    <main>
    
    <First/>
    <Two/>
    <Three/>
    <Footer/>
    </main>
  )
}
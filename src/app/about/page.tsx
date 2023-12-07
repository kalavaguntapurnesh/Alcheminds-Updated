import Image from 'next/image'
import Navbar from "@/app/components/Navbar"
import First from "@/app/about/First"
import Two from "@/app/about/Two"
import Three from "@/app/about/Three"
import Footer from "@/app/about/Footer"


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
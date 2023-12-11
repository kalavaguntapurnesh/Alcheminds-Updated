import Image from 'next/image'
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/contact/Footer"
import One from "@/app/contact/One"



export default function Home() {
  return (
    <main>
    <Navbar/>
    <One/>
    <Footer/>
    
    </main>
  )
}
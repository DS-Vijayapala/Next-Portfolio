'use client'

import Image from "next/image";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/services";
import Project from "./components/Project";

export default function Home() {
  return (
    <>

      <NavBar />
      <Header />
      <About />
      <Services />
      <Project />


    </>

  )

}

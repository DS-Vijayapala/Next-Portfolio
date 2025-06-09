'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {

  return (
    <>

      <NavBar />
      <Header />
      <About isDarkMode={false} />
      <Project />
      <Contact />
      <Footer />


    </>

  )

}

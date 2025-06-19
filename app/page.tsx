'use client'

import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
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

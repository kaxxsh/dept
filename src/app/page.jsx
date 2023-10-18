"use client";
import React, { useEffect } from 'react';
import Nav from "@/components/nav";
import Main from "@/components/main";
import Event from "@/components/event";
import Footer from "@/components/footer";
import Particles from "react-tsparticles";
import { Particle } from "@/partical.config";
import { loadFull } from "tsparticles";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS CSS

export default function Home() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container) => {};

  useEffect(() => {
    AOS.init();
  }, []); // Run AOS initialization on the client side

  return (
    <div className="">
      <Nav />
      <Main />
      <Event />
      <Footer />
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particle}
      />
    </div>
  );
}

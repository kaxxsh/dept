"use client";
import { useCallback } from "react";
import Nav from "@/components/nav";
import Main from "@/components/main";
import Event from "@/components/event";
import Footer from "@/components/footer";
import Particles from "react-tsparticles";
import { Particle } from "@/partical.config";
import { loadFull } from "tsparticles";
import AOS from "aos";
export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  AOS.init();
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

"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./components/google-gemini-effect";
import TechStack from "./components/TechStack";
import LetsConnect from "./components/LetsConnect";
import SplashCursor from "@/components/SplashCursor";
import Particles from "@/components/Particles";
import Certificates from "./components/Certificates";

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  }); 

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={['#ededed', '#ededed']}
          particleCount={700}
          particleSpread={10}
          speed={1}
          particleBaseSize={160}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 space-y-12">
        <SplashCursor/>
        <h1 className="text-4xl font-bold text-center text-foreground">Welcome to My Portfolio</h1>
        <TechStack />
        <Certificates />
        
        <div className="py-10">
          <div
            className="h-[400vh] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
            ref={ref}
          >
            <GoogleGeminiEffect
              pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
              ]}
            />
          </div>
        </div>
        
        <LetsConnect />
      </div>
    </div>
  );
}
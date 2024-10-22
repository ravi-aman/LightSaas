"use client"; // Ensures this component is treated as a Client Component

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const cogRef = useRef<HTMLImageElement>(null);
  const cylinderRef = useRef<HTMLImageElement>(null);
  const noodleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const cogElement = cogRef.current;
    const cylinderElement = cylinderRef.current;
    const noodleElement = noodleRef.current;

    if (cogElement && cylinderElement && noodleElement) {
      // Initial scroll animations
      gsap.to(cogElement, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: cogElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(cylinderElement, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: cylinderElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(noodleElement, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: noodleElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Mouse move animation
      const initialPositions = {
        cog: { x: 0, y: 0 },
        cylinder: { x: 0, y: 0 },
        noodle: { x: 0, y: 0 },
      };

      const onMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const xPercent = (clientX / window.innerWidth);
        const yPercent = (clientY / window.innerHeight);

        gsap.to(cogElement, {
          x: initialPositions.cog.x + xPercent * 5, 
          y: initialPositions.cog.y + yPercent * 5, 
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(cylinderElement, {
          x: initialPositions.cylinder.x + xPercent * 15, 
          y: initialPositions.cylinder.y + yPercent * 15, 
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.from(noodleElement, {
          x: initialPositions.noodle.x + xPercent * 20, 
          y: initialPositions.noodle.y + yPercent * 20, 
          duration: 0.3,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  return (
    <section
      className="overflow-x-clip w-full relative z-1 flex justify-center"
      style={{
        background: "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)",
      }}
    >
      <div className="container md:m-0 flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-0 space-y-10 md:space-y-0 md:space-x-10 relative">
        <div className="md:w-[500px] text-left relative z-0">
          {/* Align text to the left */}
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to Productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quo vitae molestias error sed, autem magnam sapiente harum voluptatum dicta
          </p>
          <div className="flex gap-1 items-center justify-center md:justify-start mt-[30px]">
            <button className="btn btn-primary">Get for Free</button>
            <button className="btn btn-text">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full md:w-[600px]">
          <Image
            src={cogImage}
            alt="cog image"
            ref={cogRef}
            className="relative md:h-full md:w-full"
          />
          <Image
            src={CylinderImage}
            alt="cylinder image"
            width={250}
            ref={cylinderRef}
            className="w-40 md:w-100 absolute left-[-100px] md:top-[-110px] z-1"
          />
          <Image
            src={NoodleImage}
            alt="noodle image"
            width={200}
            ref={noodleRef}
            className="rotate-30deg w-40 md:w-48 absolute top-[75%] left-[90%] z-1"
          />
        </div>
      </div>
    </section>
  );
};

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const SponsorsSection = () => {
  const sponsorContainer = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          yoyo: true,
          ease: "back.out",
        },
        scrollTrigger: {
          trigger: "#sponsor",
          toggleActions: "play none play reverse",
        },
      });

      tl.from(["#sponsor h2", "#sponsor h3"], {
        yPercent: 50,
        scale: 1.2,
        delay: 1.2,
      });
    },
    { scope: sponsorContainer }
  );

  return (
    <section
      id="sponsor"
      className="max-w-5xl mx-auto px-10 py-10 text-blackColor flex flex-col items-center justify-center"
      ref={sponsorContainer}
    >
      <div className="title mb-10">
        <h2 className="text-2xl lg:text-4xl text-center">Meet Our Sponsors</h2>
        <div className="flex justify-center items-center mt-4 line">
          <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-4 md:gap-10 text-xl">
        <h3 className="text-redColor">Porridge & Pens</h3>
        <h3 className="text-greenColor">Childrensalon</h3>
        <h3 className="text-blackColor">Aramex</h3>
      </div>
    </section>
  );
};

export default SponsorsSection;

"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

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
      className="max-w-5xl mx-auto px-10 py-10 text-blackColor flex flex-col items-center"
      ref={sponsorContainer}
    >
      <div className="title mb-8">
        <h2 className="text-2xl lg:text-4xl">Meet Our Sponsors</h2>
        <div className="line bg-redColor w-10 h-1 inline-block mr-1"></div>
        <div className="line bg-yellowColor w-10 h-1 inline-block mr-1"></div>
        <div className="line bg-greenColor w-10 h-1 inline-block mr-1"></div>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between gap-10 text-xl">
        <h3 className="text-redColor">Porridge & Pens</h3>
        <h3 className="text-greenColor">Children Salon</h3>
      </div>
    </section>
  );
};

export default SponsorsSection;

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const OurSuccessStory = () => {
  const successContainer = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          opacity: 0,
          stagger: 0.2,
          ease: "back",
        },
        scrollTrigger: {
          trigger: "#story",
          toggleActions: "play none play reverse",
        },
      });

      tl.from("#story h2", {
        y: 100,
      })
        .from("#story .line", {
          y: 50,
        })
        .from(
          "#story .video",
          {
            y: 100,
          },
          "<"
        );
    },
    { scope: successContainer }
  );

  return (
    <section id="story" className="mt-14 mb-5" ref={successContainer}>
      <div className="title mb-10">
        <h2 className="text-2xl lg:text-4xl text-center">Our success story</h2>
        <div className="flex justify-center items-center mt-4 line">
          <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
        </div>
      </div>
      <div className="video flex justify-center items-center mt-10">
        <iframe
          className="rounded-lg shadow-xl w-[310px] h-[180px] lg:w-[600px] lg:h-[350px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BrQa1DD8Upc?si=om4fVA_noDkDNByh"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default OurSuccessStory;

"use client";

import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import "../../../app/styles/visionStyle.css";

const VisionPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
      });

      tl.from(".vision header h2", {
        y: "-100",
        scale: 1.2,
        ease: "bounce",
      })

        .from(".vision .vision-img", {
          yPercent: 80,
        })
        .from(
          ".vision .vision-text",
          {
            yPercent: -80,
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <>
      <section className="vision h-52 lg:h-72 text-blackColor" ref={container}>
        <header className="z-10 flex justify-center items-center h-full">
          <h2 className="text-white text-5xl">Our Vision.</h2>
        </header>
        <div className="max-w-screen-2xl mx-auto container px-10 py-8 my-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Image
              src="/assets/images/vision-img-1.webp"
              alt="vision"
              width={700}
              height={600}
              className="vision-img rounded-xl shadow-2xl order-1 lg:order-[0] border-2 border-greenColor"
            />
            <p className="vision-text text-xl lg:text-3xl">
              Our vision is for every
              <span className="text-redColor font-semibold italic">
                {" "}
                child{" "}
              </span>{" "}
              in Ghana to have
              <span className="text-yellowColor font-semibold italic">
                {" "}
                equal chance{" "}
              </span>
              to achieve their maximum potential and be{" "}
              <span className="text-greenColor font-semibold italic">
                free from poverty.
              </span>
            </p>
          </div>
        </div>
        <DonationSection />
        <NewsLetter />
        <Footer />
      </section>
    </>
  );
};

export default VisionPage;

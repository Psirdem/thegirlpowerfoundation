"use client";

import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import "../../../app/styles/missionStyles.css";

const MissionPage = () => {
  const missionContainer = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
      });

      tl.from(".mission header h2", { y: "-100", scale: 1.2, ease: "bounce" })
        .from(".mission .mission-img", {
          yPercent: 80,
        })
        .from(
          ".mission .mission-text",
          {
            yPercent: -80,
          },
          "<"
        );
    },
    { scope: missionContainer }
  );

  return (
    <section
      className="mission h-52 lg:h-72 text-blackColor"
      ref={missionContainer}
    >
      <header className="z-10 flex justify-center items-center h-full">
        <h2 className="text-white text-5xl">Our Mission.</h2>
      </header>
      <div className="max-w-screen-2xl mx-auto container px-10 py-8 my-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <Image
            src="/assets/images/mission.webp"
            alt="mission"
            width={700}
            height={600}
            className="mission-img rounded-xl shadow-2xl order-1 lg:order-[0] border-2 border-yellowColor"
          />
          <p className="mission-text text-xl lg:text-3xl">
            Our mission is to provide{" "}
            <span className="text-redColor font-semibold italic">
              children, girls and young adults
            </span>{" "}
            in Ghana with a{" "}
            <span className="text-yellowColor font-semibold italic">
              free education, safer shelter,
            </span>{" "}
            so that young people can create their own bright and sustainable
            future{" "}
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
  );
};

export default MissionPage;

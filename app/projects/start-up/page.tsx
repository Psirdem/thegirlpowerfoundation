/* eslint-disable @next/next/no-img-element */
"use client";

import "@/app/styles/startupStyles.css";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import NewsLetter from "@/components/NewsLetter";
import StartUpGallery from "@/components/StartUpGallery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const StartUpPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
      });

      tl.from(".start-up header h2", {
        y: "-100",
        scale: 1.2,
        ease: "bounce",
      }).from(
        ".start-up header p",
        {
          y: "100",
          ease: "elastic",
        },
        "<"
      );

      const tl1 = gsap.timeline({
        defaults: { opacity: 0, duration: 1, ease: "circ.inOut" },
        scrollTrigger: ".top-box",
      });

      tl1
        .from(".top-box .top-img", {
          x: "100",
        })
        .from(
          ".top-box .top-text",
          {
            x: "-100",
          },
          "<"
        );

      const tl2 = gsap.timeline({
        defaults: { opacity: 0, duration: 1, ease: "circ.inOut" },
        scrollTrigger: ".bottom-box",
      });

      tl2
        .from(".bottom-box .bottom-img", {
          x: "-100",
        })
        .from(
          ".bottom-box .bottom-text",
          {
            x: "100",
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <section className="start-up h-52 lg:h-72 text-blackColor" ref={container}>
      <header className="text-white gap-4 text-center z-10 flex justify-center items-center h-full flex-col px-4">
        <h2 className="text text-4xl lg:text-5xl ">Start Up Project.</h2>
        <p className="start-up-text lg:text-lg text-sm lg:w-1/2">
          More resilient and sustainable communities are critical to breaking
          the cycle of poverty.
        </p>
      </header>
      <div className="box max-w-screen-xl mx-auto py-10 container">
        <div className="top-box flex flex-col lg:flex-row gap-10 justify-between items-center p-4">
          <div>
            <Image
              src="/assets/images/startup-img-1.webp"
              width={600}
              height={600}
              alt="future"
              className="top-img rounded-xl shadow-2xl border-2 border-greenColor"
            />
          </div>
          <div className="top-text text flex-1 lg:text-xl flex flex-col gap-6">
            <p className="font-semibold text-redColor">
              The start-up initiative of the foundation is dedicated to
              empowering aspiring entrepreneurs through multifaceted approach.
            </p>
            <p>
              The programme focuses hands-on support, such as providing
              necessary tools and resources. The team emphasizes individual
              needs, tailoring assistance to optimize business growth and
              development.
            </p>
            <p>
              We support{" "}
              <span className="font-semibold italic text-greenColor">
                skilled and talented individuals
              </span>{" "}
              to build financially successful and sustainable businesses.
            </p>
          </div>
        </div>
        <div className="bottom-box flex flex-col lg:flex-row gap-10 justify-between items-center p-4 my-4 lg:my-16">
          <div className="bottom-text text flex-1 lg:text-xl flex flex-col gap-6 order-1 lg:order-[0]">
            <h3 className="text-2xl">We Provide:</h3>
            <ul className="flex flex-col gap-2 lg:text-lg">
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>
                  A financial start-up grant to create a sustainable income
                </span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>A ‘Developing Business Plans’ workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>
                  A year of individual support, monitoring and mentoring from
                  our Business Mentor
                </span>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/assets/images/startup-img-2.webp"
              width={600}
              height={600}
              alt="startup"
              className="bottom-img rounded-xl shadow-2xl border-2 border-redColor"
            />
          </div>
        </div>
      </div>
      <StartUpGallery />
      <DonationSection />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default StartUpPage;

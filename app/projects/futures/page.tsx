"use client";

import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import "../../../app/styles/futureStyles.css";
import BrighterFutureGallery from "@/components/BrightFutureGallery";

const FuturesPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
      });

      tl.from(".future header h2", { y: "-100", scale: 1.2, ease: "bounce" })
        .from(".future .future-img", {
          x: "100",
        })
        .from(
          ".future .future-text",
          {
            x: "-100",
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <section className="future h-52 lg:h-72 text-blackColor" ref={container}>
      <header className="z-10 flex justify-center items-center h-full">
        <h2 className="text-white text-5xl">Brighter Futures.</h2>
      </header>
      <div className="top-box max-w-screen-xl mx-auto py-10 container">
        <div className="flex flex-col lg:flex-row gap-10 justify-between p-4">
          <div className="future-text text flex-1 lg:text-xl flex flex-col gap-6">
            <p className="font-semibold text-greenColor">
              Brighter Futures provides bright, determined young men with the
              resources to attend university.
            </p>
            <p>
              With a commitment to fostering academic excellence and personal
              growth, this programme provides{" "}
              <span className="font-semibold italic text-redColor">
                financial assistance, mentorship and resources
              </span>{" "}
              to empower young men on their educational journey, ensuring they
              can achieve their academic and career goals.
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/future-img-1.webp"
              width={600}
              height={600}
              alt="future"
              className="future-img rounded-xl shadow-2xl border-2 border-yellowColor"
            />
          </div>
        </div>
      </div>
      <BrighterFutureGallery />
      <DonationSection />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default FuturesPage;

/* eslint-disable @next/next/no-img-element */
"use client";

import "@/app/styles/girlPowerStyles.css";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import NewsLetter from "@/components/NewsLetter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GirlPowerProjectPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
      });

      tl.from(".team header h2", {
        y: "-100",
        scale: 1.2,
        ease: "bounce",
      })
        .from(
          ".team header p",
          {
            y: "100",
            ease: "elastic",
          },
          "<"
        )
        .from(".team .team-box", {
          yPercent: -30,
        });

      const tl1 = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "power1" },
        scrollTrigger: {
          trigger: ".top-box",
          toggleActions: "play none play reverse",
        },
      });

      tl1
        .from(".top-box .img", {
          x: "50",
        })
        .from(".top-box .text", {
          x: "50",
        });
      const tl2 = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.1, duration: 1, ease: "back.inOut" },
        scrollTrigger: {
          trigger: ".bottom-box",
          toggleActions: "play none play reverse",
        },
      });

      tl2
        .from(".bottom-box .img", {
          x: "50",
        })
        .from(".bottom-box .text", {
          x: "50",
        });
    },
    { scope: container }
  );

  return (
    <section className="team h-52 lg:h-72 text-blackColor" ref={container}>
      <header className="text-white gap-4 text-center z-10 flex justify-center items-center h-full flex-col px-4">
        <h2 className="text-5xl">Girl Power.</h2>
        <p className="lg:text-lg text-sm lg:w-1/2">
          In Kumasi, only 3% of girls complete higher education. Without this
          critical education, young women cannot achieve the careers they
          deserve.
        </p>
      </header>
      <div className="top-box max-w-screen-2xl mx-auto py-10 container">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center p-4">
          <div>
            <Image
              src="/assets/images/gp-4.webp"
              alt="girl-power-pic"
              width={600}
              height={600}
              className="img rounded-xl shadow-2xl border-2 border-redColor"
            />
          </div>
          <div className="text flex-1 lg:text-xl flex flex-col gap-6">
            <p>
              The Girl Power project seeks to provide{" "}
              <span className="text-redColor font-semibold italic">
                educational scholarships to young girls
              </span>{" "}
              who have the zeal to go to school but have limited or no financial
              support.
            </p>
            <p>
              Currently the project supports approximately{" "}
              <span className="text-yellowColor font-semibold italic">
                eighty-five (85)
              </span>{" "}
              girls comprising Tertiary students, Senior High School students,
              Junior High School students and Primary School students. The aim
              is to empower girls to reach their maximum potential.
            </p>
            <p>
              The project also organises seminars, counselling sessions and
              vocational training for girls as a means of adequately equipping
              the girls for the ever-changing world. With Girl Power the sky is
              not the limit but the starting point.{" "}
              <span className="text-greenColor font-semibold italic">
                EVERY GIRL CAN REACH FOR THE STAR.
              </span>
            </p>
          </div>
        </div>
        <div className="botton-box flex flex-col justify-between items-center lg:flex-row gap-10 lg:my-14 my-5 p-4">
          <div className="text flex-1 flex flex-col gap-8">
            <h3 className="text-2xl">Through our programme we provide:</h3>
            <ul className="flex flex-col gap-2 lg:text-lg">
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span> Formal or vocational educational pathways</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span> Short and long-term accommodation options</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>
                  Daily care from our incredible, all-female, Girl Power Centre
                  team
                </span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>Personalised mentoring, counselling and coaching</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>Health checks</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>Computer and library access</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>Two nutritious meals daily</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/assets/icons/check.svg" alt="check" />
                <span>School books and uniforms</span>
              </li>
            </ul>
          </div>
          <div className="img">
            <Image
              src="/assets/images/staff.webp"
              width={700}
              height={700}
              className="rounded-xl shadow-2xl border-2 border-yellowColor"
              alt="girl-power-group-pic"
            />
          </div>
        </div>
        <Gallery />
      </div>
      <DonationSection />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default GirlPowerProjectPage;

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import accessImg from "@/public/assets/images/accesstoedu-img.webp";

const AccessSection = () => {
  const accessContainer = useRef(null);

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
          trigger: "#access",
          toggleActions: "play none play reverse",
        },
      });

      tl.from("#access .video", {
        scale: 1.2,
        delay: 0.3,
      })
        .from(
          ["#access .title h2", "#access .title div"],
          {
            x: "50",
          },
          "<"
        )
        .from(
          "#access p",
          {
            x: "50",
            delay: 0.1,
          },
          "<"
        )
        .from(
          "#access .btn",
          {
            x: "50",
            delay: 0.2,
          },
          "<"
        );
    },
    { scope: accessContainer }
  );

  return (
    <section id="access" className="text-blackColor my-8" ref={accessContainer}>
      <div className="flex flex-col items-center lg:flex-row gap-12">
        <div>
          <Image
            src={accessImg}
            width={500}
            height={500}
            alt="access to education"
            className="rounded-md"
          />
        </div>
        <div>
          <div className="title">
            <h2 className="text-2xl lg:text-4xl">Access To Education</h2>
            <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
            <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
            <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
          </div>
          <div className="my-8">
            <p className="font-bold mb-4">
              Around 30% of children in the Kumasi region do not have access to
              basic education.
            </p>
            <p>
              It&apos;s why free and safe access to education is critical to
              breaking the cycle of poverty. <br /> We provide access to
              education for over 100 children and young adults through our Girl
              Power Foundation projects. <br />
              <span className="font-medium">
                Girl Power and Brighter Futures and through our
                vocational courses.
              </span>
            </p>
          </div>
          <div className="btn">
            <Link
              className="bg-yellowColor uppercase font-bold px-10 py-3 rounded-lg shadow-lg hover:opacity-80 transition-all hover:translate-y-1 duration-500"
              href="/projects"
            >
              All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;

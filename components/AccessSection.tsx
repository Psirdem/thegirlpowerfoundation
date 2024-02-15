"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AccessSection = () => {
  const accessContainer = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          opacity: 0,
          stagger: 0.2,
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
            x: "70",
          },
          "<"
        )
        .from(
          "#access p",
          {
            x: "70",
            delay: 0.1,
          },
          "<"
        )
        .from(
          "#access .btn",
          {
            x: "80",
            delay: 0.2,
          },
          "<"
        );
    },
    { scope: accessContainer }
  );

  return (
    <section id="access" className="text-blackColor my-8" ref={accessContainer}>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="video order-1 lg:order-[0]">
          <iframe
            className="rounded-lg shadow-xl w-[310px] h-[180px] lg:w-[600px] lg:h-[350px]"
            src="https://www.youtube.com/embed/PM6o__gKnTU?v=PM6o__gKnTU&disablekb=1"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="title">
            <h2 className="text-2xl lg:text-4xl">Access To Education</h2>
            <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
            <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
            <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
          </div>
          <div className="my-8 lg:text-xl">
            <p className="font-bold mb-4">
              Around 30% of children in the Kumasi region do not have access to
              basic education.
            </p>
            <p>
              It&apos;s why free and safe access to education is critical to
              breaking the cycle of poverty. We are providing quality education
              to over{" "}
              <span className="font-bold">400 children and young people.</span>
            </p>
          </div>
          <div className="btn">
            <Link
              className="bg-yellowColor uppercase font-bold px-10 py-3 rounded-lg shadow-lg hover:opacity-80 transition-all hover:translate-y-1 duration-500"
              href="/projects/academy"
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

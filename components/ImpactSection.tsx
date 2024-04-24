"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import impactImg from "../public/assets/images/impact.webp";

const ImpactSection = () => {
  const impactContainer = useRef(null);

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
          trigger: "#impact",
          toggleActions: "play none play reverse",
        },
      });

      tl.from(["#impact .title h2", "#impact .title div"], {
        yPercent: -60,
      })
        .fromTo(
          "#impact .box-1",
          {
            opacity: 0,
            y: "-10",
          },
          { opacity: 1, y: "0" }
        )
        .fromTo(
          "#impact .box-2",
          {
            opacity: 0,
            y: "-20",
          },
          { opacity: 1, y: "0" },
          "<"
        )
        .fromTo(
          "#impact .box-3",
          {
            opacity: 0,
            y: "-30",
          },
          { opacity: 1, y: "0" },
          "<"
        );

      tl.from(
        "#impact .box-4",
        {
          y: "30",
        },
        "<"
      );
    },
    { scope: impactContainer }
  );

  return (
    <section
      id="impact"
      className="my-12 text-blackColor"
      ref={impactContainer}
    >
      <div className="title mb-10">
        <h2 className="text-2xl lg:text-4xl">An environment for success</h2>
        <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between items-center gap-12">
        <div className="box-4 flex flex-col gap-8">
          <p className="font-bold">
            The average wage for the families we support is £1.50 a day
          </p>
          <p>
            Children cannot realise their full potential on empty stomachs or in
            unsafe living conditions. Our programmes are holistic. <br /> We
            provide nutritional meals, safe shelter, care and dignity to the
            children and young people we support.
          </p>
          <div>
            <Link
              className="bg-redColor text-white uppercase font-bold px-10 py-3 rounded-lg shadow-lg hover:opacity-80 transition-all hover:translate-y-1 duration-500"
              href="/projects/girl-power"
            >
              View Impact
            </Link>
          </div>
        </div>
        <Image
          className="rounded-lg w-[700px] border-redColor border-2 shadow-2xl"
          src={impactImg}
          alt="impact"
        />
      </div>
    </section>
  );
};

export default ImpactSection;

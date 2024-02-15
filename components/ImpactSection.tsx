"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import impactImg1 from "../public/assets/images/our-impact-1.webp";
import impactImg2 from "../public/assets/images/our-impact-2.webp";
import impactImg3 from "../public/assets/images/our-impact-3.webp";
import impactImg from "../public/assets/images/impact-img.webp";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const impactContainer = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          opacity: 0,
          stagger: 0.2,
        },
        scrollTrigger: {
          trigger: "#impact",
          toggleActions: "play none play reverse",
        },
      });

      tl.from(["#impact .title h2", "#impact .title div"], {
        xPercent: 30,
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
      className="my-10 text-blackColor"
      ref={impactContainer}
    >
      <div className="title mb-10">
        <h2 className="text-2xl lg:text-4xl">Our impact In 2022</h2>
        <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <div className="box-1 flex flex-col lg:flex-row gap-8 justify-center items-center">
            <Image
              className="rounded-full"
              style={{ boxShadow: "-4px 4px 0px 0px #D01F39" }}
              src={impactImg1}
              width={100}
              height={100}
              alt="impact-1"
            />
            <div className="flex flex-col  justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-4">
              <h3 className="text-3xl">44...</h3>
              <p>
                New workshops, activities, additional classes and training
                sessions were provided by the Girl Power project to support
                girls with their studies and personal development.
              </p>
            </div>
          </div>
          <div className="box-2 flex gap-8 flex-col lg:flex-row justify-center items-center text-center">
            <Image
              src={impactImg2}
              width={100}
              height={100}
              className="rounded-full"
              style={{ boxShadow: "-4px 4px 0px 0px #FDC500" }}
              alt="impact-2"
            />
            <div className="flex flex-col  justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-4">
              <h3 className="text-3xl">154000...</h3>
              <p>
                Meals were served to students at Brightlingsea Academy in 2022
              </p>
            </div>
          </div>
          <div className="box-3 flex gap-8 flex-col lg:flex-row justify-center items-center text-center">
            <Image
              src={impactImg3}
              width={100}
              height={100}
              className="rounded-full"
              style={{ boxShadow: "-4px 4px 0px 0px #006C3E" }}
              alt="impact-3"
            />
            <div className="flex flex-col  justify-center items-center text-center lg:justify-start lg:items-start lg:text-left gap-4">
              <h3 className="text-3xl">5...</h3>
              <p>
                New classrooms, including a dedicated ICT suite, were
                constructed at Brightlingsea Academy
              </p>
            </div>
          </div>
        </div>
        <div className="box-4 flex flex-col gap-8">
          <Image
            className="rounded-lg"
            src={impactImg}
            width={800}
            height={600}
            alt="impact"
          />
          <div>
            <h2 className="text-2xl lg:text-7xl">An environment for success</h2>
            <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
            <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
            <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
          </div>
          <p className="font-bold">
            The average wage for the families we support is £1.50 a day
          </p>
          <p>
            Children cannot realise their full potential on empty stomachs or in
            unsafe living conditions. Our programmes are holistic. We provide
            nutritional meals, safe shelter, care and dignity to the children
            and young people we support.
          </p>
          <div>
            <Link
              className="bg-redColor text-white uppercase font-bold px-10 py-3 rounded-lg shadow-lg hover:opacity-80 transition-all hover:translate-y-1 duration-500"
              href="/impact"
            >
              View Impact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

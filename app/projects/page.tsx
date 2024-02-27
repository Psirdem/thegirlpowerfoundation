"use client";

import "@/app/styles/projectsStyles.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { CardContent } from "@/components/ui/card";
import image1 from "@/public/assets/images/impact-img.webp";
import image2 from "@/public/assets/images/project-future.webp";
import image3 from "@/public/assets/images/project-hands.webp";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import DonationSection from "@/components/DonationSection";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "The Girl Power Project",
    description:
      "We provide safe shelter, care and dignity to the young women on our Girl Power Project, providing them with the environment they need to complete their education and build an independent future free from poverty.",
    url: "/projects/girl-power",
    image: image1,
  },

  {
    title: "Start-Up Project",
    description:
      "We work with the families of the children we support to create sustainable, thriving communities and tackle unemployment in the Kumasi region. We help parents to secure a brighter future...",
    url: "/projects/start-up",
    image: image3,
  },
  {
    title: "Brighter Futures Project",
    description:
      "Brighter Futures, a new project for 2023, provides bright young men with the resources to attend university.",
    url: "/projects/futures",
    image: image2,
  },
  {
    title: "Vacational Training",
    description:
      "We work with the families of the children we support to create sustainable, thriving communities and tackle unemployment in the Kumasi region. We help parents to secure a brighter future...",
    url: "/projects/vocation",
    image: image3,
  },
];

const AllProjectsPage = () => {
  const projectContainer = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
      });

      tl.from(".project header h2", { y: "-100", scale: 1.2, ease: "bounce" })
        .from(".project .project-img", {
          yPercent: 80,
        })
        .from(
          ".project .project-text",
          {
            yPercent: -80,
          },
          "<"
        );
    },
    { scope: projectContainer }
  );

  return (
    <section
      className="project h-52 lg:h-72 text-blackColor"
      ref={projectContainer}
    >
      <header className="z-10 flex justify-center items-center h-full">
        <h2 className="text-white text-5xl">Our Projects.</h2>
      </header>
      <div className="max-w-screen-xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {projects.map(({ title, url, description, image }) => (
          <Card
            key={title}
            className="flex flex-col gap-8 rounded-xl overflow-hidden h-[33rem] border-2 lg:h-[35rem] shadow-xl"
          >
            <Link href={url}>
              <Image src={image} alt={title} />
            </Link>
            <CardContent className="flex flex-col gap-2 items-center justify-center text-center">
              <h3 className="text-xl">{title}</h3>
              <p>{description}</p>
              <div className="mt-10">
                <Link
                  className="text-center px-12 py-3 rounded-md shadow-2xl text-white font-bold uppercase bg-greenColor hover:opacity-80 transition-all duration-500 hover:translate-y-2"
                  href={url}
                >
                  View Project
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="max-w-screen-xl mx-auto px-10 py-10 my-10 flex justify-center items-center flex-col gap-4">
        <div className="title mb-8">
          <h2 className="text-2xl lg:text-4xl">Our Upcoming Projects</h2>
          <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
        </div>
        <div className="text-2xl flex flex-col lg:flex-row max-w-xl mx-auto justify-between items-center gap-8 font-medium tracking-wide text-redColor">
          <p>Building Project</p>
          <p>Charity Gala Project</p>
        </div>
      </div>
      <DonationSection />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default AllProjectsPage;

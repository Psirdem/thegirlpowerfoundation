"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import Image from "next/image";
import girlPowerImg from "../public/assets/images/girl-power-img.webp";
import brighterFutureImg from "../public/assets/images/brighter-futures-img.webp";
import startUpImg from "../public/assets/images/startup-img.webp";
import academyImg from "../public/assets/images/academy-img.webp";

const projects = [
  {
    title: "The Girl Power Project",
    description:
      "We provide safe shelter, care and dignity to the young women on our Girl Power Project, providing them with the environment they need to complete their education and build an independent future free from poverty.",
    url: "/projects/girl-power",
    image: girlPowerImg,
  },
  {
    title: "Brighter Futures Project",
    description:
      "Brighter Futures, a new project for 2023, provides bright young men with the resources to attend university.",
    url: "/projects/futures",
    image: brighterFutureImg,
  },
  {
    title: "Start-Up Project",
    description:
      "We work with the families of the children we support to create sustainable, thriving communities and tackle unemployment in the Kumasi region. We help parents to secure a brighter future...",
    url: "/projects/start-up",
    image: startUpImg,
  },
  {
    title: "Brightlingsea Academy",
    description:
      "The Brightlingsea Academy provides life-changing education to 250 children aged between 6 months and 14 years. It is the only free and disability-safe school in the region.",
    url: "/projects/start-up",
    image: academyImg,
  },
];

const ProjectCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "center",
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.leave}
      className="w-full max-w-screen-xl"
    >
      <CarouselContent className="flex justify-between gap-4">
        {projects.map(({ title, description, image, url }, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="flex flex-col gap-8 rounded-xl overflow-hidden h-[30rem]">
                <Link href={url}>
                  <Image src={image} width={600} height={500} alt={title} />
                </Link>
                <CardContent className="flex flex-col items-center justify-center text-center">
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;

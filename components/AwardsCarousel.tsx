"use client";
/* eslint-disable @next/next/no-img-element */

/* eslint-disable react-hooks/exhaustive-deps */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const awardImages = [
  { src: "/assets/images/award_pic1.jpg" },
  { src: "/assets/images/award_pic4.jpg" },
  { src: "/assets/images/award_pic5.jpg" },
  { src: "/assets/images/award_pic2.jpg" },
  { src: "/assets/images/award_pic3.jpg" },
  { src: "/assets/images/award_pic6.jpg" },
];

const AwardGallery = () => {
  const container = useRef(null);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // lightbox = null;
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
        scrollTrigger: "#gallery",
      });

      tl.from("#gallery .text-box", {
        x: "100",
        scale: 1.2,
      });
    },
    { scope: container }
  );

  return (
    <section
      id="gallery"
      className="max-w-6xl mx-auto container mt-14 mb-5"
      ref={container}
    >
      <div className="title mb-10">
        <h2 className="text-2xl lg:text-4xl text-center">
          Beacon of Hope Award
        </h2>
        <div className="flex justify-center items-center mt-4 line">
          <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
        </div>
      </div>
      <p className=" text-center md:text-xl font-medium">
        The Girl Power Foundation won the{" "}
        <strong className="text-greenColor">Beacon of Hope Awards</strong>, in
        November 2024, organised by{" "}
        <strong className="text-redColor">Ghana Philanthropy Awards</strong>
      </p>
      <div>
        {/* pics */}

        <div className="max-w-6xl container mx-auto px-10 py-8 lg:text-lg my-10">
          <h3 className="mb-8">Beacon of Hope Award</h3>
          <div
            id="my-test-gallery"
            className="pswp-gallery grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5"
          >
            {awardImages.map((image, index) => (
              <a
                href={image.src}
                data-pswp-width={700}
                data-pswp-height={450}
                key={`galleryID  -  ${index}`}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={image.src}
                  alt={image.src}
                  className="rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-blackColor"
                  width={600}
                  height={400}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardGallery;

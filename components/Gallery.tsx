/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/assets/images/beach.webp" },
  { src: "/assets/images/cta-img.webp" },
  { src: "/assets/images/mission.webp" },
  { src: "/assets/images/students-1.webp" },
  { src: "/assets/images/vision.webp" },
  { src: "/assets/images/hero-img.webp" },
  { src: "/assets/images/coast-img.webp" },
  { src: "/assets/images/staff.webp" },
  { src: "/assets/images/support-img.webp" },
  { src: "/assets/images/vision-img-1.webp" },
  { src: "/assets/images/hero-img.webp" },
  { src: "/assets/images/students-3.webp" },
  { src: "/assets/images/vision.webp" },
  { src: "/assets/images/coast-img.webp" },
  { src: "/assets/images/mission.webp" },
  { src: "/assets/images/students-2.webp" },
  { src: "/assets/images/support-img.webp" },
  { src: "/assets/images/vision-img-1.webp" },
];

const Gallery = () => {
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
    <div id="gallery" className="max-w-6xl mx-auto container" ref={container}>
      <div className="text-box text-center my-10">
        <h2 className="text-2xl lg:text-4xl">Gallery</h2>
        <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
      </div>
      <div
        id="my-test-gallery"
        className="pswp-gallery grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {images.map((image, index) => (
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
              className="rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-greenColor"
              width={600}
              height={400}
            />
          </a>
        ))}
        {/* <Image
          src="/assets/images/beach.webp"
          alt="beach"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-greenColor"
          width={800}
          height={800}
        /> */}

        {/* <Image
          src="/assets/images/cta-img.webp"
          width={500}
          height={500}
          alt="coast"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-blackColor"
        /> */}
        {/* <Image
          src="/assets/images/hero-img.webp"
          width={500}
          height={500}
          alt="hero"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-redColor"
        />

        <Image
          src="/assets/images/mission.webp"
          width={500}
          height={500}
          alt="mission"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-yellowColor"
        />
        <Image
          src="/assets/images/vision.webp"
          width={500}
          height={500}
          alt="vision"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-redColor"
        />
        <Image
          src="/assets/images/coast-img.webp"
          width={500}
          height={500}
          alt="coast"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-blackColor"
        />
        <Image
          src="/assets/images/staff.webp"
          width={500}
          height={500}
          alt="staff"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-greenColor"
        />
        <Image
          src="/assets/images/support-img.webp"
          width={500}
          height={500}
          alt="support"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-yellowColor"
        />
        <Image
          src="/assets/images/vision-img-1.webp"
          width={500}
          height={500}
          alt="vision"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-redColor"
        />
        <Image
          src="/assets/images/students-1.webp"
          width={500}
          height={500}
          alt="vision"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-yellowColor"
        />
        <Image
          src="/assets/images/students-2.webp"
          width={500}
          height={500}
          alt="vision"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-blackColor"
        />
        <Image
          src="/assets/images/students-3.webp"
          width={500}
          height={500}
          alt="vision"
          className="gallery-img rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-greenColor"
        /> */}
      </div>
    </div>
  );
};

export default Gallery;

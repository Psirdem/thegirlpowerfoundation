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

const images = [
  { src: "/assets/images/startup-img-1.webp" },
  { src: "/assets/images/startup-img-2.webp" },
  { src: "/assets/images/startup-img-3.webp" },
];

const StartUpGallery = () => {
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
      </div>
    </div>
  );
};

export default StartUpGallery;

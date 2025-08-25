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
  { src: "/assets/images/gp-4.webp" },
  { src: "/assets/images/beach.webp" },
  { src: "/assets/images/gp-3.webp" },
  { src: "/assets/images/cta-img.webp" },
  { src: "/assets/images/gp-1.webp" },
  { src: "/assets/images/mission.webp" },
  { src: "/assets/images/gp-2.webp" },
  { src: "/assets/images/vision.webp" },
  { src: "/assets/images/hero-img.webp" },
  { src: "/assets/images/students-3.webp" },
  { src: "/assets/images/coast-img.webp" },
  { src: "/assets/images/support-img.webp" },
  { src: "/assets/images/vision-img-1.webp" },
  { src: "/assets/images/students-2.webp" },
];

const moniImages = [
  { src: "/assets/images/moni-img-1.webp" },
  { src: "/assets/images/moni-img-2.webp" },
  { src: "/assets/images/moni-img-3.webp" },
  { src: "/assets/images/moni-img-4.webp" },
  { src: "/assets/images/moni-img-5.webp" },
  { src: "/assets/images/moni-img-1.webp" },
  { src: "/assets/images/moni-img-6.webp" },
  { src: "/assets/images/moni-img-7.webp" },
  { src: "/assets/images/moni-img-8.webp" },
  { src: "/assets/images/moni-img-9.webp" },
];

const awardImages = [
  { src: "/assets/images/award_pic1.jpg" },
  { src: "/assets/images/award_pic4.jpg" },
  { src: "/assets/images/award_pic5.jpg" },
  { src: "/assets/images/award_pic2.jpg" },
  { src: "/assets/images/award_pic3.jpg" },
  { src: "/assets/images/award_pic6.jpg" },
  { src: "/assets/images/award_pic7.jpg" },
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
      <div>
        {/* pics */}

        <div className="max-w-6xl container mx-auto px-10 py-8 lg:text-lg my-10">
          <h3 className="mb-8">Girl Power Beneficiaries</h3>
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
      </div>
      <div>
        {/* pics */}

        <div className="max-w-6xl container mx-auto px-10 py-8 lg:text-lg my-10">
          <h3 className="mb-8">Monitoring and Evaluation of Beneficiaries</h3>
          <div
            id="my-test-gallery"
            className="pswp-gallery grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5"
          >
            {moniImages.map((image, index) => (
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
                  className="rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-yellowColor"
                  width={600}
                  height={400}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

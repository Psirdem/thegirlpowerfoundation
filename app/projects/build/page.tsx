"use client";

import "@/app/styles/buildStyles.css";
import BuildingGallery from "@/components/BuildingGallery";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect, useRef } from "react";

const groupOneImages = [
  { src: "/assets/images/b-1.webp" },
  { src: "/assets/images/b-2.webp" },
  { src: "/assets/images/b-3.webp" },
  { src: "/assets/images/b-4.webp" },
];

const groupTwoImages = [
  { src: "/assets/images/b-5.webp" },
  { src: "/assets/images/b-6.webp" },
  { src: "/assets/images/b-7.webp" },
  { src: "/assets/images/b-8.webp" },
  { src: "/assets/images/b-9.webp" },
  { src: "/assets/images/b-10.webp" },
  { src: "/assets/images/b-11.webp" },
  { src: "/assets/images/b-12.webp" },
  { src: "/assets/images/b-13.webp" },
  { src: "/assets/images/b-14.webp" },
];

const groupThreeImages = [
  { src: "/assets/images/b-15.webp" },
  { src: "/assets/images/b-16.webp" },
  { src: "/assets/images/b-17.webp" },
  { src: "/assets/images/b-18.webp" },
];

const BuildingProjectPage = () => {
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

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-test-gallery-2",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // lightbox = null;
    };
  }, []);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-test-gallery-3",
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
      });

      tl.from(".build header h2", {
        y: "-100",
        scale: 1.2,
        ease: "bounce",
      })
        .from(
          ".build header p",
          {
            y: "100",
            ease: "elastic",
          },
          "<"
        )
        .from(".build .build-box", {
          yPercent: -30,
        });

      const tl1 = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "power1" },
        scrollTrigger: {
          trigger: ".top-box",
          toggleActions: "play none play reverse",
        },
      });

      tl1
        .from(".top-box .img", {
          x: "50",
        })
        .from(".top-box .text", {
          x: "50",
        });
      const tl2 = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.1, duration: 1, ease: "back.inOut" },
        scrollTrigger: {
          trigger: ".bottom-box",
          toggleActions: "play none play reverse",
        },
      });

      tl2
        .from(".bottom-box .img", {
          x: "50",
        })
        .from(".bottom-box .text", {
          x: "50",
        });
    },
    { scope: container }
  );

  return (
    <section className="build h-52 lg:h-72 text-blackColor" ref={container}>
      <header className="text-white gap-4 text-center z-10 flex justify-center items-center h-full flex-col px-4">
        <h2 className="text-5xl">Building Project.</h2>
      </header>
      <div className="max-w-6xl container mx-auto px-10 py-8 lg:text-lg my-10">
        <p>
          The Girl Power Foundation strives to build a permanent facility to
          provide a dedicated space to accommodate the work of the foundation.
          The Centre will provide office spaces, vocational classrooms,
          emergency accommodation for our beneficiaries, permanent living
          arrangement for some of our students and on site housing for Girl
          Power staff. This is possible because of donations from our sponsors,
          trusts and organisations. You can also help us :)
        </p>
        {/* <br />
        <p>
          The project seeks to provide office spaces for our workers and housing
          to our benefeciaries. This is possible because of the donations from
          our sponsors. You can also help us complete this project on time by
          making a donation. Check the gallery to view our progress so far..
        </p> */}
      </div>
      <BuildingGallery />
      <div className="max-w-6xl container mx-auto px-10 py-8 lg:text-lg my-10">
        <div>
          <h3 className="mb-8">Structural Integrity Assesments</h3>
          <div
            id="my-test-gallery"
            className="pswp-gallery grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5"
          >
            {groupOneImages.map((image, index) => (
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
                  className="rounded-lg hover:scale-95 duration-500 transition-all ease-in-out shadow-2xl border-2 border-redColor"
                  width={600}
                  height={400}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl container mx-auto px-10 py-8 lg:text-lg my-10">
        <div>
          <h3 className="mb-8">
            A Visit From Dignitaries To The Children Salon
          </h3>
          <div
            id="my-test-gallery-2"
            className="pswp-gallery grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5"
          >
            {groupTwoImages.map((image, index) => (
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
      <div className="max-w-6xl container mx-auto px-10 py-8 lg:text-lg my-10">
        <div className="mb-5 lg:mb-10">
          <h3 className="mb-8">
            Visit to the Site from Dr. Phillip Tibbs and the Advisory Board
          </h3>
          <div
            id="my-test-gallery-3"
            className="pswp-gallery grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-5"
          >
            {groupThreeImages.map((image, index) => (
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

      <DonationSection />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default BuildingProjectPage;

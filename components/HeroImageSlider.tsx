/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TypewriterEffectDemo from "./TypewriterEffect";

const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then(loadedImages => {
        setLoadedImages(loadedImages as string[]);
        setLoading(false);
      })
      .catch(error => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {}, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn(
            "absolute inset-0 bg-black/60 z-40 overlay",
            overlayClassName
          )}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};

const HeroImageSlider = () => {
  const images = [
    "/assets/images/hero-img.webp",
    "/assets/images/hands.webp",
    "/assets/images/coast-img.webp",
    "/assets/images/mission.webp",
  ];

  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.header
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="max-w-6xl mx-auto container p-8 flex flex-col justify-center items-center gap-8 h-screen text-center text-white">
          <motion.p className="sub-text text-yellowColor lg:text-2xl uppercase tracking-wider font-semibold">
            <span>Education</span>&mdash; <span>Food</span>&mdash;
            <span>Shelter</span>
          </motion.p>
          <TypewriterEffectDemo />
          <p className="main-text lg:text-2xl font-medium">
            We are working with the most disadvantaged children and young people
            in Ghana to help them break the cycle of poverty.
          </p>
          <div className="btns flex flex-col md:flex-row gap-4 lg:gap-12 uppercase font-bold">
            <Link
              className="bg-greenColor px-8 py-4 rounded hover:translate-y-1 transition-all duration-500 hover:opacity-80 shadow-2xl"
              href="/projects"
            >
              Our Projects
            </Link>

            <Link
              className="bg-yellowColor text-blackColor px-8 py-4 rounded hover:translate-y-1 transition-all duration-500 hover:opacity-80 shadow-2xl"
              href="/get-involved"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.header>
    </ImagesSlider>
  );
};

export default HeroImageSlider;

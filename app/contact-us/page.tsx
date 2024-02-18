"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { useGSAP } from "@gsap/react";
import { Skeleton } from "@nextui-org/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";

const ContactUsPage = () => {
  const container1 = useRef(null);
  const container2 = useRef(null);

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <Skeleton className="rounded h-[500px]" />,
        ssr: false,
      }),
    []
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, ease: "back.in", duration: 1, stagger: 0.3 },
      });

      tl.from([".contact .title h2", ".contact .title div"], {
        x: "200",
        scale: 1.2,
      });

      const tl1 = gsap.timeline({
        defaults: { opacity: 0, ease: "power1.out", duration: 1, stagger: 0.3 },
      });

      tl1.from(".input", {
        y: "200",
      });
    },
    { scope: container1 }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, ease: "back.in", duration: 1, stagger: 0.3 },
        scrollTrigger: ".map",
      });

      tl.from([".map .title h2", ".map .title div"], {
        x: "200",
        scale: 1.2,
      });
    },
    { scope: container2 }
  );

  return (
    <>
      <section className="my-10 max-w-5xl mx-auto px-10 py-8 container">
        <ContactForm />
        <div className="map my-16" ref={container2}>
          <div className="title mb-10">
            <h2 className="text-2xl lg:text-4xl">Our Location</h2>
            <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
            <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
            <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
          </div>
          <div>
            <Map />
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ContactUsPage;

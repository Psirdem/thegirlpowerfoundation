"use client";

import Image from "next/image";
import supportImg from "../public/assets/images/cta-img.webp";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DonationSection = () => {
  const donateContainer = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: { duration: 1, opacity: 0, stagger: 0.2, ease: "power4.in" },
        scrollTrigger: { trigger: "#donate" },
      });

      tl.from("#donate .donate-img", { y: "30" }).from(
        ["#donate p", "#donate h2", "#donate h3", "#donate .btn"],
        {
          yPercent: -30,
        },
        "<"
      );
    },
    { scope: donateContainer }
  );

  return (
    <section
      id="donate"
      className="mt-12 text-blackColor bg-yellowColor grid grid-cols-1 lg:grid-cols-2 gap-10 p-10"
      ref={donateContainer}
    >
      <div className="donate-img">
        <Image
          className="rounded-lg shadow-2xl border-2 border-redColor overflow-hidden w-[700px] h-auto"
          src={supportImg}
          alt="support"
        />
      </div>
      <div className="flex flex-col justify-center px-10 py-8 gap-8">
        <p className="uppercase">It Can Make All The Difference</p>
        <h2 className="text-xl lg:text-4xl">Make A Donation</h2>
        <p>
          Click on the buttons to be taken to our donation page. You can make a
          one-off or a recurring, monthly donation through Paypal with your
          PayPal account or most debit and credit cards. If you wish to set up a
          standing order to pay your recurring donation, please contact us and
          we’ll send you the required paperwork. Whatever you give will be
          gratefully accepted.
        </p>
        <h3>Thank You For Supporting Our Work In Ghana.</h3>
        <div className="btn">
          <Link
            href="#"
            className="uppercase flex gap-3 bg-redColor px-8 py-3 rounded-lg font-bold tracking-wider text-xl justify-center w-60 text-white items-center hover:opacity-80 duration-500 transition-all"
          >
            <Image
              src="/assets/icons/heart.svg"
              alt="heart icon"
              style={{ color: "#fff", fill: "#fff", stroke: "#fff" }}
              width={20}
              height={20}
            />
            <span>Donate</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;

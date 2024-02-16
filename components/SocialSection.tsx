"use client";

import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* eslint-disable @next/next/no-img-element */
const SocialSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, duration: 1, ease: "back.in", stagger: 0.2 },
        scrollTrigger: "#bottom",
      });

      tl.from(["#bottom .image", "#bottom .list", "#bottom .content"], {
        yPercent: 50,
      });
    },
    { scope: container }
  );

  return (
    <section
      id="bottom"
      className="max-w-screen-xl mx-auto px-10 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 my-10 place-items-center"
      ref={container}
    >
      <div className="image flex flex-col items-center justify-center gap-8">
        <a href="/">
          <Image
            src={logo}
            alt="website logo"
            className="w-[600px] h-auto"
            priority
          />
        </a>
        <ul className="list flex items-center gap-5">
          <li className="bg-redColor p-1 rounded-full ">
            <a href="">
              <img src="/assets/icons/facebook-icon.svg" alt="facebook icon" />
            </a>
          </li>
          <li className="bg-redColor p-1 rounded-full ">
            <a href="">
              <img src="/assets/icons/x-icon.svg" alt="x icon" />
            </a>
          </li>
          <li className="bg-redColor p-1 rounded-full ">
            <a href="">
              <img
                src="/assets/icons/instagram-icon.svg"
                alt="instagram icon"
              />
            </a>
          </li>
          <li className="bg-redColor p-1 rounded-full ">
            <a href="">
              <img src="/assets/icons/youtube-icon.svg" alt="youtube iocn" />
            </a>
          </li>
        </ul>
      </div>
      <div className="content flex flex-col lg:ml-20 text-center lg:text-left">
        <h2 className="text-3xl mb-4">Make A Donation</h2>
        <p>
          We use Donation Manager to handle our donations so we pay less in bank
          charges and receive more of your donations. We can accept donations
          via Paypal and most credit cards. If you&apos;re a UK taxpayer, please
          Gift Aid your donations so we receive an extra 25p for every £1 you
          give us.
        </p>
        <div className="btn mt-10">
          <Link
            className="bg-greenColor uppercase font-bold px-10 py-3 rounded-lg shadow-lg hover:opacity-80 text-white transition-all hover:translate-y-1 duration-500"
            href="/donate"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

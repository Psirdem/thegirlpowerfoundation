"use client";

import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import "../../../app/styles/teamstyles.css";

gsap.registerPlugin(ScrollTrigger);

const TeamPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
      });

      tl.from(".team header h2", {
        y: "-100",
        scale: 1.2,
        ease: "bounce",
      })
        .from(
          ".team header p",
          {
            y: "100",
            ease: "elastic",
          },
          "<"
        )
        .from(".team .team-box", {
          yPercent: -30,
        });

      const tl1 = gsap.timeline({
        defaults: { opacity: 0, stagger: 0.2, duration: 1, ease: "circ" },
        scrollTrigger: {
          trigger: ".team .team-box-2",
          toggleActions: "play none play reverse",
        },
      });

      tl1.from([".team .team-box-2"], {
        yPercent: 50,
      });
    },
    { scope: container }
  );

  return (
    <section className="team h-52 lg:h-72 text-blackColor" ref={container}>
      <header className="text-white gap-4 text-center z-10 flex justify-center items-center h-full flex-col px-4">
        <h2 className="text-4xl lg:text-5xl">Our Team.</h2>
        <p className="lg:text-lg text-sm lg:w-1/2">
          Our Team is made up of a group of passionate and devoted employees,
          trustees and volunteers both in Ghana and the UK.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto container px-10 py-8 mt-10 gap-10">
        <div className="team-box flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/jemma.png"
            alt="CEO/Founder"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #006c3e" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Jemma Williams</h3>
            <small className="italic font-semibold text-gray-500">
              CEO/Founder
            </small>
          </div>
        </div>
        <div className="team-box flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/lia.png"
            alt="operations manager"
            width={220}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #d01f39" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Lia Smith</h3>
            <small className="italic font-semibold text-gray-500">
              Operations Manager
            </small>
          </div>
        </div>
        <div className="team-box flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/opoku.webp"
            alt="country director"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #1d1d1d" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Claudia Durowaa Opoku-Mensah</h3>
            <small className="italic font-semibold text-gray-500">
              Country Director
            </small>
          </div>
        </div>
        <div className="team-box flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/gloria.webp"
            alt=" Head of Administration"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #fdc500" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl"> Gloria Opoku-Frimpong</h3>
            <small className="italic font-semibold text-gray-500">
              Head of Administration
            </small>
          </div>
        </div>
        <div className="team-box flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/dela.webp"
            alt=" Head of Administration"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #006c3e" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Arnold Dela Kofi Azumah</h3>
            <small className="italic font-semibold text-gray-500">
              Facilities Manager
            </small>
          </div>
        </div>
        <div className="team-box flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/yaw.webp"
            alt=" Head of Administration"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #1d1d1d" }}
          />
          <div className="team-box-2 flex flex-col gap-2">
            <h3 className="text-2xl">Yaw Juantoah Boateng</h3>
            <small className="italic font-semibold text-gray-500">
              Brighter Futures Project Manager
            </small>
          </div>
        </div>
        <div className="team-box-2 flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/assan.webp"
            alt=" Head of Administration"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #fdc500" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Raymond Assan</h3>
            <small className="italic font-semibold text-gray-500">
              Start up business manager
            </small>
          </div>
        </div>
        <div className="team-box-2 flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/dome.webp"
            alt=" Head of Administration"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #d01f39" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Shadrach Dome</h3>
            <small className="italic font-semibold text-gray-500">
              Transport Manager
            </small>
          </div>
        </div>
        <div className="team-box-2 flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/erica.webp"
            alt=" Head of Administration"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #fdc500" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Erica Yeboah Nketiah</h3>
            <small className="italic font-semibold text-gray-500">
              Monitoring and Evaluation Officer
            </small>
          </div>
        </div>
        <div className="team-box-2 flex flex-col gap-6 items-center justify-center text-center">
          <Image
            src="/assets/images/peter.webp"
            alt=" Head of Administration"
            width={200}
            height={100}
            className="rounded-[100%]"
            style={{ boxShadow: "-4px 4px 0px 4px #d01f39" }}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">Peter Manu Osei</h3>
            <small className="italic font-semibold text-gray-500">
              Head of Media
            </small>
          </div>
        </div>
      </div>

      <div className="staff hands p-10 mt-10">
        <div className="max-w-screen-2xl mx-auto container flex flex-col lg:flex-row gap-10">
          <div className="staff-img">
            <Image
              src="/assets/images/staff.webp"
              alt="hands"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="staff-text bg-greenColor/85 text-white flex flex-col gap-4 p-8 shadow-2xl rounded-2xl flex-1 text-center justify-center items-center">
            <h2 className="text-3xl">Meet The Team</h2>
            <p>
              Porridge and Pens is a UK non-profit organisation with its
              headquarters in Essex, a coastal town called Brightlingsea.
              Founded by Jemma Williams, as far back in 2009 upon her encounter
              with a teenage girl who was subjected to a modern-day slavery in
              the name of “house girl/help”. It is against this backdrop that
              this organization was founded, coupled with gender inequalities
              which is prevalent in Ghana.
            </p>
          </div>
        </div>
      </div>
      <DonationSection />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default TeamPage;

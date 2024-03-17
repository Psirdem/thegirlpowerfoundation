"use client";

import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import { Button, Input, Textarea } from "@nextui-org/react";
import gsap from "gsap";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const container1 = useRef(null);
  const form = useRef<HTMLFormElement>(null);

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

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          form.current?.reset();
          toast.success("Email Sent Successfully!");
          setIsSubmitting(false);
        },
        error => {
          setIsSubmitting(false);
          toast.error("Oops, Something Went Wrong!");
          console.log(error);
        }
      );
  };

  return (
    <>
      <div className="contact mb-10" ref={container1}>
        <div className="title">
          <h2 className="text-2xl lg:text-4xl">Contact Us</h2>
          <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
          <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
        </div>
        <div className="mt-14">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full flex-wrap md:flex-nowrap gap-8"
          >
            <Input
              isRequired
              type="text"
              label="Name"
              placeholder="Enter your name"
              labelPlacement="outside"
              variant="underlined"
              className="input"
              name="user_name"
            />

            <Input
              isRequired
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              labelPlacement="outside"
              variant="underlined"
              description="We'll never share your email with anyone else."
              className="input"
              name="email"
            />
            <Textarea
              variant="underlined"
              label="Message"
              labelPlacement="outside"
              placeholder="Enter your message"
              className="input col-span-12 md:col-span-6 mb-6 md:mb-0"
              name="user_message"
            />
            <p className="flex gap-2 text-center items-center font-bold italic">
              <span> Field is required</span>
              <span className="text-redColor">*</span>
            </p>
            <Button
              className="w-44 font-bold bg-redColor text-white uppercase rounded-sm shadow-2xl btn"
              size="lg"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

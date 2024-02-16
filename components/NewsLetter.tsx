"use client";
import { Input } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import gsap from "gsap";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NewsLetter = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = useState("full");
  const container = useRef(null);

  const handleOpen = (size: string) => {
    setSize(size);
    onOpen();
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: { opacity: 0, duration: 1, stagger: 0.2, ease: "power3.in" },
        scrollTrigger: "#news",
      });

      tl.from(["#news h3 ", "#news p"], {
        xPercent: 50,
      }).from(
        "#news .btn",
        {
          yPercent: 30,
        },
        "<"
      );
    },

    { scope: container }
  );

  return (
    <div id="news" className=" bg-greenColor text-white" ref={container}>
      <div className="flex flex-col lg:flex-row justify-between lg:justify-between items-center gap-8 py-12 text-center lg:text-left max-w-screen-2xl mx-auto px-10">
        <div>
          <h3 className="text-3xl mb-2">Subscribe To Our Newsletter</h3>
          <p>Stay informed about our in Ghana and our latest campaigns.</p>
        </div>
        <div className="btn">
          <Button
            size="lg"
            className="font-bold uppercase bg-yellowColor text-2xl rounded px-12 py-8 shadow-2xl"
            onPress={() => handleOpen(size)}
          >
            <Send size={30} /> Subscribe
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="m-4">
            <ModalContent>
              {onClose => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    <h2 className="font-normal text-3xl">
                      Subscribe To Our Newsletter
                    </h2>
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                      <Input
                        isRequired
                        type="email"
                        label="Email Address"
                        placeholder="Enter your email"
                        labelPlacement="outside"
                        className="border-2 rounded"
                      />
                      <Input
                        isRequired
                        type="text"
                        label="First Name"
                        placeholder="Enter last name"
                        labelPlacement="outside"
                        className="border-2 rounded"
                      />
                      <Input
                        isRequired
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                        labelPlacement="outside"
                        className="border-2 rounded"
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="text-redColor font-semibold"
                      variant="light"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                    <Button
                      className="bg-yellowColor font-bold uppercase px-10 rounded"
                      onPress={onClose}
                    >
                      Subscribe
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

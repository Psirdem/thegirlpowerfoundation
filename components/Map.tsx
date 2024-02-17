"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

gsap.registerPlugin(ScrollTrigger);

const Map = () => {
  const container2 = useRef(null);

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
    <div className="map my-16" ref={container2}>
      <div className="title mb-10">
        <h2 className="text-2xl lg:text-4xl">Our Location</h2>
        <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
      </div>
      <div>
        <MapContainer
          center={[6.67508, -1.61645]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "500px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={[6.67508, -1.61645]}>
            <Popup>
              <span>Our location</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

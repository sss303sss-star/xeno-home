"use client";

import { useState } from "react";
import styles from "../../styles/sections/HeroSection.module.css";
import { BASE_PATH } from "../../lib/asset";

const imgAlienIcon = `${BASE_PATH}/icons/alien.png`;
const imgCloseIcon = `${BASE_PATH}/icons/close.png`;
const imgMenuIcon = `${BASE_PATH}/icons/menu.png`;

const navLinks = ["Home", "About", "Experiences", "Products", "Customers"];

const heroWords = [
  { text: "Beyond Limits,", badge: false },
  { text: "Trusted", badge: false },
  { text: "AI", badge: true },
  { text: "in Your", badge: false },
  { text: "Private Network", badge: false },
];

// Figma values:
//   bg: rgba(142,142,142,0.5) + backdrop-blur-[20px]
//   Btn Nav: h-[48px] px-[14px] rounded-[12px]
//   Popup/Menu: p-[24px] rounded-[12px], font Tomorrow 24px, gap-[8px], leading-[1.6]
//   Position: top-[40px] left-1/2 -translate-x-1/2 w-[420px]
function HeroNav() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute z-20 flex flex-col gap-[8px] left-[16px] right-[16px] top-[16px] md:left-1/2 md:right-auto md:-translate-x-1/2 md:top-[40px] md:w-[420px]">

      {/* Btn Nav */}
      <div className="flex items-center justify-between h-[48px] px-[14px] rounded-[12px] relative overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-[20px]" style={{ background: "rgba(142,142,142,0.5)" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgAlienIcon} alt="" className="relative w-[22px] h-[24px]" />
        {open && (
          <button
            onClick={() => setOpen(false)}
            className="relative size-[30px] overflow-hidden cursor-pointer"
            aria-label="Close menu"
          >
            <div className="absolute inset-[23.72%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgCloseIcon} alt="" className="absolute block inset-0 max-w-none size-full" />
            </div>
          </button>
        )}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="relative size-[30px] cursor-pointer"
            aria-label="Open menu"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgMenuIcon} alt="" className="absolute block inset-0 max-w-none size-full" />
          </button>
        )}
      </div>

      {/* Popup / Menu */}
      {open && (
        <div
          className="flex flex-col items-center p-[24px] rounded-[12px] w-full backdrop-blur-[20px]"
          style={{ background: "rgba(142,142,142,0.5)" }}
        >
          <div className="flex flex-col gap-[8px] items-start w-full whitespace-nowrap">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className={`${styles.navBtn} flex flex-col justify-center relative shrink-0 text-left text-white hover:opacity-70 transition-opacity p-0 h-[38px]`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-black block relative w-full overflow-hidden h-[700px] md:h-[1073px]"
    >
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={`${BASE_PATH}/videos/hero-bg.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      <HeroNav />

      {/* Hero text container
          Mobile:  full-width, px-[50px], top 50%-50px, -translateY
          Tablet:  w-355, centered (left-1/2 -translateX), top 50%-79.5px, -translateXY
          Laptop:  w-897, centered */}
      <div
        className="
          absolute content-start flex flex-wrap items-start justify-center -translate-y-1/2
          left-0 right-0 px-[50px] gap-x-[18px] gap-y-[4px]
          top-[calc(50%-50px)]
          md:left-1/2 md:right-auto md:px-0 md:-translate-x-1/2
          md:w-[355px] md:gap-y-0 md:top-[calc(50%-79.5px)]
          xl:w-[886px] xl:gap-y-[8px] xl:top-[calc(50%-80px)]
        "
      >
        {heroWords.map(({ text, badge }) =>
          badge ? (
            <div
              key="ai-badge"
              className="
                border-solid border-white flex items-center shrink-0 whitespace-nowrap
                border-2 rounded-[9px] px-[13px] h-[40px]
                md:border-4 md:rounded-[19px] md:px-[23px] md:h-[64px]
                xl:h-[70px] xl:px-[27px]
                2xl:h-[80px]
              "
            >
              <span className={`${styles.heroWord} text-white not-italic text-[24px] md:text-[36px] 2xl:text-[48px]`}>
                {text}
              </span>
            </div>
          ) : (
            <div
              key={text}
              className="flex items-center shrink-0 whitespace-nowrap h-[40px] md:h-[64px] xl:h-[70px] 2xl:h-[80px]"
            >
              <span className={`${styles.heroWord} text-white not-italic text-[32px] md:text-[40px] xl:text-[64px]`}>
                {text}
              </span>
            </div>
          )
        )}
      </div>

      {/* Service list
          Mobile:  left-[37px], bottom-[37px]
          Tablet+: left calc(14.29%-14px), top-[838px], -translateY-1/2 */}
      <div
        className="
          absolute flex flex-col justify-center whitespace-nowrap
          left-[37px] bottom-[37px]
          md:bottom-auto md:top-[838px] md:-translate-y-1/2 md:left-[calc(14.29%-14px)]
        "
      >
        <p className={`${styles.serviceList} text-white not-italic text-[15px] md:text-[20px]`}>
          DX/AX Consulting
          <br />
          On-premise AI Application Deployment
          <br />
          Enterprise System Integration
        </p>
      </div>
    </section>
  );
}

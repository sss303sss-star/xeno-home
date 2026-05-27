"use client";

import { useState } from "react";
import styles from "../../styles/sections/HeroSection.module.css";
import { BASE_PATH } from "../../lib/asset";

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
    <div className={styles.navWrapper}>

      {/* Btn Nav */}
      <div className={styles.navBar}>
        <div className="absolute inset-0 backdrop-blur-[20px]" style={{ background: "rgba(142,142,142,0.5)" }} />
        <svg
          aria-hidden="true"
          viewBox="0 0 46 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-[22px] h-[24px]"
        >
          <path d="M41.4496 9.10448C36.301 -0.0271368 23.0382 9.47433e-07 23.0382 9.47433e-07C23.0382 9.47433e-07 9.69305 -0.0271368 4.54446 9.10448C-0.164794 17.4627 -1.7437 27.1506 2.36145 33.9077C6.48033 40.6649 17.2992 50 23.0382 50C28.7772 50 39.5137 40.6649 43.6326 33.9077C47.7515 27.1506 46.1588 17.4627 41.4496 9.10448ZM20.6081 37.0149C20.1001 37.7069 14.7455 37.327 10.8601 34.4369C6.97459 31.5468 5.87623 27.5441 6.53525 26.54C7.19427 25.536 12.4527 26.1465 16.3519 29.0366C20.2374 31.9267 21.1435 36.3229 20.6218 37.0149H20.6081ZM35.134 34.4369C31.2485 37.327 25.894 37.7069 25.386 37.0149C24.878 36.3229 25.7704 31.9403 29.6559 29.0366C33.5414 26.1465 38.8135 25.5224 39.4725 26.54C40.1316 27.5577 39.0332 31.5468 35.1477 34.4369H35.134Z" fill="white"/>
        </svg>
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
          className={styles.navPopup}
          style={{ background: "rgba(142,142,142,0.5)" }}
        >
          <div className="flex flex-col gap-[8px] items-start w-full whitespace-nowrap">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className={styles.navBtn}
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
      className={styles.heroSection}
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
        className={styles.heroTextContainer}
      >
        {heroWords.map(({ text, badge }) =>
          badge ? (
            <div
              key="ai-badge"
              className={styles.aiBadge}
            >
              <span className={`${styles.heroWord} text-[24px] md:text-[36px] 2xl:text-[48px]`}>
                {text}
              </span>
            </div>
          ) : (
            <div
              key={text}
              className={styles.heroWordWrap}
            >
              <span className={`${styles.heroWord} text-[32px] md:text-[40px] xl:text-[64px]`}>
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
        className={styles.serviceListWrap}
      >
        <p className={styles.serviceList}>
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

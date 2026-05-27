"use client";

import { useState } from "react";
import Image from "next/image";
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
        <div className={styles.navBarBlur} style={{ background: "rgba(142,142,142,0.5)" }} />
        <Image
          src={`${BASE_PATH}/icons/alien.svg`}
          alt=""
          aria-hidden="true"
          width={46}
          height={50}
          className={styles.navAlienIcon}
          unoptimized
        />
        {open && (
          <button
            onClick={() => setOpen(false)}
            className={styles.navCloseBtn}
            aria-label="Close menu"
          >
            <div className={styles.navCloseIconWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgCloseIcon} alt="" className={styles.navIconImg} />
            </div>
          </button>
        )}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className={styles.navMenuBtn}
            aria-label="Open menu"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgMenuIcon} alt="" className={styles.navIconImg} />
          </button>
        )}
      </div>

      {/* Popup / Menu */}
      {open && (
        <div
          className={styles.navPopup}
          style={{ background: "rgba(142,142,142,0.5)" }}
        >
          <div className={styles.navLinkList}>
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
        className={styles.heroBgVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={`${BASE_PATH}/videos/hero-bg.mp4`} type="video/mp4" />
      </video>
      <div className={styles.heroOverlay} />

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
              <span className={styles.heroWordBadge}>
                {text}
              </span>
            </div>
          ) : (
            <div
              key={text}
              className={styles.heroWordWrap}
            >
              <span className={styles.heroWordText}>
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

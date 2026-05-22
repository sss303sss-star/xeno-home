"use client";

import styles from "../../styles/sections/ContactsSection.module.css";
import { BASE_PATH } from "../../lib/asset";

const imgAlienIcon = `${BASE_PATH}/icons/alien.png`;

const navLinks = ["Home", "About", "Experiences", "Products", "Customers"];

export default function ContactsSection() {
  const handleScroll = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contacts"
      className="bg-black flex flex-col items-center relative w-full py-[80px] h-[730px] md:h-[702px] xl:h-[730px] overflow-hidden"
    >
      {/* Space video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={`${BASE_PATH}/videos/space-bg.mp4`} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full max-w-[1312px] px-[32px] xl:px-[80px] 2xl:px-0">
        {/* Row 1: Contact info + Nav
            mobile/tablet → flex-col gap-[50px]
            xl+          → flex-row */}
        <div className="flex flex-col xl:flex-row pb-[80px] gap-[50px] xl:gap-0">
          {/* Contact info block */}
          <div className="flex flex-col gap-[32px] shrink-0 pr-[60px] xl:w-[500px]">
            <p
              className={`${styles.contactInfo} text-white text-[12px] md:text-[16px]`}
              style={{ lineHeight: 2 }}
            >
              Mail . contact@xenoimpact.com
              <br />
              Tel . 02.3444.0201
            </p>
            <div
              className={`${styles.address} flex flex-wrap gap-x-[4px] text-white text-[12px] md:text-[15px]`}
              style={{ lineHeight: 1.6 }}
            >
              <span>48, Achasan-ro 17-gil, </span>
              <span>Seongdong-gu, </span>
              <span>Seoul, </span>
              <span>Republic of Korea</span>
            </div>
          </div>

          {/* Nav + Alien icon */}
          <div className="relative flex-1 flex flex-col gap-[4px] pr-[60px]">
            <div className="flex flex-col text-white">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleScroll(link)}
                  className={`${styles.navLink} text-left hover:opacity-70 transition-opacity text-[16px] md:text-[20px]`}
                  style={{ lineHeight: 2 }}
                >
                  {link}
                </button>
              ))}
            </div>
            {/* Alien icon: 33×36 mobile / 46×50 md+ */}
            <div className="absolute right-0 top-[10px] w-[33px] h-[36px] md:w-[46px] md:h-[50px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgAlienIcon}
                alt=""
                aria-hidden="true"
                className="block size-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Copyright + Logo
            mobile  → flex-col gap-0,     logo pt-[32px]
            tablet  → flex-col gap-[20px], logo pt-[6px]
            xl+     → flex-row,            logo pt-[6px] */}
        <div className="flex flex-col md:gap-[20px] xl:flex-row xl:gap-0 xl:items-start">
          {/* Copyright */}
          <p
            className={`${styles.copyright} text-white text-[12px] md:text-[13px] shrink-0 xl:w-[500px]`}
            style={{ lineHeight: 1.6 }}
          >
            © 2025 xenoimpact Inc.
            <br />
            All rights reserved.
          </p>

          {/* XENOIMPACT logo icon */}
          <div className="flex flex-1 items-start pt-[32px] md:pt-[6px]">
            <svg
              aria-label="XENOIMPACT"
              role="img"
              viewBox="0 0 46 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block h-[18px] md:h-[24px] w-auto"
            >
              <path d="M41.4496 9.10448C36.301 -0.0271368 23.0382 9.47433e-07 23.0382 9.47433e-07C23.0382 9.47433e-07 9.69305 -0.0271368 4.54446 9.10448C-0.164794 17.4627 -1.7437 27.1506 2.36145 33.9077C6.48033 40.6649 17.2992 50 23.0382 50C28.7772 50 39.5137 40.6649 43.6326 33.9077C47.7515 27.1506 46.1588 17.4627 41.4496 9.10448ZM20.6081 37.0149C20.1001 37.7069 14.7455 37.327 10.8601 34.4369C6.97459 31.5468 5.87623 27.5441 6.53525 26.54C7.19427 25.536 12.4527 26.1465 16.3519 29.0366C20.2374 31.9267 21.1435 36.3229 20.6218 37.0149H20.6081ZM35.134 34.4369C31.2485 37.327 25.894 37.7069 25.386 37.0149C24.878 36.3229 25.7704 31.9403 29.6559 29.0366C33.5414 26.1465 38.8135 25.5224 39.4725 26.54C40.1316 27.5577 39.0332 31.5468 35.1477 34.4369H35.134Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

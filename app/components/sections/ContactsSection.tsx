"use client";

import styles from "../../styles/sections/ContactsSection.module.css";

const imgAlienIcon = "/icons/alien.png";
const imgLogoXenoimpact = "/logos/customers/xenoimpact.svg";

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
        <source src="/videos/space-bg.mp4" type="video/mp4" />
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

          {/* XENOIMPACT logo: 156×18 mobile / 214×24 md+ */}
          <div className="flex flex-1 items-start pt-[32px] md:pt-[6px]">
            <div className="relative w-[156px] h-[18px] md:w-[214px] md:h-[24px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgLogoXenoimpact}
                alt="XENOIMPACT"
                className="absolute block inset-0 max-w-none size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

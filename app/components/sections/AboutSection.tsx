"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/sections/AboutSection.module.css";
import { BASE_PATH } from "../../lib/asset";

const imgAI = `${BASE_PATH}/images/about-ai.png`;

const tagWords = [
  { text: "Xenoimpact delivers  ", boxed: false },
  { text: "Enterprise AI ", boxed: true },
  { text: "that makes ", boxed: false },
  { text: "work smarter ", boxed: false },
  { text: "and faster. ", boxed: false },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-white relative w-full py-[40px] md:py-[64px] xl:py-[88px] flex flex-col items-center"
    >
      <div className="max-w-[1312px] w-full flex flex-col items-center px-[32px] xl:px-0">
        {/* Header: mobile/tablet=flex-col items-center, laptop=flex-row items-center justify-between */}
        <div className="flex flex-col gap-[32px] items-start xl:flex-row xl:items-center xl:justify-between relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className={styles.heading}>
            <p style={{ lineHeight: "normal" }}>About</p>
          </div>
        </div>

        {/* Tagline: mobile=flex-col, tablet+=flex-row; deco width 16→22→32 */}
        <div className="flex flex-col gap-[10px] items-center py-[10px] md:flex-row md:gap-[10px] md:py-[16px] relative shrink-0">
          <div className={styles.tagline}>
            <p className="whitespace-pre" style={{ lineHeight: "normal", marginBottom: 0 }}>
              {"Driving automation and innovation "}
            </p>
            <p className="whitespace-pre" style={{ lineHeight: "normal" }}>
              {"with cutting-edge IT to maximize business value"}
            </p>
          </div>
          <div className="absolute border-b border-black border-solid border-t bottom-0 left-0 top-0 w-[16px] md:w-[22px] xl:w-[32px]" />
        </div>
      </div>

      {/* Wrap: h-531 on mobile, h-853 on tablet+ */}
      <div className="h-[531px] md:h-[853px] relative shrink-0 w-full">

        {/* AI image
            Mobile:  left-0, top-57, 197×168
            Tablet:  left-1/2, -translateX-1/2, top-143, 365×311
            Laptop:  left-124, top-143, 555.5×473.5, no translate */}
        <div
          ref={containerRef}
          className="absolute
            left-0 top-[57px] w-[197px] h-[168px]
            md:left-1/2 md:-translate-x-1/2 md:top-[143px] md:w-[365px] md:h-[311px]
            xl:left-[124px] xl:translate-x-0 xl:w-[555.5px] xl:h-[473.5px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgAI}
            alt="AI"
            className={`absolute inset-0 max-w-none object-cover size-full pointer-events-none ${styles.aboutImg} ${
              isIntersecting ? styles.visible : ""
            }`}
          />
        </div>

        {/* Description
            Mobile:  absolute top-255, left-0, right-0, gap-24
            Tablet:  bottom-28, left-1/2 -translateX-1/2, w-593, gap-40
            Laptop:  bottom-28, right-53, w-800, gap-40 */}
        <div
          className="absolute flex flex-col items-start md:items-end
            top-[255px] left-0 right-0 gap-[24px]
            md:top-auto md:bottom-[28px] md:left-[calc(50%+0.5px)] md:right-auto md:-translate-x-1/2 md:w-[593px] md:gap-[40px]
            xl:left-auto xl:right-[53px] xl:translate-x-0 xl:w-[800px]"
        >
          {/* Tag sentence
              gap-x: mobile/laptop=12, tablet=10 */}
          <div
            className="flex flex-wrap items-start justify-start relative shrink-0 w-full gap-x-[12px] gap-y-[2px] md:gap-x-[10px] md:gap-y-0 xl:gap-x-[12px]"
            style={{ paddingTop: 2, paddingBottom: 2 }}
          >
            {tagWords.map(({ text, boxed }) =>
              boxed ? (
                <div
                  key={text}
                  className={styles.tagBadge}
                >
                  <div className={styles.tagWordBoxed}>
                    <p style={{ lineHeight: "normal" }}>{text}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={text}
                  className={styles.tagWordWrap}
                >
                  <div className={styles.tagWord}>
                    <p className="whitespace-pre" style={{ lineHeight: "normal" }}>{text}</p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Divider */}
          <div className="w-full border-t border-[#cdcdcd]" />

          {/* Body text: 14px mobile (line-height normal), 19px tablet+ (line-height 33px) */}
          <div className={styles.bodyText}>
            <p className="text-[14px] text-left md:text-[19px] leading-normal md:leading-[33px] tracking-[0em]">
              We focus on turning complex data into clear insights, automating processes, and creating
              tools that anyone in the company can use—without technical barriers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

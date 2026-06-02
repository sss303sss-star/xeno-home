import styles from "../../styles/sections/ExperiencesSection.module.css";
import { BASE_PATH } from "../../lib/asset";

const awards = [
  { year: "2018", brand: "SAMSUNG", title: "SAMSUNG 2Q BEST INNOVATION ACHIEVEMENT", image: `${BASE_PATH}/awards/award-1.jpg` },
  { year: "2017", brand: "SAMSUNG", title: "SAMSUNG 2Q BEST INNOVATION ACHIEVEMENT", image: `${BASE_PATH}/awards/award-2.jpg` },
  { year: "2013", brand: "SAMSUNG", title: "SAMSUNG 3Q WORK SMART AWARD", image: `${BASE_PATH}/awards/award-3.jpg` },
  { year: "2010", brand: "SAMSUNG", title: "SAMSUNG MANAGEMENT INNOVATION AWARD", image: `${BASE_PATH}/awards/award-4.jpg` },
  { year: "2010", brand: "SAMSUNG", title: "SAMSUNG MEMORY BUSINESS SUPPORT AWARD", image: `${BASE_PATH}/awards/award-5.jpg` },
  { year: "2009", brand: "SAMSUNG", title: "SAMSUNG MEMORY MANAGEMENT INNOVATION AWARD", image: `${BASE_PATH}/awards/award-6.jpg` },
];

export default function ExperiencesAwardsSection() {
  return (
    <div className={`${styles.awardsWrapper} w-full overflow-hidden pt-[40px] md:pt-[64px] xl:pt-[80px]`}>
      <div className={`${styles.awardsTrack} flex gap-[32px] w-max`}>
        {[...awards, ...awards].map((award, i) => (
          <div
            key={i}
            className="relative shrink-0 snap-start overflow-hidden rounded-[24px]
              w-[311px] h-[180px]
              md:w-[575px]
              xl:w-[615px] xl:h-[273px]"
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={award.image}
              alt={award.title}
              className="absolute inset-0 size-full object-cover"
            />

            {/* Mobile (<700px): VERTICAL layout — badge top, title bottom */}
            <div className="relative flex flex-col justify-between h-full p-[24px] md:hidden">
              {/* Badge — 96×56px */}
              <div className="relative self-start w-[96px] h-[56px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE_PATH}/awards/laurel-left.png`} alt="" aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-auto object-contain pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE_PATH}/awards/laurel-right.png`} alt="" aria-hidden="true"
                  className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[2px]">
                  <span className={`${styles.monda} text-[#D9D9D9] text-[5px] font-medium uppercase tracking-[0.2em]`}>
                    AWARDS
                  </span>
                  <div className="flex items-center gap-[4px]">
                    <div className="h-px w-[14px] bg-[#D9D9D9]" />
                    <span className={`${styles.monda} text-[#D9D9D9] text-[8px] font-medium`}>
                      {award.year}
                    </span>
                    <div className="h-px w-[14px] bg-[#D9D9D9]" />
                  </div>
                  <span className={`${styles.monda} text-[#D9D9D9] text-[5px] font-medium uppercase tracking-[0.1em]`}>
                    {award.brand}
                  </span>
                </div>
              </div>
              {/* Title */}
              <p className={`${styles.monda} text-white text-[12px] font-medium uppercase leading-snug`}>
                {award.title}
              </p>
            </div>

            {/* Tablet / Desktop (≥700px): HORIZONTAL layout — badge left, title right */}
            <div className="relative hidden md:flex flex-row items-center gap-[64px] h-full p-[40px]">
              {/* Badge — 167×97px (md) / 219×127px (xl) */}
              <div className="relative shrink-0
                w-[167px] h-[97px]
                xl:w-[219px] xl:h-[127px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE_PATH}/awards/laurel-left.png`} alt="" aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-auto object-contain pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE_PATH}/awards/laurel-right.png`} alt="" aria-hidden="true"
                  className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[3px] xl:gap-[4px]">
                  <span className={`${styles.monda} text-[#D9D9D9] text-[8px] xl:text-[10px] font-medium uppercase tracking-[0.2em]`}>
                    AWARDS
                  </span>
                  <div className="flex items-center gap-[6px] xl:gap-[8px]">
                    <div className="h-px w-[24px] xl:w-[32px] bg-[#D9D9D9]" />
                    <span className={`${styles.monda} text-[#D9D9D9] text-[13px] xl:text-[17px] font-medium`}>
                      {award.year}
                    </span>
                    <div className="h-px w-[24px] xl:w-[32px] bg-[#D9D9D9]" />
                  </div>
                  <span className={`${styles.monda} text-[#D9D9D9] text-[8px] xl:text-[10px] font-medium uppercase tracking-[0.1em]`}>
                    {award.brand}
                  </span>
                </div>
              </div>
              {/* Title */}
              <p className={`${styles.monda} text-white text-[16px] xl:text-[24px] font-medium uppercase leading-snug`}>
                {award.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

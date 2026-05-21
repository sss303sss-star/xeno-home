import { BASE_PATH } from "../../lib/asset";

const row1Logos = [
  { src: `${BASE_PATH}/logos/customers/hyundai-mobis.svg`, alt: "Hyundai Mobis", w: 70, h: 24 },
  { src: `${BASE_PATH}/logos/customers/hyundai-motor.svg`, alt: "Hyundai Motor Group", w: 75, h: 24 },
  { src: `${BASE_PATH}/logos/customers/kt.svg`, alt: "KT", w: 30, h: 24 },
  { src: `${BASE_PATH}/logos/customers/sk-ax.svg`, alt: "SK AX", w: 45, h: 24 },
  { src: `${BASE_PATH}/logos/customers/samsung.svg`, alt: "Samsung", w: 100, h: 16 },
  { src: `${BASE_PATH}/logos/customers/lg.svg`, alt: "LG", w: 52, h: 24 },
  { src: `${BASE_PATH}/logos/customers/amore.svg`, alt: "Amorepacific", w: 161, h: 16 },
  { src: `${BASE_PATH}/logos/customers/kumho.svg`, alt: "Kumho Tire", w: 91, h: 24 },
  { src: `${BASE_PATH}/logos/customers/gs-caltex.svg`, alt: "GS Caltex", w: 90, h: 24 },
  { src: `${BASE_PATH}/logos/customers/woongjin.svg`, alt: "Woongjin", w: 47, h: 24 },
  { src: `${BASE_PATH}/logos/customers/volvo.svg`, alt: "Volvo", w: 116, h: 16 },
  { src: `${BASE_PATH}/logos/customers/doosan.svg`, alt: "Doosan", w: 114, h: 16 },
];

const row2Logos = [
  { src: `${BASE_PATH}/logos/customers/transys.svg`, alt: "Transys", w: 150, h: 12 },
  { src: `${BASE_PATH}/logos/customers/icross.svg`, alt: "iCross", w: 111, h: 24 },
  { src: `${BASE_PATH}/logos/customers/cisco.svg`, alt: "Cisco", w: 45, h: 24 },
  { src: `${BASE_PATH}/logos/customers/kriss.svg`, alt: "KRISS", w: 58, h: 16 },
  { src: `${BASE_PATH}/logos/customers/lh.svg`, alt: "LH", w: 64, h: 24 },
  { src: `${BASE_PATH}/logos/customers/icepri.svg`, alt: "Icepri", w: 110, h: 24 },
  { src: `${BASE_PATH}/logos/customers/secui.svg`, alt: "SECUI", w: 91, h: 16 },
  { src: `${BASE_PATH}/logos/customers/defense.svg`, alt: "Defense Acquisition Program Administration", w: 80, h: 24 },
  { src: `${BASE_PATH}/logos/customers/kweather.svg`, alt: "KWeather", w: 69, h: 24 },
  { src: `${BASE_PATH}/logos/customers/ministry.svg`, alt: "Ministry of Science and ICT", w: 91, h: 24 },
  { src: `${BASE_PATH}/logos/customers/tmoney.svg`, alt: "Tmoney", w: 99, h: 24 },
];

export default function CustomerLogosSection() {
  return (
    <div className="pt-[40px] md:pt-[80px] flex flex-col gap-[60px] shrink-0 w-full">
      <div className="flex items-center gap-[60px] overflow-x-auto px-[30px]">
        {row1Logos.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={logo.src} src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} className="block shrink-0" />
        ))}
      </div>
      <div className="flex items-center gap-[60px] overflow-x-auto px-[30px]">
        {row2Logos.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={logo.src} src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} className="block shrink-0" />
        ))}
      </div>
    </div>
  );
}

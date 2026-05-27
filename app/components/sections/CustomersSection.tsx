import styles from "../../styles/sections/CustomersSection.module.css";
import CustomerLogosSection from "./CustomerLogosSection";
import { BASE_PATH } from "../../lib/asset";

const testimonials = [
  {
    logo: { src: `${BASE_PATH}/logos/customers/samsung.svg`, alt: "Samsung", className: "w-[101px] h-[16px] md:w-[151px] md:h-[24px]" },
    quote: "MARU Platform is not just about collecting data; it has established itself as a knowledge-driven decision-making platform that can be used directly in the field.",
    extendedQuote: [
      "MARU Platform is not just about collecting data; it has established itself as a knowledge-driven decision-making platform that can be used directly in the field. It is particularly impressive that it is designed to go beyond reporting screens and enable actual execution.",
      "By leveraging CRM as a foundation, it naturally connects information across departments, turning previously scattered data and results into a shared asset. Automated dashboards, reports, word clouds, and advanced search features allow users to quickly gain the insights they need, and the interactive assistant lets users ask questions and receive immediate, summarized answers, greatly improving work efficiency.",
      "Most importantly, since it extends existing CRM capabilities, lead and account management have been enhanced, and it integrates flexibly with other departmental systems, making it a platform that goes beyond digital transformation to deliver tangible results directly in the workplace.",
    ],
    name: "Former Vice President, Han",
    company: "SAMSUNG ELECTRONICS, Memory, Strategy Marketing",
  },
  {
    logo: { src: `${BASE_PATH}/logos/customers/hyundai-motor.svg`, alt: "Hyundai Motor Group", className: "w-[81px] h-[26px] md:w-[125px] md:h-[40px]" },
    quote: "We sincerely appreciate your bold initiative in exploring the new domain of improving SI design and development methodologies using generative AI.",
    extendedQuote: [
      "We sincerely appreciate your bold initiative in exploring the new domain of improving SI design and development methodologies using generative AI.",
      "Thanks to your deep expertise and guidance, the project was successfully executed, allowing us to realize its potential.",
      "We look forward to creating even greater innovations together with your company in the future.",
    ],
    name: "Team Leader, Johnny Park",
    company: "HYUNDAI Motor Group",
  },
  {
    logo: { src: `${BASE_PATH}/logos/customers/sk-ax.svg`, alt: "SK AX", className: "w-[72px] h-[38px] md:w-[91px] md:h-[48px]" },
    quote: "In this large-scale national infrastructure project worth ₩30 billion, they earned our deep trust and enabled the successful completion of a mission-critical security system.",
    extendedQuote: [
      "Our experience working together on the Incheon International Airport Phase 2 Security System Integration Project (2005–2008) was truly impressive.",
      "They seamlessly integrated complex security elements such as perimeter protection, CCTV, and access control into a unified command-and-control system, and resolved the challenges of real-time monitoring and network communication.",
      "Thanks to their expertise and dedication, we were able to establish a stable and complete security system for Terminal 2.",
      "In this large-scale national infrastructure project worth ₩30 billion, they earned our deep trust and enabled the successful completion of a mission-critical security system.",
    ],
    name: "Former Leader, Nam",
    company: "SK AX, Information Security",
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <div className="group bg-white flex flex-col h-[363px] md:h-[443px] overflow-hidden relative rounded-[16px] md:rounded-[24px] w-full">

      {/* Marker — collapses on hover */}
      <div className="flex items-start h-[70px] md:h-[120px] group-hover:h-0 group-hover:pt-0 group-hover:opacity-0 overflow-hidden pt-[32px] px-[24px] md:px-[32px] shrink-0 w-full transition-all duration-300 ease-out">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.logo.src} alt={item.logo.alt} className={`block shrink-0 ${item.logo.className}`} />
      </div>

      {/* Quote area */}
      <div className="flex flex-1 flex-col min-h-0 w-full relative">
        {/* Default short quote — fades out on hover */}
        <p className={`${styles.testimonialQuote} text-[20px] md:text-[28px] text-black px-[24px] md:px-[32px] pt-[24px] pb-[80px] shrink-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-out`}>
          {item.quote}
        </p>

        {/* Extended quote — fades in on hover, scrollable */}
        <div className="absolute inset-0 flex flex-col gap-[1em] px-[24px] md:px-[32px] pt-[24px] pb-[120px] overflow-y-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
          {item.extendedQuote.map((para, i) => (
            <p key={i} className={`${styles.testimonialQuote} text-[18px] md:text-[22px] text-black leading-[2]`}>
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Attribution with gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end pb-[24px] pt-[32px] px-[24px] md:px-[32px]"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 23.077%)" }}
      >
        <div className="flex flex-1 flex-col min-w-0">
          <p className={`${styles.testimonialName} text-[16px]`}>{item.name}</p>
          <p className={`${styles.testimonialCompany} text-[12px] md:text-[16px]`}>{item.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function CustomersSection() {
  return (
    <section
      id="customers"
      className="bg-[#f5f5f5] flex flex-col items-center py-[40px] md:py-[88px] relative w-full"
    >
      <div className="w-full max-w-[1312px] flex flex-col">
        {/* Section header */}
        <div className="flex flex-col items-start gap-[40px] md:gap-[64px] xl:flex-row xl:justify-between xl:items-start relative shrink-0 w-full px-[44px] md:px-[32px] xl:px-[80px] 2xl:px-0">
          <div className="flex items-center justify-start relative shrink-0">
            <h2 className={`${styles.heading} text-[28px] xl:text-[48px] 2xl:text-[64px] text-black not-italic`}>
              Customers
            </h2>
          </div>

          <div className="flex gap-[10px] items-center py-[10px] md:py-[16px] relative shrink-0 xl:w-[calc(50%-32px)]">
            <div className={`${styles.tagline} text-[12px] md:text-[16px] xl:text-[20px] text-black uppercase`}>
              <p style={{ lineHeight: "normal", marginBottom: 0 }}>Empowering our clients with</p>
              <p style={{ lineHeight: "normal" }}>reliable performance, agility, and value since 2004</p>
            </div>
            <div className="absolute border-b border-black border-solid border-t bottom-0 left-0 top-0 w-[22px] md:w-[28px] xl:w-[32px]" />
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="pt-[40px] md:pt-[64px] px-[16px] md:px-[32px] xl:px-[80px] 2xl:px-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-[32px] md:gap-[64px] xl:grid xl:grid-cols-2 xl:gap-[64px]">
            {testimonials.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Customer logos — 2 rows */}
      <CustomerLogosSection />
    </section>
  );
}

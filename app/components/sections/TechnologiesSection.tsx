import styles from "../../styles/sections/TechnologiesSection.module.css";

// Background video fill (Figma videoHash: 711e498afdfff7112094926b9f95a0964a34ae98)
// Download from Figma and place at /public/videos/tech-bg.mp4 to enable (see FIGMA_DIFF.md T-1)

const techCategories = [
  {
    title: "Enterprise Digital Core",
    tags: ["ENTERPRISE SYSTEM CONSULTING", "ERP", "ENTERPRISE CLOUD", "CRM", "BI"],
  },
  {
    title: "Intelligent Technology",
    tags: ["AX", "MACHINE LEARNING", "COMPUTER VISION"],
  },
  {
    title: "Digital Transformation",
    tags: ["VRIX", "XI-SEARCH", "XI-CHAT"],
  },
];

function WhiteTag({ label }: { label: string }) {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.5)] border-solid flex items-center justify-center relative rounded-[5px] shrink-0
      px-[8px] py-[5px] md:px-[12px] md:py-[6px]">
      <div className={`${styles.tagLabel} flex flex-col justify-center relative shrink-0 text-white uppercase whitespace-nowrap text-[12px] md:text-[16px]`}>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="bg-black flex flex-col items-center relative w-full overflow-hidden py-[40px] md:py-[64px] xl:py-[88px]"
      style={{ paddingLeft: "var(--section-padding)", paddingRight: "var(--section-padding)" }}
    >
      {/* Background video — absolute centered, overflows section (clipped by overflow-hidden) */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none
        w-[1267px] h-[712px] md:w-[1845px] md:h-[1038px]">
        {/* Uncomment after placing video at /public/videos/tech-bg.mp4:
        <video src="/videos/tech-bg.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" /> */}
      </div>

      {/* Header */}
      <div className="flex items-center relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-center relative shrink-0">
          <div className={`${styles.heading} flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[28px] xl:text-[48px] 2xl:text-[64px] text-white whitespace-nowrap`}>
            <p style={{ lineHeight: "normal" }}>Technologies</p>
          </div>
        </div>
      </div>

      {/* Category rows
          Mobile: auto height, row-internal gap 12px
          Tablet+: h-570 fixed, row-internal gap 32px */}
      <div className="flex flex-col gap-[50px] items-start justify-end relative shrink-0 w-full py-[64px] md:h-[570px]">
        {techCategories.map((cat) => (
          <div
            key={cat.title}
            className="flex flex-col items-start relative shrink-0 w-full gap-[12px] md:gap-[32px]"
          >
            <div className="flex flex-col items-start relative shrink-0">
              <div className={`${styles.categoryTitle} flex flex-col justify-center leading-[0] relative shrink-0 text-[20px] md:text-[32px] text-white whitespace-nowrap`}>
                <p style={{ lineHeight: "normal" }}>{cat.title}</p>
              </div>
            </div>
            <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-full">
              {cat.tags.map((tag) => (
                <WhiteTag key={tag} label={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer tagline
          Mobile: py-10, deco w-16 | Tablet: py-16, deco w-22 | xl+: deco w-32 */}
      <div className="flex gap-[10px] items-center relative shrink-0 w-full py-[10px] md:py-[16px]">
        <div className={`${styles.footerTagline} flex flex-col justify-center leading-[0] relative shrink-0 text-[20px] text-white uppercase`}>
          <p style={{ lineHeight: "normal", marginBottom: 0 }}>{"Empowering Intelligent Enterprises "}</p>
          <p style={{ lineHeight: "normal" }}>with AI-driven Innovation and Unified Digital Transformation.</p>
        </div>
        <div className="absolute border-b border-white border-solid border-t bottom-0 left-0 top-0 w-[16px] md:w-[22px] xl:w-[32px]" />
      </div>
    </section>
  );
}

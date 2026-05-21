import styles from "../../styles/sections/ProductsSection.module.css";

const logoKoriAnswers = "/logos/customers/products/kori-answers.png";
const logoKoriCode = "/logos/customers/products/kori-code.png";
const logoKoriCli = "/logos/customers/products/kori-cli.png";
const logoKoriBlueprint = "/logos/customers/products/kori-blueprint.png";
const logoKoriCrmUnion = "/logos/customers/products/kori-crm-union.png";
const logoVrix = "/logos/customers/products/vrix.png";

const products = [
  {
    name: "KORI ANSWERS",
    description:
      "The Sovereign Intelligence Engine. KORI Answers dismantles information silos by fusing your secure on-premise data—from ERPs to internal wikis—with real-time external insights. It is not just a search tool; it is a decision advantage engine that synthesizes fragmented institutional knowledge into absolute clarity, all within your secure perimeter.",
    logo: logoKoriAnswers,
    logoClass:
      "w-[32.091px] h-[32px] md:w-[64.182px] md:h-[64px] xl:w-[70.199px] xl:h-[70px]",
  },
  {
    name: "KORI CODE",
    description:
      "The Context-Aware Development Foundry. KORI Code empowers your engineering teams to translate intent into infrastructure with unprecedented velocity. Built for the secure enterprise, it deeply understands your proprietary codebase and architecture to generate high-fidelity code. It transforms every developer into a master architect, accelerating software deployment while maintaining absolute code sovereignty.",
    logo: logoKoriCode,
    logoClass:
      "w-[45.253px] h-[32px] md:w-[90.507px] md:h-[64px] xl:w-[98.992px] xl:h-[70px]",
  },
  {
    name: "KORI CLI",
    description:
      "THE AUTONOMOUS EXECUTION AGENT. KORI CLI TRANSFORMS THE COMMAND LINE INTO A PROGRAMMABLE, AGENTIC INTERFACE FOR YOUR ENTIRE ENGINEERING STACK. IT IS NOT A COMMAND PROMPT; IT IS AN AUTONOMOUS OPERATOR THAT INTERPRETS INTENT, EXECUTES MULTI-STEP WORKFLOWS, AND INTEGRATES DIRECTLY INTO DEVELOPMENT PIPELINES. IT ELEVATES EVERY ENGINEER INTO A COMMANDER OF AI, AUTOMATING COMPLEX WORK AT THE SPEED OF THOUGHT—ALL WITHIN YOUR SECURE PERIMETER.",
    logo: logoKoriCli,
    logoClass:
      "w-[37.619px] h-[32px] md:w-[75.239px] md:h-[64px] xl:w-[82.292px] xl:h-[70px]",
  },
  {
    name: "KORI BLUEPRINT",
    description:
      "THE LEGACY INTELLIGENCE ENGINE. KORI BLUEPRINT INGESTS YOUR ENTIRE EXISTING CODEBASE AND RECONSTRUCTS THE HIDDEN ARCHITECTURE WITHIN—MAPPING DEPENDENCIES, SURFACING BUSINESS LOGIC, AND GENERATING THE DOCUMENTATION YOUR SYSTEM NEVER HAD. IT IS NOT A STATIC ANALYZER; IT IS A LIVING KNOWLEDGE LAYER THAT TURNS OPAQUE LEGACY SYSTEMS INTO FULLY QUERYABLE ARCHITECTURE, EMPOWERING TEAMS TO INHERIT, MODERNIZE, AND EXTEND DECADES OF CODE WITH ABSOLUTE CLARITY.",
    logo: logoKoriBlueprint,
    logoClass: "size-[32px] md:size-[64px] xl:size-[70px]",
  },
  {
    name: "KORI CRM",
    description:
      "The Operating System for Commercial Dominance. KORI CRM transforms the chaotic landscape of sales data into a structured operational asset. It provides total visibility across the entire customer lifecycle—from initial signal detection to closed opportunity. By anchoring every interaction to rigorous KPIs, it empowers your organization to forecast outcomes with precision and orchestrate revenue growth as a disciplined science, not a guessing game.",
    logoCustom: "crm" as const,
  },
  {
    name: "TACHYON",
    description:
      "Tachyon Grid is a high-performance JavaScript data grid that supports large data rendering, flexible customization, and dynamic UI with custom renderers and editing features.",
    logoCustom: "tachyon" as const,
  },
  {
    name: "VRIX",
    description:
      "vrix.js is a flexible and scalable JavaScript-based UI component library that supports virtual scrolling, large data handling, and customizable options to simplify complex UI development.",
    logo: logoVrix,
    logoClass:
      "w-[41px] h-[32px] md:w-[82px] md:h-[64px] xl:w-[82px] xl:h-[64px]",
  },
];

// 3 items repeated ×2 for horizontal scroll (matches Figma 6-item list)
const features = [
  {
    title: "INTELLIGENT CHAT",
    description:
      "On-Premise team communication with multi-domain and document integration. Seamlessly works across mobile, web, and desktop.",
  },
  {
    title: "ONTOLOGY SEARCH",
    description:
      "Semantic, context-aware discovery by modeling real-world objects and relationships across enterprise data",
  },
  {
    title: "DOCUMENT CONVERTER",
    description:
      "Seamlessly converts offline documents for web viewing, with broad support for Text, Excel, PPT, Word, and more.",
  },
  {
    title: "INTELLIGENT CHAT",
    description:
      "On-Premise team communication with multi-domain and document integration. Seamlessly works across mobile, web, and desktop.",
  },
  {
    title: "ONTOLOGY SEARCH",
    description:
      "Semantic, context-aware discovery by modeling real-world objects and relationships across enterprise data",
  },
  {
    title: "DOCUMENT CONVERTER",
    description:
      "Seamlessly converts offline documents for web viewing, with broad support for Text, Excel, PPT, Word, and more.",
  },
];

function TachyonIcon() {
  return (
    <div className="relative shrink-0 w-[41px] h-[32px] md:w-[82px] md:h-[64px] xl:w-[90px] xl:h-[70px]">
      <div
        className="absolute bg-white"
        style={{ inset: "0 73.33% 72.86% 24.44%" }}
      />
      <div
        className="absolute bg-white"
        style={{ inset: "0 24.44% 72.86% 73.33%" }}
      />
      <div
        className="absolute flex items-center justify-center"
        style={{ inset: "30% 30% 64.29% 30%", containerType: "size" }}
      >
        <div
          className="flex-none rotate-90"
          style={{ width: "100cqh", height: "100cqw" }}
        >
          <div className="bg-[#22ffbd] relative size-full" />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center"
        style={{ inset: "31.43% 78.89% 65.71% 0", containerType: "size" }}
      >
        <div
          className="flex-none -rotate-90"
          style={{ width: "100cqh", height: "100cqw" }}
        >
          <div className="bg-white relative size-full" />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center"
        style={{ inset: "31.43% 0 65.71% 78.89%", containerType: "size" }}
      >
        <div
          className="flex-none -rotate-90"
          style={{ width: "100cqh", height: "100cqw" }}
        >
          <div className="bg-white relative size-full" />
        </div>
      </div>
      <div
        className="absolute bg-[#22ffbd]"
        style={{ inset: "38.57% 72.22% 38.57% 23.33%" }}
      />
      <div
        className="absolute bg-[#22ffbd]"
        style={{ inset: "38.57% 23.33% 38.57% 72.22%" }}
      />
      <div
        className="absolute flex items-center justify-center"
        style={{ inset: "64.29% 30% 30% 30%", containerType: "size" }}
      >
        <div
          className="flex-none rotate-90"
          style={{ width: "100cqh", height: "100cqw" }}
        >
          <div className="bg-[#22ffbd] relative size-full" />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center"
        style={{ inset: "65.71% 78.89% 31.43% 0", containerType: "size" }}
      >
        <div
          className="flex-none -rotate-90"
          style={{ width: "100cqh", height: "100cqw" }}
        >
          <div className="bg-white relative size-full" />
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center"
        style={{ inset: "65.71% 0 31.43% 78.89%", containerType: "size" }}
      >
        <div
          className="flex-none -rotate-90"
          style={{ width: "100cqh", height: "100cqw" }}
        >
          <div className="bg-white relative size-full" />
        </div>
      </div>
      <div
        className="absolute bg-white"
        style={{ inset: "72.86% 73.33% 0 24.44%" }}
      />
      <div
        className="absolute bg-white"
        style={{ inset: "72.86% 24.44% 0 73.33%" }}
      />
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="bg-black backdrop-blur-[20px] flex flex-col gap-[16px] items-start overflow-clip pb-[40px] pt-[24px] relative rounded-[24px] shrink-0 w-full px-[32px] md:px-[40px]">
      <div
        className={`${styles.cardName} flex flex-col justify-center leading-[0] relative shrink-0 text-[20px] md:text-[32px] text-white whitespace-nowrap`}
      >
        <p style={{ lineHeight: "normal" }}>{product.name}</p>
      </div>
      <div className="flex flex-col gap-[24px] items-start pr-[8px] relative rounded-[16px] shrink-0 w-full">
        {/* Description: 14px mobile → 16px tablet → 20px laptop */}
        <div
          className={`${styles.cardDescription} flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[14px] md:text-[16px] xl:text-[20px] text-white uppercase w-[min-content]`}
        >
          <p style={{ lineHeight: "normal" }}>{product.description}</p>
        </div>

        {"logoCustom" in product && product.logoCustom === "tachyon" ? (
          <TachyonIcon />
        ) : "logoCustom" in product && product.logoCustom === "crm" ? (
          <div className="relative shrink-0 w-[57.83px] h-[32px] md:w-[115.67px] md:h-[64px] xl:w-[126.51px] xl:h-[70px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoKoriCrmUnion}
              alt="KORI CRM"
              className="absolute block inset-0 max-w-none size-full object-contain"
            />
          </div>
        ) : "logo" in product && product.logo ? (
          <div className={`relative shrink-0 ${product.logoClass}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.logo}
              alt={product.name}
              className="absolute block inset-0 max-w-none size-full"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  return (
    <div
      className="shrink-0 snap-start flex flex-col justify-between rounded-[24px] border border-[#d2d2d2]
      w-[300px] h-[180px] px-[24px] py-[24px]
      md:w-[450px] md:h-[290px] md:px-[40px] md:py-[40px]
      2xl:w-[500px]"
    >
      <div
        className={`${styles.featureTitle} text-black text-[16px] md:text-[26px] font-medium leading-none`}
      >
        {feature.title}
      </div>
      <div
        className={`${styles.featureDescription} text-black text-[14px] 2xl:text-[18px] font-normal leading-normal`}
      >
        {feature.description}
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="bg-white flex flex-col items-center relative w-full py-[40px] md:py-[64px] xl:py-[88px]"
    >
      {/* max-w-[1312px] 영역: 마지막 가로 리스트 제외 */}
      <div className="flex flex-col w-full max-w-[1312px]">
        {/* Header */}
        <div className="flex items-center relative shrink-0 w-full px-[32px] xl:px-[80px] 2xl:px-0">
          <div
            className={`${styles.heading} flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[28px] xl:text-[48px] 2xl:text-[64px] text-black whitespace-nowrap`}
          >
            <p style={{ lineHeight: "normal" }}>Products</p>
          </div>
        </div>

        {/* Sub Header
            mobile: py-[40px] / md+: pt-[80px] pb-[40px]
            "Work faster.": 18→28→32→40px / "Kori AI": 14→18→22px */}
        <div className="flex items-center relative shrink-0 w-full py-[40px] md:pt-[80px] md:pb-[40px] px-[32px] xl:px-[80px] 2xl:px-0">
          <div className="flex gap-[16px] items-center relative shrink-0 py-[10px] md:py-[12px] xl:py-[16px]">
            <div
              className={`${styles.subHeading} flex flex-col justify-center leading-[0] relative shrink-0 text-[18px] md:text-[28px] xl:text-[32px] 2xl:text-[40px] text-black uppercase whitespace-nowrap`}
            >
              <p style={{ lineHeight: "normal" }}>{"Work faster. "}</p>
            </div>
            <div
              className="bg-white border-black border-solid flex items-center justify-center relative shrink-0
                border-[1.5px] rounded-[6px] px-[8px] py-[3px]
                md:border-2 md:rounded-[8px] md:px-[10px] md:py-[4px]
                xl:border-[3px] xl:rounded-[10px] xl:px-[14px] xl:py-[6px]
                2xl:rounded-[16px] 2xl:px-[20px] 2xl:py-[10px]"
            >
              <div
                className={`${styles.subHeading} flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] md:text-[18px] xl:text-[22px] text-black uppercase whitespace-nowrap`}
              >
                <p style={{ lineHeight: "normal" }}>Kori AI</p>
              </div>
            </div>
            <div className="absolute border-b border-black border-solid border-t bottom-0 left-0 top-0 w-[18px] md:w-[28px] xl:w-[38px]" />
          </div>
        </div>

        {/* Video: h-242 mobile / h-466 tablet / h-646 laptop */}
        <div className="flex flex-col items-start relative shrink-0 w-full px-[32px] xl:px-[80px] 2xl:px-0">
          <div className="overflow-clip relative rounded-[22px] shrink-0 w-full h-[242px] md:h-[466px] xl:h-[646px] bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/kori-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Description
            mobile:  flex-col pt-[24px] gap-[40px]
            tablet:  flex-col pt-[60px] gap-[40px]
            xl+:     flex-row pt-[60px] */}
        <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-0 relative shrink-0 w-full pt-[24px] md:pt-[60px] px-[32px] xl:px-[80px] 2xl:px-0">
          {/* Left: "Try Kori AI" — mobile/tablet only */}

          {/* Right: tagline */}
          <div
            className={`${styles.descriptionTagline} flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] md:text-[16px] xl:text-[20px] text-black uppercase`}
          >
            <p style={{ lineHeight: "normal" }}>
              No cloud. No compromise.
              <br />
              Completely self-hosted in your private network.
            </p>
          </div>
        </div>

        {/* Vertical product list
            gap: 24px mobile / 40px md+
            pt:  40px mobile / 80px md+ */}
        <div className="flex flex-col items-start relative shrink-0 w-full gap-[24px] pt-[40px] md:gap-[40px] md:pt-[80px] px-[32px] xl:px-[80px] 2xl:px-0">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>

      {/* Horizontal feature list
          px-16 / pt-40 mobile, pt-80 md+ / gap-32 / overflow-x-scroll snap */}
      <div
        className="w-full overflow-x-scroll scroll-smooth snap-x snap-mandatory
        pt-[40px] md:pt-[80px]"
      >
        <div className="flex gap-[32px] px-[16px]">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

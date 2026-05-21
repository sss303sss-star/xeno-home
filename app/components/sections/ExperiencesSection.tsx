import styles from "../../styles/sections/ExperiencesSection.module.css";
import ExperiencesAwardsSection from "./ExperiencesAwardsSection";
import ExperiencesYearSection from "./ExperiencesYearSection";

const featuredProjects = [
  { shortName: "MARU", description: "Samsung Electronics Memory Strategy Marketing Unified Intelligence Platform", tags: ["ai", "CRM", "Sales", "2017-now"], image: "maru.jpg" },
  { shortName: "RMS", description: "Hyundai Mobis Purchase AI-powered Commodity Prediction System", tags: ["ai", "Purchase", "Prediction", "2024"], image: "rms.jpg" },
  { shortName: "ISCS", description: "Incheon International Airport 2nd Phase Security and Surveillance System", tags: ["Security", "Surveillance", "2006"], image: "iscs.jpg" },
  { shortName: "JFOS-K", description: "Republic of Korea Joint Chiefs of Staff JFOS-K (Joint Fire Operation System)", tags: ["Operation", "C2 System", "2011"], image: "jfos-k.jpg" },
  { shortName: "ABR", description: "Agency for Defense Development Ballistic Measurement System", tags: ["Ballistic", "Measurement", "2014"], image: "abr.jpg" },
  { shortName: "WAR ROOM", description: "Samsung Electronics SEA New Jersey Management War Room", tags: ["War Room", "2010"], image: "war-room.jpg" },
  { shortName: "DS BI", description: "Samsung Electronics Device Solution Business Intelligence for Branches", tags: ["Business", "Intelligence", "2012"], image: "ds-bi.jpg" },
  { shortName: "DP/PA", description: "Samsung Electronics Memory Demand Planning and Pre-allocation System", tags: ["Demand", "Planning", "2008"], image: "dp-pa.jpg" },
];

function TagLg({ label }: { label: string }) {
  return (
    <span className={`${styles.tag} backdrop-blur-[10px] bg-white/80 border border-solid border-[#d5d5d5] rounded-[5px] px-[8px] py-[5px] text-[12px] 2xl:px-[12px] 2xl:py-[6px] 2xl:text-[16px] 2xl:group-hover:px-[8px] 2xl:group-hover:py-[5px] 2xl:group-hover:text-[12px] text-[#5f5f5f] uppercase whitespace-nowrap transition-all duration-300 ease-out`}>
      {label}
    </span>
  );
}

function TagSm({ label }: { label: string }) {
  return (
    <span className={`${styles.tag} backdrop-blur-[10px] bg-white/80 border border-solid border-[#d5d5d5] rounded-[5px] px-[8px] py-[5px] text-[#5f5f5f] text-[12px] uppercase whitespace-nowrap`}>
      {label}
    </span>
  );
}

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="w-full bg-[#fafafa] flex flex-col items-center pt-[40px] md:pt-[64px] xl:pt-[88px] pb-[40px] md:pb-[80px] xl:pb-[128px]">
      <div className="max-w-[1312px] w-full flex flex-col">
        {/* Header */}
        <div className="flex items-center w-full px-[32px] xl:px-[80px] 2xl:px-0">
          <h2 className={`${styles.tomorrow} text-[28px] xl:text-[48px] 2xl:text-[64px] leading-none text-black`}>
            Experiences
          </h2>
        </div>

        {/* Featured projects — Mobile (<700px): shortName + description stacked, no tags */}
        <div className="flex flex-col w-full px-[32px] pt-[40px] md:hidden">
          {featuredProjects.map((project) => (
            <div key={project.shortName} className="flex gap-[12px] h-[126px] items-center border-b border-solid border-[#e0e0e0]">
              <div className="flex flex-1 flex-col gap-[21px] items-start min-w-0">
                <span className={`${styles.projectShortName} text-[24px] text-black`}>{project.shortName}</span>
                <p className={`${styles.projectDescription} text-[12px] text-black leading-normal`}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured projects — Tablet (700–1312px): description | shortName + tags wrapping */}
        <div className="hidden md:flex xl:hidden flex-col w-full px-[32px]">
          {featuredProjects.map((project) => (
            <div key={project.shortName} className="group relative flex gap-[32px] py-[8px] items-center border-b border-solid border-[#e0e0e0] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/projects/${project.image}`}
                alt=""
                aria-hidden="true"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[197px] h-[106px] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none z-10"
              />
              <div className="flex gap-[56px] group-hover:gap-[70px] h-[128px] items-center pr-[24px] shrink-0 transition-[gap] duration-300 ease-out">
                <p className={`${styles.projectDescription} text-[12px] text-black group-hover:text-[#757575] w-[200px] leading-normal transition-colors duration-300 ease-out`}>{project.description}</p>
                <span className={`${styles.projectShortName} text-[40px] text-black group-hover:text-[#757575] transition-colors duration-300 ease-out`}>{project.shortName}</span>
              </div>
              <div className="flex-1 flex flex-wrap gap-[10px] items-center justify-end">
                {project.tags.map((tag) => (
                  <TagSm key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured projects — Desktop/Laptop (1312px+): description | shortName + tags in a row */}
        <div className="hidden xl:flex flex-col w-full px-[80px] 2xl:px-0">
          {featuredProjects.map((project) => (
            <div key={project.shortName} className="group relative flex items-center justify-between py-[24px] border-b border-solid border-[#e0e0e0] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/projects/${project.image}`}
                alt=""
                aria-hidden="true"
                className="absolute top-0 h-full w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none z-10"
                style={{ left: "56.93%" }}
              />
              <div className="flex gap-[122px] group-hover:gap-[80px] h-[168px] items-center shrink-0 transition-[gap] duration-300 ease-out">
                <p className={`${styles.projectDescription} text-[16px] text-black group-hover:text-[#757575] w-[300px] leading-normal transition-colors duration-300 ease-out`}>{project.description}</p>
                <span className={`${styles.projectShortName} text-[64px] text-black group-hover:text-[#757575] transition-colors duration-300 ease-out`}>{project.shortName}</span>
              </div>
              <div className="flex gap-[10px] items-center">
                {project.tags.map((tag) => (
                  <TagLg key={tag} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      <ExperiencesAwardsSection />
      <ExperiencesYearSection />
    </section>
  );
}

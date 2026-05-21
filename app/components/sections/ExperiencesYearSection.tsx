"use client";

import { useState } from "react";
import styles from "../../styles/sections/ExperiencesSection.module.css";

const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009"];

type ExperienceItem = { title: string; description: string; tags: string[] };

const experienceData: Record<string, ExperienceItem[]> = {
  "2025": [
    { title: "HS AGENT", description: "Hyundai Mobis Customs HS-Code Recommendation Agentic AI Service", tags: ["AI", "Customs", "RAG"] },
    { title: "AMOS ANALYSIS DOCUMENT GENERATION", description: "Hyundai Mobis AMOS System Improvement for Next-Generation Transition of Overseas Corporate Systems", tags: ["AI", "Code Assistant", "RAG"] },
    { title: "ASBESTOS DETECTION", description: "NIA AI Hub - Classification of Asbestos in Building Materials Based on Hyperspectral Imaging", tags: ["AI", "Image Processing"] },
    { title: "DOCZIP ESTATE PLATFORM RENEWAL", description: "", tags: ["REal-estate", "Image Processing", "AI"] },
  ],
  "2024": [
    { title: "Hyundai Mobis RMS 2.0", description: "", tags: ["AI", "purchase", "prediction"] },
    { title: "Hyundai WIA India Procurement System", description: "", tags: ["Procurement", "System"] },
  ],
  "2023": [
    { title: "KT AI Robot Mobile Control Platform", description: "", tags: ["Mobile", "Robot", "analytics"] },
    { title: "KT AI Robot Analytics System Upgrade", description: "", tags: ["Robot", "analytics"] },
    { title: "KT AI Robot Testing Platform", description: "", tags: ["Robot", "Testing", "3D"] },
    { title: "AI PERSONNEL ROTATION", description: "Industrial Bank of Korea - Reinforcement Learning Based Company-wide Personnel Rotation Automation", tags: ["AI", "HR"] },
    { title: "smile BoomBoom smartphone app", description: "", tags: ["Mobile", "Testing", "3D"] },
    { title: "Handong Global University CAREER MATCHING PLATFORM", description: "", tags: ["AI", "matching", "3D"] },
  ],
  "2022": [
    { title: "KT AI Robot Control Platform", description: "", tags: ["Robot", "analytics"] },
    { title: "Hyundai Mobis GPOMS Enhancement", description: "", tags: ["Processing", "Management"] },
    { title: "PARKING MANAGEMENT", description: "Seoul Metropolitan City - AI Based Shared Parking Management System", tags: ["AI", "Image Processing", "Object Recognition"] },
  ],
  "2021": [
    { title: "IBK AI-based Personnel Placement", description: "", tags: ["AI", "Personnel", "Placement"] },
    { title: "DS Today", description: "", tags: ["GROUPWARE", "Personnel", "Placement"] },
    { title: "Venture Investment System", description: "", tags: ["INVESTMENT", "Personnel", "Placement"] },
  ],
  "2020": [
    { title: "SAMSUNG SEC MARU PHASE 4", description: "", tags: ["Sales", "MARKETING", "analytics"] },
    { title: "Hyundai Mobis GPOMS", description: "", tags: ["Processing", "Management"] },
    { title: "SAMSUNG SEC MARU PHASE 3", description: "", tags: ["Sales", "MARKETING", "analytics"] },
    { title: "Company Information Integration System", description: "", tags: ["GROUPWARE", "MARKETING", "analytics"] },
  ],
  "2019": [
    { title: "DINNING MANAGER APP v2", description: "", tags: ["Mobile", "MARKETING", "analytics"] },
    { title: "CPMS Architecture & UT Specification", description: "", tags: ["CONSTRUCTION", "Management", "analytics"] },
    { title: "CJ E&M VIDEO TAG SOLUTION", description: "", tags: ["video", "tagging", "analytics"] },
    { title: "Certificate INNOBIZ", description: "", tags: ["CERTIFICATION", "MARKETING", "analytics"] },
    { title: "nfc based table ordering system", description: "", tags: ["NFC", "MARKETING", "analytics"] },
    { title: "Quality Management Systems (ISO9001)", description: "", tags: ["iso9001", "MARKETING", "analytics"] },
    { title: "AI-based big data tech for measuring outdoor ad efficiency", description: "", tags: ["AI", "big data", "analytics"] },
    { title: "AI speaker and action method based on non-verbal cues", description: "", tags: ["AI", "MARKETING", "analytics"] },
    { title: "Research Institute (ministry of science and ict)", description: "", tags: ["Research", "Institute", "analytics"] },
  ],
  "2018": [
    { title: "SAMSUNG SEC MARU PHASE 2", description: "", tags: ["Sales", "MARKETING", "analytics"] },
    { title: "ECTEC SMART GRADER WEB MONITORING", description: "", tags: ["dashboard"] },
    { title: "DININGMANAGER OFFICIAL WEBSITE", description: "", tags: ["web"] },
    { title: "INCHON AIRPORT VMCS-GMMS", description: "", tags: ["dashboard"] },
    { title: "DINING MANAGER SMARTPHONE APP", description: "", tags: ["Mobile", "reservation"] },
  ],
  "2017": [
    { title: "SAMSUNG MARU PHASE 1", description: "", tags: ["Sales", "MARKETING", "analytics"] },
    { title: "SAMSUNG PORTABLE SSD FIRMWARE", description: "", tags: ["Firmware"] },
    { title: "DOOSAN H/W MONITORING", description: "", tags: ["dashboard"] },
    { title: "NAVER VR WEBTOON", description: "", tags: ["VR"] },
    { title: "AMORE PACIFIC COLOR TAILORS", description: "", tags: [] },
  ],
  "2016": [
    { title: "SAMSUNG UNPACK SOLUTION", description: "", tags: [] },
    { title: "SAMSUNG UNPACK NFC/NETWORK", description: "", tags: ["NFC"] },
    { title: "SAMSUNG MWC GEAR VR SOLUTION", description: "", tags: ["VR"] },
    { title: "SAMSUNG SSD MAGICIAN FIRMWARE UPDATE", description: "", tags: ["Firmware", "Management"] },
    { title: "HYUNDAI MOBIS EPMS IN-DEPTH DEVELOPMENT", description: "", tags: [] },
    { title: "HYUNDAI TRANSYS PURCHASE EIS", description: "", tags: [] },
    { title: "SAMSUNG SCM (KPI)", description: "", tags: ["SupplyChain", "Management"] },
    { title: "SAMSUNG PKG PRODUCTION PLANNING", description: "", tags: [] },
  ],
  "2015": [
    { title: "SECUI MF2 SOLUTION", description: "", tags: ["Network", "Security"] },
    { title: "SAMSUNG SSI (SHAREPOINT)", description: "", tags: [] },
    { title: "HYUNDAI MOBIS GPOMS IN-DEPTH DEVELOPMENT", description: "", tags: ["Processing", "Management"] },
    { title: "SAMSUNG CORNING SYSTEM", description: "", tags: [] },
    { title: "HOTEL SHILLA MDM", description: "", tags: [] },
    { title: "SAMSUNG MEDIA MATRIX SYSTEM", description: "", tags: ["Media", "Platform"] },
    { title: "SAMSUNG ANDROID SCREEN SAVER", description: "", tags: ["Mobile"] },
    { title: "SAMSUNG IOT PROTOTYPING", description: "", tags: ["IOT"] },
    { title: "SDI INTEGRATION SYSTEM", description: "", tags: ["Integration", "System"] },
    { title: "LG GPS 3.0", description: "", tags: ["GPS"] },
    { title: "SAMSUNG BRAND VOC ADMIN UPGRADE", description: "", tags: ["VOC", "Administrator"] },
  ],
  "2014": [
    { title: "HYUNDAI MOBIS EMPS SYSTEM", description: "", tags: [] },
    { title: "HYUNDAI GPOMS SYSTEM", description: "", tags: ["Processing", "Management"] },
    { title: "SAMSUNG ITCO 2ND", description: "", tags: [] },
    { title: "SAMSUNG CQTS 2ND", description: "", tags: [] },
    { title: "SAMSUNG DS CONSTRUCTION WORK EPMS 2ND", description: "", tags: [] },
    { title: "AGENCY FOR DEFENSE DEVELOPMENT ABR S/W", description: "", tags: [] },
    { title: "KRISS RENEW", description: "", tags: [] },
    { title: "INCROSS WAR-VALLEY", description: "", tags: [] },
    { title: "CISCO HOMENET HTML5", description: "", tags: ["web"] },
  ],
  "2013": [
    { title: "SAMSUNG LSI SALES PLAN", description: "", tags: [] },
    { title: "SAMSUNG PLM DASHBOARD PHASE 2", description: "", tags: [] },
    { title: "SAMSUNG CPMS", description: "", tags: [] },
    { title: "SAMSUNG SALES PART BI CHINA", description: "", tags: [] },
    { title: "KUMHO TIRE DS&OP", description: "", tags: [] },
    { title: "SAMSUNG CERTIFICATION SYSTEM", description: "", tags: ["CERTIFICATION", "System"] },
    { title: "SAMSUNG COMPLIENCE SYSTEM", description: "", tags: ["COMPLIENCE", "Administrator"] },
    { title: "SAMSUNG LSI CASS", description: "", tags: [] },
    { title: "SAMSUNG CPFR", description: "", tags: [] },
    { title: "SAMSUNG PLM DASHBOARD PHASE 1", description: "", tags: [] },
    { title: "SAMSUNG ECOBENCH", description: "", tags: ["Mobile", "Benchmarking"] },
  ],
  "2012": [
    { title: "SAMSUNG SMC", description: "", tags: [] },
    { title: "COEX CYBER COEX OFFICIAL WEBSITE", description: "", tags: ["web"] },
    { title: "SAMSUNG SEMICON ITCO", description: "", tags: [] },
    { title: "SAMSUNG MEMORY PT BANK PHASE 2", description: "", tags: ["presentation", "Library"] },
    { title: "SAMSUNG SEMICON BUSINESS MANAGEMENT DASHBOARD", description: "", tags: ["dashboard"] },
    { title: "SAMSUNG SEMICON SALES PART BI (ERP+SCM)", description: "", tags: [] },
    { title: "LG SKETCHBOOK APP", description: "", tags: ["Mobile"] },
    { title: "C-ON DREAM FORTUNE CAFE 2013 APP", description: "", tags: ["Mobile"] },
  ],
  "2011": [
    { title: "Samsung Semicon BQIS/DQIS", description: "", tags: [] },
    { title: "Chungdam Learning E-Learning Topic & Chunks Practice", description: "", tags: [] },
    { title: "Samsung Memory PT Bank", description: "", tags: ["presentation", "Library"] },
    { title: "Samsung Memory SCM Visibility", description: "", tags: [] },
    { title: "Dapa JFOS-K System", description: "", tags: ["Operation", "c2 System", "System"] },
    { title: "Samsung CS", description: "", tags: [] },
    { title: "Samsung Semicon EAM Project", description: "", tags: [] },
    { title: "SK Group Smart-City Solution", description: "", tags: ["Monitoring", "dashboard"] },
    { title: "SK C&C Management Dashboard", description: "", tags: ["dashboard"] },
    { title: "MOIS New-Address Business", description: "", tags: [] },
    { title: "LG U+ Ubox", description: "", tags: [] },
    { title: "LG U+ Air Cloud", description: "", tags: [] },
    { title: "Samsung Semicon EAM", description: "", tags: [] },
    { title: "REAL ESTATE 114 SMARTPHONE APP", description: "", tags: ["Mobile", "REal-estate"] },
  ],
  "2010": [
    { title: "Samsung America See War-Room", description: "", tags: [] },
    { title: "Samsung Scenario Management System", description: "", tags: [] },
    { title: "IT Symphony ALT System", description: "", tags: [] },
    { title: "SK Energy China GSC Portal", description: "", tags: [] },
    { title: "SK C&C Integration IT System", description: "", tags: ["Integration", "System"] },
    { title: "KT Sem War-Room - Phase 2", description: "", tags: ["War-room"] },
    { title: "Samsung Memory BPR", description: "", tags: [] },
    { title: "KEPCO Cost A&S", description: "", tags: [] },
    { title: "GS Caltex GSC MIS", description: "", tags: [] },
  ],
  "2009": [
    { title: "Samsung Memory SIM/SOM", description: "", tags: [] },
    { title: "Lee Jae Won Financial Planning Solution", description: "", tags: [] },
    { title: "Korea Smart Card BI Module", description: "", tags: [] },
    { title: "LH NSDI Integration Information System", description: "", tags: [] },
    { title: "K-Weather Satellite Imagery Processing System", description: "", tags: [] },
    { title: "Chungdam Education Contents for 2009", description: "", tags: [] },
    { title: "Korea Smart Card Infra Business for New Zealand", description: "", tags: [] },
    { title: "Samsung Memory DP/PA", description: "", tags: [] },
    { title: "Volvo GEM BISS", description: "", tags: [] },
    { title: "Incheon Airport 2nd Construction Security System", description: "", tags: ["Security", "guard"] },
    { title: "Amore-Pacific EIS", description: "", tags: [] },
    { title: "Woong-Jin Call Center CTI", description: "", tags: [] },
    { title: "LS Cable & System EIS", description: "", tags: [] },
    { title: "IGC Japan Live Casino System", description: "", tags: ["Game"] },
    { title: "Korea Smart Card Integration Monitoring System", description: "", tags: ["Monitoring"] },
  ],
};

export default function ExperiencesYearSection() {
  const [activeYear, setActiveYear] = useState("2025");
  const currentExperiences = experienceData[activeYear] ?? [];

  return (
    <div className="flex flex-col gap-0 md:gap-[24px] xl:gap-[40px] xl:px-[80px] 2xl:px-0 w-full 2xl:max-w-[1352px]">
      {/* Year tabs */}
      <div className="relative flex items-center w-full">
        <div className="flex flex-1 min-w-0 items-center overflow-x-auto pb-[16px] pt-[40px] md:pb-[24px] md:pt-[80px] px-[32px]">
          <div className="flex items-center gap-[16px] md:gap-[32px] shrink-0 pr-[64px] md:pr-[128px]">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`${styles.yearBtn} ${
                  activeYear === year
                    ? 'text-[24px] md:text-[56px] text-black'
                    : 'text-[16px] md:text-[24px] text-[#757575]'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 top-0 w-[30px] pointer-events-none" style={{ background: "linear-gradient(to right, #fafafa 50%, transparent)" }} />
        <div className="absolute bottom-0 right-0 top-0 w-[30px] pointer-events-none" style={{ background: "linear-gradient(to left, #fafafa 50%, transparent)" }} />
      </div>

      {/* Experience list */}
      <div className="flex flex-col w-full px-[32px]">
        {currentExperiences.length === 0 ? (
          <p className={`${styles.monda} text-[#757575] text-[20px] py-[24px]`}>
            No data available for {activeYear}.
          </p>
        ) : (
          currentExperiences.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-[16px] md:py-[24px] border-b border-solid border-[#e0e0e0]">
              <div className="flex flex-col gap-[10px] flex-1 min-w-0 pr-[40px]">
                <p className={`${styles.experienceTitle} text-[12px] md:text-[16px] xl:text-[24px] text-black leading-normal`}>{item.title}</p>
                {item.description && (
                  <p className={`${styles.experienceTitle} text-[12px] md:text-[16px] xl:text-[24px] text-black leading-normal`}>{item.description}</p>
                )}
              </div>
              {item.tags.length > 0 && (
                <div className="hidden md:flex flex-wrap gap-[8px] items-center justify-end shrink-0">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`${styles.tag} border border-solid border-[#d5d5d5] rounded-[5px] px-[8px] py-[5px] text-[#5f5f5f] text-[12px] uppercase whitespace-nowrap`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

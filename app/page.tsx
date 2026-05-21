import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperiencesSection from "./components/sections/ExperiencesSection";
import TechnologiesSection from "./components/sections/TechnologiesSection";
import ProductsSection from "./components/sections/ProductsSection";
import CustomersSection from "./components/sections/CustomersSection";
import ContactsSection from "./components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />

        <ProductsSection />
        <CustomersSection />
        <ContactsSection />
      </main>
    </>
  );
}

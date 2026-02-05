import { Seo } from "@/seo/Seo";
import { seoConfig } from "@/seo/seoConfig";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PositionsSection } from "@/components/sections/PositionsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AspirationSection } from "@/components/sections/AspirationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <Layout>
      <Seo {...seoConfig.home} />
      <HeroSection />
      <AboutSection />
      <PositionsSection />
      <IndustriesSection />
      <ProcessSection />
      <AspirationSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;

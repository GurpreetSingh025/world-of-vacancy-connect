import { Seo } from "@/seo/Seo";
import { seoConfig } from "@/seo/seoConfig";
import { Layout } from "@/components/layout/Layout";
import { AboutSection } from "@/components/sections/AboutSection";
import { AspirationSection } from "@/components/sections/AspirationSection";
import { uniqueProposition } from "@/data/company";
import { Zap, Users, Route, BookOpen } from "lucide-react";

const iconMap = [Zap, Users, Route, BookOpen];

const About = () => {
  return (
    <Layout>
      <Seo {...seoConfig.about} />
      
      {/* Page Header */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            About <span className="text-teal">Us</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Learn about our journey, values, and commitment to excellence in recruitment.
          </p>
        </div>
      </section>

      <AboutSection />

      {/* Unique Value Proposition */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-teal font-medium text-sm uppercase tracking-wider">What Makes Us Different</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              Our Unique Value Proposition
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueProposition.map((item, index) => {
              const Icon = iconMap[index];
              return (
                <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-lg card-hover border border-border">
                  <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{item}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AspirationSection />
    </Layout>
  );
};

export default About;

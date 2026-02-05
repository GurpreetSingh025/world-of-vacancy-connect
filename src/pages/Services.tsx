import { Seo } from "@/seo/Seo";
import { seoConfig } from "@/seo/seoConfig";
import { Layout } from "@/components/layout/Layout";
import { PositionsSection } from "@/components/sections/PositionsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <Layout>
      <Seo {...seoConfig.services} />
      
      {/* Page Header */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="text-teal">Services</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive recruitment solutions across multiple positions and industries.
          </p>
        </div>
      </section>

      <PositionsSection />
      <IndustriesSection />
      <ProcessSection />

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Find Top Talent?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Let us help you build a winning team. Contact us today to discuss your recruitment needs.
            </p>
            <Button asChild size="lg" className="btn-accent group">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

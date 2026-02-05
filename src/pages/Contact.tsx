import { Seo } from "@/seo/Seo";
import { seoConfig } from "@/seo/seoConfig";
import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/sections/ContactSection";

const Contact = () => {
  return (
    <Layout>
      <Seo {...seoConfig.contact} />
      
      {/* Page Header */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Contact <span className="text-teal">Us</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help with your recruitment needs.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Map Section */}
      <section className="py-8 bg-background">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1234567890123!2d72.82!3d21.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzM2LjAiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="World Of Vacancy Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

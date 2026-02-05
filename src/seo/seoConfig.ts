export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: "World Of Vacancy - Best Recruitment Agency in Surat, Gujarat",
    description: "World Of Vacancy is Gujarat's leading recruitment agency. We specialize in connecting top talent with the right opportunities across multiple industries since 2014.",
    keywords: "recruitment agency, job placement, hiring, Surat, Gujarat, manpower, staffing",
  },
  about: {
    title: "About Us - World Of Vacancy | Our Vision & Mission",
    description: "Learn about World Of Vacancy's mission to become Gujarat's No.1 recruiter. Discover our values, pillars, and commitment to putting clients first.",
    keywords: "about us, recruitment firm, company values, Gujarat recruiter",
  },
  services: {
    title: "Our Services - World Of Vacancy | Recruitment Solutions",
    description: "Explore our comprehensive recruitment services across IT, Engineering, Sales, Marketing, HR, and more. We manage positions across 13+ industries.",
    keywords: "recruitment services, staffing solutions, job positions, industry hiring",
  },
  contact: {
    title: "Contact Us - World Of Vacancy | Get in Touch",
    description: "Contact World Of Vacancy for your recruitment needs. Located in Surat, Gujarat. Call us or email for immediate assistance.",
    keywords: "contact recruitment agency, Surat office, hiring help, job inquiries",
  },
};

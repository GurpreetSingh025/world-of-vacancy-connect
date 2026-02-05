import { Search, UserCheck, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understanding Your Needs",
    description: "We begin with briefing meetings to understand your business challenges, role expectations, and behavioral traits needed for success.",
  },
  {
    icon: UserCheck,
    title: "Talent Identification",
    description: "We specialize in identification, assessment, and recruitment of top talent that aligns with your organizational goals.",
  },
  {
    icon: Handshake,
    title: "Perfect Match",
    description: "Talent decisions are a key competitive advantage. We ensure the perfect match between candidates and opportunities.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal font-medium text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            How We Find Your Perfect Candidates
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach to ensure we find the right talent for your organization.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-teal to-transparent"></div>
                )}
                
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

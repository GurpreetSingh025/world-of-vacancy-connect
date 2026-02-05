import { industries } from "@/data/industries";

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal font-medium text-sm uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg">
            Our expertise spans across multiple sectors, providing specialized recruitment 
            solutions tailored to each industry's unique requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="bg-card rounded-xl p-6 text-center shadow-md card-hover border border-border group"
              >
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal transition-colors">
                  <Icon className="w-7 h-7 text-teal group-hover:text-white transition-colors" />
                </div>
                <span className="text-foreground font-medium text-sm">{industry.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

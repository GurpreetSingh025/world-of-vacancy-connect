import { positions } from "@/data/positions";
import { LucideIcon } from "lucide-react";

interface PositionCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const PositionCard = ({ title, description, Icon }: PositionCardProps) => (
  <div className="bg-card rounded-2xl p-6 shadow-lg card-hover border border-border group">
    <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal transition-colors">
      <Icon className="w-6 h-6 text-teal group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-lg font-display font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export const PositionsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal font-medium text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Positions Managed By Us
          </h2>
          <p className="text-muted-foreground text-lg">
            We specialize in recruiting top talent across a wide range of professional domains, 
            ensuring the perfect match between candidates and opportunities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position) => (
            <PositionCard
              key={position.id}
              title={position.title}
              description={position.description}
              Icon={position.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

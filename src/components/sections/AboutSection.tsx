import { Target, Compass, Heart, Shield, Users, Lightbulb } from "lucide-react";
import { vision, mission, values, pillars } from "@/data/company";

export const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal font-medium text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg">
            World Of Vacancy was founded with a distinctive vision: to place clients' interests 
            first and to lead the recruitment profession by creating value through assessment 
            & recruitment of management resources.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border">
            <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-teal" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              {vision.title}
            </h3>
            <p className="text-muted-foreground text-lg">{vision.content}</p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border">
            <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-teal" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              {mission.title}
            </h3>
            <p className="text-muted-foreground text-lg">{mission.content}</p>
          </div>
        </div>

        {/* Pillars & Values */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pillars */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">Our Pillars</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-4 flex items-center gap-3 transition-all hover:shadow-md"
                >
                  <div className="w-8 h-8 bg-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-teal font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-foreground font-medium text-sm">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">Our Values</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <span
                  key={index}
                  className="bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-teal hover:text-white"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-teal" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Client Orientation Philosophy
          </h3>
          <p className="text-3xl md:text-4xl font-display font-bold text-teal">
            "PUT THE CLIENT'S INTEREST FIRST"
          </p>
        </div>
      </div>
    </section>
  );
};

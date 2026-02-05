import { Link } from "react-router-dom";
import { ArrowRight, Users, Building2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-light rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-teal/20 text-teal px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Established Since 2014</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Welcome to{" "}
              <span className="text-teal">World Of Vacancy</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Your trusted recruitment partner. We connect exceptional talent with outstanding 
              opportunities, helping businesses build winning teams across Gujarat and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-accent group">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-teal mb-1">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold text-white">10+</span>
                </div>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-teal mb-1">
                  <Building2 className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold text-white">100+</span>
                </div>
                <p className="text-white/60 text-sm">Happy Clients</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-teal mb-1">
                  <Award className="w-5 h-5" />
                  <span className="text-2xl md:text-3xl font-bold text-white">13+</span>
                </div>
                <p className="text-white/60 text-sm">Industries Served</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-teal to-teal-light rounded-full opacity-20 absolute -top-10 -right-10 animate-float"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Best Way To Success</h3>
                    <p className="text-white/70">Pinpointing Your Needs</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {["Awesome Ideas", "Well Prepared", "Best Recruitment", "FOCUS"].map((item) => (
                      <div key={item} className="bg-white/10 rounded-lg p-3 text-center">
                        <span className="text-teal text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

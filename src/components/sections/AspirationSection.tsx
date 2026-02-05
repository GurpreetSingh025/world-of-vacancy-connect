import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aspirations, fiveYearGoals } from "@/data/company";

export const AspirationSection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-light rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Aspirations */}
          <div className="space-y-8">
            <div>
              <span className="text-teal font-medium text-sm uppercase tracking-wider">Our Goals</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-4">
                Our Aspiration
              </h2>
              <p className="text-white/80 text-lg">
                To be a distinctive manpower service provider delivering excellence across all dimensions.
              </p>
            </div>

            <ul className="space-y-4">
              {aspirations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5 Year Goals */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              5-Year Goals
            </h3>
            <div className="space-y-6">
              {fiveYearGoals.map((goal, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white/90 text-lg pt-1">{goal}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <Button asChild className="btn-accent w-full group">
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

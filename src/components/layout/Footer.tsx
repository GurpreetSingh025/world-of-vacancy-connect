import { Link } from "react-router-dom";
import { Briefcase, Phone, Mail, MapPin } from "lucide-react";
import { companyInfo } from "@/data/company";

export const Footer = () => {
  const { contact } = companyInfo;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-display font-bold">World Of</span>
                <span className="text-lg font-display font-bold text-teal ml-1">Vacancy</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Established: {companyInfo.established}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-teal transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {["IT & Software", "Manufacturing", "Telecom", "E-commerce", "Engineering"].map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  {contact.address.line1}, {contact.address.line2}, {contact.address.line3}, {contact.address.city} - {contact.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal flex-shrink-0" />
                <div className="text-sm">
                  {contact.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="text-primary-foreground/80 hover:text-teal transition-colors block"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal flex-shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-primary-foreground/80 hover:text-teal transition-colors text-sm"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} World Of Vacancy. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Contact: {contact.person}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

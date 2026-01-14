import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sage-light/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/luups-logo.png" alt="Luups" className="h-16 w-auto" />
              <div>
                <span className="font-display text-2xl font-semibold text-foreground block">
                  Luups
                </span>
                <span className="text-sm text-muted-foreground">
                  Danish Design
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Award-winning trays, dishes, plates and bowls. Designed in Denmark
              and shaped with function, flow and feeling in mind.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/luups.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Luups-Design-100071919291954/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Products", path: "/products" },
                { name: "About", path: "/about" },
                { name: "Retailers", path: "/retailers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mgt@luups.dk"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  mgt@luups.dk
                </a>
              </li>
              <li>
                <a
                  href="tel:+4527222010"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +45 2722 2010
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Luups. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

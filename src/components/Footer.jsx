import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons text-slate-900 text-base">
                  shield
                </span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                ZUPITER
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Premium herbal-medical hygiene solutions from the heart of Assam.
              Trusted by hospitals, distributors and institutions across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a
                href="tel:9435591874"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span className="material-icons text-sm">call</span>
                +91 94355 91874
              </a>

              <a
                href="mailto:thehealthzonemaligoan@rediffmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span className="material-icons text-sm">mail</span>
                thehealthzonemaligoan@rediffmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/products"
                  className="hover:text-primary transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Location
            </h4>

            <div className="flex gap-3 text-sm leading-relaxed">
              <span className="material-icons text-primary text-base">
                location_on
              </span>
              <p>
                Health Zone, Barabazar, Pandu <br />
                Guwahati, Assam - 781012
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Health+Zone+Barabazar+Pandu+Guwahati+Assam+781012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary text-sm font-semibold hover:underline"
            >
              View on Map →
            </a>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Business Inquiries
            </h4>

            <p className="text-sm mb-6">
              For bulk purchases and distributor partnerships, contact us directly.
            </p>

            <div className="space-y-4">
              <a
                href="tel:9435591874"
                className="block text-center bg-primary text-slate-900 font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Call Now
              </a>

              <a
                href="mailto:thehealthzonemaligoan@rediffmail.com"
                className="block text-center border border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-slate-900 transition-all"
              >
                Email Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">

          <p>
            © {new Date().getFullYear()} Zupiter Hygiene Solutions. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

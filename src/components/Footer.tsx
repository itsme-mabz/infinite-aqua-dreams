import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-secondary pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Pools <span className="text-seondary">Infinite</span>
            </h3>
            <p className="text-slate-700/80 mb-4">
              Houston's premier pool design and construction company. Bringing luxury outdoor living to life for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700/10 rounded-full flex items-center justify-center hover:bg-slate-700 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700/10 rounded-full flex items-center justify-center hover:bg-slate-700 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700/10 rounded-full flex items-center justify-center hover:bg-slate-700 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Pool Design & Construction
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Pool Remodeling
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Repairs & Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Outdoor Kitchens
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  Financing Options
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <a href="tel:7135551234" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  (713) 555-1234
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <a href="mailto:info@poolsinfinite.com" className="text-slate-700/80 hover:text-slate-600 transition-colors">
                  info@poolsinfinite.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="text-slate-700/80">
                  Serving Houston &<br />Surrounding Areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-700/60 text-sm">
              © 2025 Pools Infinite, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-700/60 hover:text-slate-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-700/60 hover:text-slate-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-700/60 hover:text-slate-600 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

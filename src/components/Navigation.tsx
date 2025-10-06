import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white backdrop-blur-sm shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
           <img src={logo} width={200} alt="" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <a 
              href="#home" 
              className="text-foreground/90  font-medium transition-all duration-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-foreground/90  font-medium transition-all duration-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
            >
              About
            </a>
            <div className="relative group">
              <button className="text-foreground/90  font-medium transition-all duration-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-secondary after:rounded-full after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:left-0 font-dmsans">
                Services
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 bg-white backdrop-blur-sm shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-foreground/20 overflow-hidden translate-y-2 group-hover:translate-y-0">
                <div className="p-1 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20"></div>
                <div className="py-2">
                  <a
                    href="#services"
                    className="block px-6 py-4 text-foreground hover:bg-gradient-to-r hover:from-secondary/10 hover:to-primary/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold group- transition-colors font-dmsans">Pool Design & Construction</span>
                      <svg className="w-4 h-4 ml-2 text-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/70 mt-1 font-dmsans">Create your dream pool with our expert design team</p>
                  </a>
                  <a
                    href="#services"
                    className="block px-6 py-4 text-foreground hover:bg-gradient-to-r hover:from-secondary/10 hover:to-primary/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold group- transition-colors font-dmsans">Pool Remodeling</span>
                      <svg className="w-4 h-4 ml-2 text-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/70 mt-1 font-dmsans">Transform your existing pool into something spectacular</p>
                  </a>
                  <a
                    href="#services"
                    className="block px-6 py-4 text-foreground hover:bg-gradient-to-r hover:from-secondary/10 hover:to-primary/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold group- transition-colors font-dmsans">Repairs & Maintenance</span>
                      <svg className="w-4 h-4 ml-2 text-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/70 mt-1 font-dmsans">Keep your pool in pristine condition year-round</p>
                  </a>
                  <a
                    href="#services"
                    className="block px-6 py-4 text-foreground hover:bg-gradient-to-r hover:from-secondary/10 hover:to-primary/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold group- transition-colors font-dmsans">Outdoor Kitchens</span>
                      <svg className="w-4 h-4 ml-2 text-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-foreground/70 mt-1 font-dmsans">Complete your outdoor entertainment space</p>
                  </a>
                </div>
              </div>
            </div>
            <a 
              href="#gallery" 
              className="text-foreground/90  font-medium transition-all duration-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="text-foreground/90  font-medium transition-all duration-300 relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
            >
              Contact
            </a>
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:7135551234"
              className="flex items-center space-x-2 text-foreground/90 hover:text-[#003989] transition-all duration-300 font-dmsans"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(713) 555-1234</span>
            </a>
            <Button className="bg-[#003989] text-white font-semibold px-6 py-2 h-0.50 rounded-md shadow-md transition-all duration-300 font-dmsans hover:bg-[#003989]/90">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground/90  font-dmsans"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white backdrop-blur-sm border-t border-foreground/10">
            <div className="py-4 space-y-1">
              <a
                href="#home"
                className="block px-4 py-3 text-foreground/90  font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-foreground/90  font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-4 py-3 text-foreground/90  font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="block px-4 py-3 text-foreground/90  font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-foreground/90  font-medium transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 font-dmsans"
              >
                Contact
              </a>
              <div className="px-4 pt-4 space-y-4 border-t border-foreground/10 mt-2">
                <a
                  href="tel:7135551234"
                  className="flex items-center space-x-2 text-foreground/90  font-dmsans"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">(713) 555-1234</span>
                </a>
                <Button className="w-full bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--primary))] text-white hover:opacity-90 font-medium py-2 rounded-md font-dmsans">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

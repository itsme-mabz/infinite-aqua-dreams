import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Pools <span className="text-secondary">Infinite</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-primary-foreground hover:text-secondary transition-colors">
              Home
            </a>
            <a href="#about" className="text-primary-foreground hover:text-secondary transition-colors">
              About
            </a>
            <div className="relative group">
              <button className="text-primary-foreground hover:text-secondary transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a
                  href="#services"
                  className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  Pool Design & Construction
                </a>
                <a
                  href="#services"
                  className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  Pool Remodeling
                </a>
                <a
                  href="#services"
                  className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  Repairs & Maintenance
                </a>
                <a
                  href="#services"
                  className="block px-4 py-3 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors rounded-b-lg"
                >
                  Outdoor Kitchens
                </a>
              </div>
            </div>
            <a href="#gallery" className="text-primary-foreground hover:text-secondary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-primary-foreground hover:text-secondary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:7135551234"
              className="flex items-center space-x-2 text-primary-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(713) 555-1234</span>
            </a>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
            <div className="py-4 space-y-3">
              <a
                href="#home"
                className="block px-4 py-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-4 py-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="block px-4 py-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                Contact
              </a>
              <div className="px-4 pt-4 space-y-3 border-t border-primary-foreground/10">
                <a
                  href="tel:7135551234"
                  className="flex items-center space-x-2 text-primary-foreground hover:text-accent"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(713) 555-1234</span>
                </a>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
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

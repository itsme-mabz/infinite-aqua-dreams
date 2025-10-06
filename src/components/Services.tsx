import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import serviceDesign from '@/assets/service-design.jpg';
import serviceRemodel from '@/assets/service-remodel.jpg';
import serviceRepair from '@/assets/service-repair.jpg';
import serviceOutdoor from '@/assets/service-outdoor.jpg';

const services = [
  {
    title: 'Pool Design & Construction',
    description: 'Custom inground pools tailored to your lifestyle and backyard vision.',
    image: serviceDesign,
  },
  {
    title: 'Remodeling & Renovations',
    description: 'Revive your old pool with modern finishes and contemporary designs.',
    image: serviceRemodel,
  },
  {
    title: 'Repairs & Leak Detection',
    description: 'Fast, reliable pool repairs to keep your pool in perfect shape year-round.',
    image: serviceRepair,
  },
  {
    title: 'Outdoor Kitchens & Patios',
    description: 'Turn your backyard into the ultimate entertaining space with custom outdoor living.',
    image: serviceOutdoor,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b mx-auto from-background to-ivory/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-secondary/10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/10 blur-xl animate-pulse delay-500"></div>
      
      {/* Section header with more elegance - full width */}
      <div className="relative">
        <div className="text-center mb-20 relative px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-dmsans tracking-tight">
              Our <span className="text-secondary">Services</span>
            </h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mt-6 font-dmsans">
            From concept to completion, we deliver exceptional pool design and outdoor living solutions
          </p>
          
          {/* Underline effect */}
          <div className="mt-10 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Services grid with refined design - full width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-card border border-foreground/10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-3 font-dmsans">{service.title}</h3>
                <p className="text-primary-foreground/90 mb-6 font-dmsans">{service.description}</p>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground font-medium group"
                >
                  <span className="mr-2 font-dmsans">Explore Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action section - Full width prominent box */}
        <div className="mt-24 bg-gradient-to-r max-w-7xl from-secondary/10 to-primary/10 border border-foreground/20 rounded-2xl p-10 shadow-lg mx-auto">
          <div className="text-center  mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-dmsans">Ready to Transform Your Backyard?</h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8 font-dmsans">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-primary text-white hover:opacity-90 font-semibold px-8 py-6 shadow-lg rounded-md"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 rounded-md"
              >
                <ArrowRight className="mr-2 w-5 h-5" />
                View Our Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

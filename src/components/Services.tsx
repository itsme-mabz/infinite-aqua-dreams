import { ArrowRight } from 'lucide-react';
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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we deliver exceptional pool design and outdoor living solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover-lift bg-card"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-primary-foreground/90 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

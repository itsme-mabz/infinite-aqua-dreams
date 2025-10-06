import { Award, DollarSign, MapPin, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Award-Winning Designs',
    description: 'Nationally recognized by NSPI for excellence',
  },
  {
    icon: DollarSign,
    title: 'Financing Made Simple',
    description: 'Flexible payment options available',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Houston-based, serving the community',
  },
  {
    icon: Clock,
    title: '25+ Years Experience',
    description: 'Decades of proven craftsmanship',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Pools Infinite
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team is nationally recognized for excellence in pool remodeling and design, bringing decades of expertise to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg text-center hover-lift shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

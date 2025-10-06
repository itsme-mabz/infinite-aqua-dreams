import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Houston, TX',
    text: 'Pools Infinite made our backyard feel like a resort. The team was professional from start to finish, and the attention to detail was incredible.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    location: 'Sugar Land, TX',
    text: 'We wanted to remodel our 20-year-old pool, and they completely transformed it. Modern, beautiful, and exactly what we envisioned.',
    rating: 5,
  },
  {
    name: 'Jennifer Martinez',
    location: 'The Woodlands, TX',
    text: 'From the 3D design to the final build, everything exceeded our expectations. Our family pool is now the neighborhood gathering spot!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from homeowners who trusted us with their dream pools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg hover-lift"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

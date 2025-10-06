import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Lorraine Rainey Rice Jeter',
    location: 'Houston, TX',
    text: 'I love this company because they take the time and effort to be on time every day and get things done. My pool was done so fast I couldn’t believe it. Everything was efficient and everybody was polite.',
    rating: 5,
  },
  {
    name: 'Andrea G.',
    location: 'Houston, TX',
    text: 'Eliseo and his team had our job done very quickly after coming out. We wanted fire bowls installed to our existing pool and he got the job done quickly and better than we imagined. Highly recommend hiring them for your pool design needs.',
    rating: 5,
  },
  {
    name: 'Unnamed Reviewer',
    location: 'Houston, TX',
    text: 'I am extremely pleased with the work that was recently done to remodel my inground swimming pool. The price was reasonable and the work was superb.',
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

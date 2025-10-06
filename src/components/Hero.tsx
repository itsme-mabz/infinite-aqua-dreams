import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Droplets, Waves, Sun, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content (70%) */}
          <div className="lg:col-span-7 bg-white ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-dmsans">
              Designed with Passion.<br />Built for Perfection.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl font-dmsans">
              Houston's award-winning pool builders, turning backyards into dream escapes.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <Check className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <p className="text-foreground font-dmsans">Premium materials and expert craftsmanship</p>
              </div>
              <div className="flex items-start">
                <Check className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <p className="text-foreground font-dmsans">Custom designs tailored to your vision</p>
              </div>
              <div className="flex items-start">
                <Check className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <p className="text-foreground font-dmsans">End-to-end project management</p>
              </div>
            </div>
            
            
            {/* Image Badges */}
            <div className="flex mt-12">
              <div className="flex flex-col items-center text-center py-4 pr-5">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                  <img src="https://media.istockphoto.com/id/473439534/photo/15-years-experience-gold-badge-stock-image.jpg?s=612x612&w=0&k=20&c=JiWxQZBk42swpTafnP8R1TYVj4UIROO3bH8aJT2TmGU=" alt="" />
                </div>
              </div>
              <div className="flex items-start text-left py-4 pr-5">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                  <img src="https://cdn.vectorstock.com/i/500p/14/95/guarantee-satisfaction-badge-set-vector-771495.jpg" alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center text-center py-4 pr-5">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                  <img src="https://static.vecteezy.com/system/resources/previews/020/950/921/non_2x/professional-certified-badge-seal-sticker-stamp-tag-icon-for-shopping-discount-promotion-vector.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form with Enhanced Animated Pool Art (30%) */}
          <div className="lg:col-span-5 relative">
            {/* Animated Pool Vector Art Background - Bigger and More Dynamic */}
            <div className="absolute inset-0 flex items-center justify-center overflow-visible">
              <div className="relative w-full h-full max-w-lg max-h-[700px]">
                {/* Bigger Pool Outline */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11/12 h-11/12 rounded-[45%] border-8 border-secondary/30 animate-pulse-slow"></div>
                </div>
                
                {/* Enhanced Water Effect with More Dynamic Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-9/12 h-9/12 rounded-[45%] bg-gradient-to-r from-cyan-200 to-blue-200 opacity-40 animate-wave-enhanced"></div>
                </div>
                
                {/* More Dynamic Floating Bubbles - Larger and More Bubbles */}
                <div className="absolute top-1/5 left-1/5 w-10 h-10 rounded-full bg-secondary/30 animate-float-bubble"></div>
                <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/30 animate-float-bubble-delayed"></div>
                <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-secondary/40 animate-float-bubble-slower"></div>
                <div className="absolute bottom-1/5 right-1/5 w-6 h-6 rounded-full bg-primary/40 animate-float-bubble-delayed-slower"></div>
                <div className="absolute top-1/2 left-1/3 w-7 h-7 rounded-full bg-cyan-300/50 animate-float-bubble-extra"></div>
                <div className="absolute top-1/3 left-2/3 w-5 h-5 rounded-full bg-blue-300/50 animate-float-bubble-extra-delayed"></div>
                
                {/* Enhanced Pool Accessories */}
                <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2">
                  <Sun className="w-16 h-16 text-yellow-400 animate-spin-slow opacity-80" />
                </div>
                <div className="absolute bottom-1/6 right-1/3">
                  <Waves className="w-14 h-14 text-secondary animate-bounce-enhanced" />
                </div>
                <div className="absolute top-2/5 right-1/6">
                  <Droplets className="w-10 h-10 text-primary animate-pulse-slow opacity-70" />
                </div>
              </div>
            </div>
            
            {/* Form Container - Increased z-index to ensure it's on top */}
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-foreground/20 z-20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-dmsans text-center">Get Your Free Pool Estimate</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-foreground/80 mb-2 font-dmsans">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none font-dmsans"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-foreground/80 mb-2 font-dmsans">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none font-dmsans"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-foreground/80 mb-2 font-dmsans">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none font-dmsans"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-foreground/80 mb-2 font-dmsans">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none font-dmsans"
                    placeholder="(713) 555-1234"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-foreground/80 mb-2 font-dmsans">Project Type</label>
                  <select
                    id="projectType"
                    className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none font-dmsans bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="design">Pool Design & Construction</option>
                    <option value="remodel">Pool Remodeling</option>
                    <option value="repair">Repairs & Maintenance</option>
                    <option value="outdoor">Outdoor Kitchens</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-foreground/80 mb-2 font-dmsans">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none font-dmsans"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-primary text-white hover:opacity-90 font-semibold py-6 rounded-md shadow-lg mt-4"
                >
                  Get my estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

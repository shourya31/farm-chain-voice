import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agriculture-tech.jpg";
import { Sprout, Shield, Brain, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern agricultural technology with blockchain and AI integration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="bg-primary-soft rounded-full p-4 shadow-glow">
            <Sprout className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-secondary-soft rounded-full p-4 shadow-glow">
            <Shield className="w-8 h-8 text-secondary" />
          </div>
        </div>
        <div className="absolute top-1/2 right-1/6 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-accent-soft rounded-full p-4 shadow-glow">
            <Brain className="w-8 h-8 text-accent" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Transparent Agriculture
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-glow">
              Supply Chain
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Empowering farmers, ensuring transparency, and building trust through 
            <span className="font-semibold text-accent"> blockchain technology</span> and 
            <span className="font-semibold text-secondary-soft"> AI-powered solutions</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              <Users className="w-5 h-5 mr-2" />
              Explore Platform
            </Button>
            <Button variant="trust" size="lg" className="px-8 py-4 text-lg">
              <Shield className="w-5 h-5 mr-2" />
              Learn How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-soft mb-2">10K+</div>
              <div className="text-primary-foreground/80">Farmers Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-soft mb-2">99.9%</div>
              <div className="text-primary-foreground/80">Data Integrity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-soft mb-2">50M+</div>
              <div className="text-primary-foreground/80">Products Traced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">24/7</div>
              <div className="text-primary-foreground/80">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
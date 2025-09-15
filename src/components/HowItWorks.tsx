import { Card, CardContent } from "@/components/ui/card";
import supplyChainImage from "@/assets/supply-chain-journey.jpg";
import { 
  Tractor, 
  Truck, 
  Store, 
  Smartphone, 
  Shield, 
  Brain,
  ArrowRight,
  Leaf
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Tractor,
      title: "Farmers",
      description: "Log produce details, quality metrics, and farming practices using voice-driven interfaces in local languages",
      color: "success",
      features: ["Crop logging", "Quality checks", "Voice interface", "Local language support"]
    },
    {
      icon: Truck,
      title: "Transporters",
      description: "Update logistics information, temperature data, and delivery timelines with real-time tracking",
      color: "secondary",
      features: ["Real-time tracking", "Temperature monitoring", "Route optimization", "Delivery updates"]
    },
    {
      icon: Store,
      title: "Retailers",
      description: "Confirm deliveries, update inventory, and provide product information to consumers",
      color: "earth",
      features: ["Inventory management", "Quality verification", "Stock updates", "Consumer interface"]
    },
    {
      icon: Smartphone,
      title: "Consumers",
      description: "Trace product origins, verify authenticity, and access complete supply chain information",
      color: "accent",
      features: ["Product tracing", "Origin verification", "Quality reports", "Nutrition info"]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How Our Platform
            <span className="block text-transparent bg-clip-text bg-gradient-trust"> Transforms Agriculture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless journey from farm to table, powered by blockchain security and AI intelligence
          </p>
        </div>

        {/* Supply Chain Visual */}
        <div className="mb-16 relative">
          <div className="rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={supplyChainImage}
              alt="Agricultural supply chain journey from farm to consumer"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${step.color}-soft mb-4`}>
                      <IconComponent className={`w-8 h-8 text-${step.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <Leaf className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="bg-primary rounded-full p-2 shadow-soft">
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Technology Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-trust text-secondary-foreground shadow-strong">
            <CardContent className="p-8">
              <Shield className="w-12 h-12 mb-4 text-secondary-foreground" />
              <h3 className="text-2xl font-bold mb-4">Blockchain Security</h3>
              <p className="text-secondary-foreground/90 leading-relaxed">
                Immutable records ensure data integrity and trust throughout the supply chain. 
                Every transaction is cryptographically secured and transparent.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-sustainable text-success-foreground shadow-strong">
            <CardContent className="p-8">
              <Brain className="w-12 h-12 mb-4 text-success-foreground" />
              <h3 className="text-2xl font-bold mb-4">AI Intelligence</h3>
              <p className="text-success-foreground/90 leading-relaxed">
                Machine learning algorithms provide predictive analytics, quality assessments, 
                and fraud detection to optimize the entire supply chain.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  CreditCard, 
  Handshake, 
  Satellite,
  BarChart3,
  MapPin,
  Users,
  Zap,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

const FutureScope = () => {
  const futureFeatures = [
    {
      icon: Cpu,
      title: "IoT Integration",
      description: "Smart sensors for real-time monitoring of soil conditions, weather patterns, and crop health",
      timeline: "2024-2025",
      impact: "Automated data collection and predictive farming insights",
      color: "secondary"
    },
    {
      icon: CreditCard,
      title: "Credit Access Platform",
      description: "Blockchain-verified farming data enables farmers to access credit and insurance services",
      timeline: "2025-2026",
      impact: "Financial inclusion for rural farming communities",
      color: "accent"
    },
    {
      icon: Handshake,
      title: "Cooperative Partnerships",
      description: "Integration with farming cooperatives and government agricultural programs",
      timeline: "2025-2027",
      impact: "Large-scale adoption and policy integration",
      color: "success"
    },
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "Satellite imagery analysis for crop monitoring and yield prediction at scale",
      timeline: "2026-2027",
      impact: "Global agricultural intelligence and early warning systems",
      color: "earth"
    }
  ];

  const partnerships = [
    {
      icon: Users,
      title: "Farming Cooperatives",
      description: "Collaborate with local cooperatives to ensure widespread farmer adoption"
    },
    {
      icon: MapPin,
      title: "Government Agencies",
      description: "Partner with agricultural departments for policy integration and support"
    },
    {
      icon: BarChart3,
      title: "Research Institutions",
      description: "Work with universities for continuous innovation and validation"
    },
    {
      icon: Zap,
      title: "Technology Partners",
      description: "Integrate with IoT providers, blockchain networks, and AI platforms"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Future
            <span className="text-transparent bg-clip-text bg-gradient-sustainable"> Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expanding capabilities and partnerships to transform global agriculture
          </p>
        </div>

        {/* Future Features Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-earth"></div>
          
          <div className="space-y-12">
            {futureFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-1/2 ${isEven ? 'pr-8' : 'pl-8'}`}>
                    <Card className="hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 bg-card border-border">
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <div className={`bg-${feature.color}-soft rounded-lg p-2 mr-3`}>
                            <IconComponent className={`w-5 h-5 text-${feature.color}`} />
                          </div>
                          <div className="bg-muted px-3 py-1 rounded-full text-xs font-medium text-muted-foreground">
                            {feature.timeline}
                          </div>
                        </div>
                        <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                        <div className="bg-success-soft border-l-4 border-success p-3 rounded">
                          <p className="text-sm text-success font-medium">{feature.impact}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Strategy */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Strategic
              <span className="text-transparent bg-clip-text bg-gradient-trust"> Partnerships</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building an ecosystem of collaboration for sustainable agricultural transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => {
              const IconComponent = partnership.icon;
              return (
                <div key={index} className="bg-card rounded-lg p-6 text-center hover:shadow-soft transition-all duration-300">
                  <div className="bg-primary-soft rounded-full p-4 mx-auto mb-4 w-fit">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-3 text-card-foreground">{partnership.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{partnership.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-strong">
          <Sparkles className="w-16 h-16 text-primary-foreground mx-auto mb-6 animate-pulse-glow" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Join the Agricultural Revolution
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be part of the transformation that's bringing transparency, fairness, and sustainability 
            to agriculture worldwide. Together, we can build a future where technology empowers farmers 
            and ensures food security for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-card text-card-foreground hover:bg-card/90 px-8 py-4">
              Get Started Today
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="trust" size="lg" className="px-8 py-4">
              Contact Partnership Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
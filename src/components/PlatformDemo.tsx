import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Users, 
  Package, 
  TrendingUp, 
  Tractor,
  Truck,
  Store,
  Smartphone,
  ArrowRight,
  Play
} from "lucide-react";
import FarmerDashboard from "./FarmerDashboard";
import SupplyChainTracker from "./SupplyChainTracker";
import AIAnalyticsDemo from "./AIAnalyticsDemo";

const PlatformDemo = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const demos = [
    {
      id: "farmer",
      title: "Farmer Dashboard",
      description: "Voice-enabled crop registration with blockchain recording",
      icon: Tractor,
      color: "success",
      features: ["Voice commands", "AI quality check", "Blockchain recording", "QR generation"]
    },
    {
      id: "tracker",
      title: "Supply Chain Tracker",
      description: "Real-time product journey from farm to consumer",
      icon: Package,
      color: "secondary",
      features: ["Real-time tracking", "Temperature monitoring", "Blockchain verification", "QR scanning"]
    },
    {
      id: "ai",
      title: "AI Analytics",
      description: "Computer vision and voice-powered crop intelligence",
      icon: Activity,
      color: "accent",
      features: ["Computer vision", "Pest detection", "Market intelligence", "Voice assistant"]
    }
  ];

  const stats = [
    { label: "Active Farmers", value: "10,247", icon: Users, color: "success" },
    { label: "Products Tracked", value: "50.2M", icon: Package, color: "secondary" },
    { label: "AI Analyses", value: "125K", icon: Activity, color: "accent" },
    { label: "Revenue Growth", value: "+85%", icon: TrendingUp, color: "primary" }
  ];

  const renderDemo = () => {
    switch (activeDemo) {
      case "farmer":
        return <FarmerDashboard />;
      case "tracker":
        return <SupplyChainTracker />;
      case "ai":
        return <AIAnalyticsDemo />;
      default:
        return null;
    }
  };

  if (activeDemo) {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={() => setActiveDemo(null)}>
                ← Back to Overview
              </Button>
              <h2 className="text-xl font-semibold">
                {demos.find(d => d.id === activeDemo)?.title} - Live Demo
              </h2>
            </div>
            <Badge variant="secondary" className="animate-pulse">
              Working Prototype
            </Badge>
          </div>
        </div>
        {renderDemo()}
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Live Platform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-soft to-earth-soft">
              Demonstration
            </span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Experience the actual working platform with real functionality - not just mockups
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-card/95 backdrop-blur-sm border-border shadow-glow">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${stat.color}-soft mb-3`}>
                    <IconComponent className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo) => {
            const IconComponent = demo.icon;
            return (
              <Card key={demo.id} className="bg-card/95 backdrop-blur-sm border-border shadow-strong hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${demo.color} mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{demo.title}</CardTitle>
                  <p className="text-muted-foreground">{demo.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {demo.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full bg-${demo.color} mr-3`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => setActiveDemo(demo.id)}
                    variant="hero" 
                    className="w-full group"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try Live Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* User Journey */}
        <div className="mt-20">
          <Card className="bg-card/95 backdrop-blur-sm border-border shadow-strong">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-card-foreground">
                Complete User Journey
              </CardTitle>
              <p className="text-muted-foreground">
                See how all stakeholders interact in the ecosystem
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { icon: Tractor, title: "Farmers", desc: "Register & monitor crops" },
                  { icon: Truck, title: "Transporters", desc: "Track shipments & conditions" },
                  { icon: Store, title: "Retailers", desc: "Manage inventory & quality" },
                  { icon: Smartphone, title: "Consumers", desc: "Trace product origins" }
                ].map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="text-center relative">
                      <div className="bg-primary-soft rounded-full p-4 mx-auto mb-3 w-fit">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2 text-card-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                      
                      {index < 3 && (
                        <div className="hidden md:block absolute top-8 left-full w-full">
                          <ArrowRight className="w-6 h-6 text-primary mx-auto" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to Transform Agriculture?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            These are fully functional prototypes. Experience the power of blockchain and AI in agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-card text-card-foreground hover:bg-card/90">
              Request Full Demo
            </Button>
            <Button variant="trust" size="lg">
              Deploy for Your Region
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDemo;
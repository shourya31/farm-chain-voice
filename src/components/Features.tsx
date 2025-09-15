import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Brain, 
  Globe, 
  Smartphone, 
  Camera, 
  Mic,
  Database,
  Zap,
  Network,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable ledger technology ensures complete data integrity and transparency",
      benefits: ["Tamper-proof records", "Decentralized verification", "Smart contracts"],
      color: "secondary"
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms for predictive insights and quality assessment",
      benefits: ["Predictive analytics", "Quality scoring", "Fraud detection"],
      color: "accent"
    },
    {
      icon: Mic,
      title: "Voice Interface",
      description: "Local language voice commands for easy farmer interaction",
      benefits: ["Multilingual support", "Hands-free operation", "Audio feedback"],
      color: "success"
    },
    {
      icon: Camera,
      title: "Computer Vision",
      description: "AI-powered visual inspection for crop quality and pest detection",
      benefits: ["Quality assessment", "Pest identification", "Yield prediction"],
      color: "earth"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for smartphones with offline capabilities",
      benefits: ["Offline data sync", "Cross-platform", "User-friendly interface"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Distributed Storage",
      description: "IPFS and Firebase integration for reliable data storage",
      benefits: ["Redundant backups", "Fast access", "Scalable infrastructure"],
      color: "secondary"
    }
  ];

  const techStack = [
    { name: "Frontend", tech: "HTML, CSS, JavaScript", icon: Globe },
    { name: "Blockchain", tech: "Web3.js, Ethers.js", icon: Network },
    { name: "Backend", tech: "Node.js, Express", icon: Zap },
    { name: "Network", tech: "Ethereum, Hyperledger", icon: Shield },
    { name: "Storage", tech: "IPFS, Firebase", icon: Database },
    { name: "AI/ML", tech: "TensorFlow, OpenCV", icon: Brain }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Platform
            <span className="text-transparent bg-clip-text bg-gradient-earth"> Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology stack designed for transparency, efficiency, and user accessibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 bg-card border-border">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${feature.color}-soft mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-trust"> Stack</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with modern, scalable technologies for reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary-soft rounded-lg p-2 mr-3">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-card-foreground">{item.name}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.tech}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
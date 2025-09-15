import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  GraduationCap, 
  TrendingUp, 
  DollarSign, 
  Lightbulb,
  Mic,
  Globe,
  Shield,
  ArrowRight
} from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      icon: Wifi,
      title: "Internet Connectivity",
      problem: "Limited internet access in rural farming areas affects real-time data synchronization",
      solution: "Hybrid blockchain model with offline data caching and batch synchronization when connectivity is restored",
      color: "secondary"
    },
    {
      icon: GraduationCap,
      title: "Technology Literacy",
      problem: "Farmers may have limited experience with digital technologies and smartphone applications",
      solution: "Voice-driven interfaces in local languages with intuitive visual guides and community training programs",
      color: "success"
    },
    {
      icon: TrendingUp,
      title: "Platform Scalability",
      problem: "Growing user base and transaction volume can strain blockchain network performance",
      solution: "Layer-2 scaling solutions and optimized smart contracts to handle increased throughput efficiently",
      color: "accent"
    },
    {
      icon: DollarSign,
      title: "Transaction Costs",
      problem: "High gas fees on public blockchains can make micro-transactions economically unfeasible",
      solution: "Private consortium networks and batch processing to minimize transaction costs for small-scale operations",
      color: "earth"
    }
  ];

  const solutions = [
    {
      icon: Mic,
      title: "Voice-First Design",
      description: "Multilingual voice commands eliminate literacy barriers"
    },
    {
      icon: Globe,
      title: "Offline Capabilities",
      description: "Data synchronization works without constant internet"
    },
    {
      icon: Shield,
      title: "Hybrid Architecture",
      description: "Combines public and private blockchain benefits"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Challenges &
            <span className="text-transparent bg-clip-text bg-gradient-trust"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Addressing real-world implementation challenges with innovative, practical solutions
          </p>
        </div>

        {/* Main Challenges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 bg-card border-border">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`bg-${challenge.color}-soft rounded-lg p-3 mr-4`}>
                      <IconComponent className={`w-6 h-6 text-${challenge.color}`} />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{challenge.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-destructive mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{challenge.problem}</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <h4 className="font-semibold text-success mb-2">Our Solution</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Solution Highlights */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-strong">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
              Key
              <span className="text-transparent bg-clip-text bg-gradient-earth"> Innovations</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative approaches that make advanced technology accessible to rural communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-soft rounded-full p-6 mx-auto mb-4 w-fit">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-card-foreground">{solution.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              );
            })}
          </div>

          {/* Implementation Approach */}
          <div className="bg-gradient-hero rounded-lg p-8 text-center">
            <Lightbulb className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-4 text-primary-foreground">Phased Implementation</h4>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-3xl mx-auto">
              We start with pilot programs in select regions, gradually expanding based on user feedback 
              and infrastructure improvements. Each phase builds on proven solutions while addressing 
              new challenges as they emerge.
            </p>
            <Button variant="hero" size="lg" className="bg-card text-card-foreground hover:bg-card/90">
              Learn More About Implementation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
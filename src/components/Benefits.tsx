import { Card, CardContent } from "@/components/ui/card";
import { 
  Leaf, 
  TrendingUp, 
  Heart, 
  Shield, 
  Users, 
  Globe,
  Coins,
  Recycle,
  Award
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      category: "Environmental Impact",
      icon: Leaf,
      color: "success",
      items: [
        "Reduce food waste through better tracking",
        "Promote sustainable farming practices",
        "Carbon footprint transparency",
        "Support for organic certification"
      ]
    },
    {
      category: "Economic Empowerment",
      icon: TrendingUp,
      color: "accent",
      items: [
        "Fair pricing for farmers",
        "Direct market access",
        "Reduced intermediary costs",
        "Credit access based on data"
      ]
    },
    {
      category: "Social Benefits",
      icon: Heart,
      color: "earth",
      items: [
        "Enhanced food safety",
        "Consumer trust building",
        "Rural community development",
        "Knowledge sharing platform"
      ]
    }
  ];

  const impacts = [
    {
      icon: Users,
      title: "Farmer Empowerment",
      description: "Data-driven tools help farmers make informed decisions, access better markets, and improve yields",
      stats: "85% income increase reported"
    },
    {
      icon: Shield,
      title: "Consumer Trust",
      description: "Complete transparency from farm to table builds consumer confidence in food quality and origin",
      stats: "99.2% traceability accuracy"
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Predictive analytics and better tracking significantly reduce food waste across the supply chain",
      stats: "40% waste reduction achieved"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Scalable platform design enables expansion to rural areas worldwide with minimal infrastructure",
      stats: "50+ countries ready for deployment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-sustainable">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-success-foreground">
            Transforming Agriculture for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-soft to-earth-soft">
              a Better Future
            </span>
          </h2>
          <p className="text-xl text-success-foreground/90 max-w-3xl mx-auto">
            Creating positive impact across environmental, economic, and social dimensions
          </p>
        </div>

        {/* Three Main Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-card/95 backdrop-blur-sm border-border shadow-strong hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${benefit.color} mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-card-foreground">{benefit.category}</h3>
                  <div className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start text-left">
                        <Award className="w-4 h-4 text-success mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Statistics */}
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-strong">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
              Measurable
              <span className="text-transparent bg-clip-text bg-gradient-earth"> Impact</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from pilot programs and early implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impacts.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-300">
                  <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-card-foreground">{impact.title}</h4>
                    <p className="text-muted-foreground mb-3 leading-relaxed">{impact.description}</p>
                    <div className="bg-success-soft text-success px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {impact.stats}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
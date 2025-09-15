import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { 
  Search, 
  Package, 
  Truck, 
  Store, 
  MapPin, 
  Clock, 
  ThermometerSun, 
  Shield,
  AlertTriangle,
  CheckCircle,
  Eye,
  Download
} from "lucide-react";

interface SupplyChainStep {
  id: string;
  stage: string;
  location: string;
  timestamp: string;
  temperature?: number;
  humidity?: number;
  status: "completed" | "in_progress" | "pending";
  handler: string;
  notes?: string;
}

interface ProductTrace {
  productId: string;
  productName: string;
  farmerName: string;
  farmLocation: string;
  harvestDate: string;
  qualityScore: number;
  currentStage: string;
  estimatedDelivery: string;
  steps: SupplyChainStep[];
  certifications: string[];
  temperatureHistory: Array<{ time: string; temperature: number; humidity: number }>;
}

const SupplyChainTracker = () => {
  const [searchId, setSearchId] = useState("");
  const [trackedProduct, setTrackedProduct] = useState<ProductTrace | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample product data
  const sampleProducts: ProductTrace[] = [
    {
      productId: "AGR-2024-001",
      productName: "Organic Tomatoes",
      farmerName: "Rajesh Kumar",
      farmLocation: "Maharashtra, India",
      harvestDate: "2024-01-15",
      qualityScore: 94,
      currentStage: "In Transit",
      estimatedDelivery: "2024-01-20",
      certifications: ["Organic", "Fair Trade", "Non-GMO"],
      steps: [
        {
          id: "1",
          stage: "Harvest",
          location: "Kumar Farm, Maharashtra",
          timestamp: "2024-01-15 06:30",
          status: "completed",
          handler: "Rajesh Kumar",
          notes: "Fresh harvest, quality check passed"
        },
        {
          id: "2",
          stage: "Processing",
          location: "AgriProcess Center, Pune",
          timestamp: "2024-01-16 14:20",
          status: "completed",
          handler: "Processing Team A",
          temperature: 4,
          humidity: 85
        },
        {
          id: "3",
          stage: "Transportation",
          location: "En route to Mumbai",
          timestamp: "2024-01-17 09:15",
          status: "in_progress",
          handler: "LogiTrans Pvt Ltd",
          temperature: 6,
          humidity: 82,
          notes: "Cold chain maintained"
        },
        {
          id: "4",
          stage: "Retail",
          location: "FreshMart, Mumbai",
          timestamp: "2024-01-20 11:00",
          status: "pending",
          handler: "FreshMart Team"
        }
      ],
      temperatureHistory: [
        { time: "06:00", temperature: 4, humidity: 85 },
        { time: "12:00", temperature: 5, humidity: 82 },
        { time: "18:00", temperature: 6, humidity: 80 },
        { time: "00:00", temperature: 4, humidity: 83 },
        { time: "06:00", temperature: 5, humidity: 81 }
      ]
    }
  ];

  const handleSearch = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (searchId === "AGR-2024-001" || searchId === "scan-qr-demo") {
      setTrackedProduct(sampleProducts[0]);
    } else {
      setTrackedProduct(null);
    }
    
    setIsLoading(false);
  };

  const getStageIcon = (stage: string) => {
    switch (stage.toLowerCase()) {
      case "harvest": return Package;
      case "processing": return Package;
      case "transportation": return Truck;
      case "retail": return Store;
      default: return Package;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-success";
      case "in_progress": return "text-accent";
      case "pending": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const demoSearch = () => {
    setSearchId("AGR-2024-001");
    handleSearch();
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          Supply Chain
          <span className="text-transparent bg-clip-text bg-gradient-trust"> Tracker</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Track your product's journey from farm to table with complete transparency
        </p>
      </div>

      {/* Search Section */}
      <Card className="shadow-medium">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter Product ID or scan QR code..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="text-lg h-12"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleSearch} 
                variant="hero" 
                size="lg"
                disabled={isLoading}
                className="px-8"
              >
                {isLoading ? (
                  <>
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Track Product
                  </>
                )}
              </Button>
              <Button 
                onClick={demoSearch} 
                variant="secondary" 
                size="lg"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {trackedProduct ? (
        <div className="space-y-6">
          {/* Product Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Package className="w-8 h-8 text-primary" />
                  <Badge 
                    className={`${
                      trackedProduct.qualityScore >= 95 ? 'bg-success text-success-foreground' :
                      trackedProduct.qualityScore >= 85 ? 'bg-accent text-accent-foreground' :
                      'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {trackedProduct.qualityScore}% Quality
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{trackedProduct.productName}</h3>
                <p className="text-muted-foreground text-sm">ID: {trackedProduct.productId}</p>
                <p className="text-muted-foreground text-sm">Farmer: {trackedProduct.farmerName}</p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Current Status</h3>
                <p className="text-lg font-semibold text-accent">{trackedProduct.currentStage}</p>
                <p className="text-muted-foreground text-sm">Est. Delivery: {trackedProduct.estimatedDelivery}</p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-bold mb-2">Blockchain Verified</h3>
                <div className="flex items-center text-success text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>All records verified</span>
                </div>
                <Button variant="outline" size="sm" className="mt-3">
                  <Download className="w-4 h-4 mr-2" />
                  Download Certificate
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Supply Chain Timeline */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-secondary" />
                <span>Supply Chain Journey</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-6">
                  {trackedProduct.steps.map((step, index) => {
                    const StageIcon = getStageIcon(step.stage);
                    return (
                      <div key={step.id} className="relative flex items-start space-x-4">
                        {/* Timeline Dot */}
                        <div className={`
                          w-16 h-16 rounded-full border-4 border-background flex items-center justify-center z-10
                          ${step.status === 'completed' ? 'bg-success' : 
                            step.status === 'in_progress' ? 'bg-accent' : 'bg-muted'}
                        `}>
                          <StageIcon className={`w-6 h-6 ${
                            step.status === 'completed' ? 'text-success-foreground' :
                            step.status === 'in_progress' ? 'text-accent-foreground' :
                            'text-muted-foreground'
                          }`} />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 bg-muted rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-lg font-semibold">{step.stage}</h4>
                              <p className="text-muted-foreground text-sm">{step.location}</p>
                            </div>
                            <Badge variant={
                              step.status === 'completed' ? 'default' :
                              step.status === 'in_progress' ? 'secondary' : 'outline'
                            }>
                              {step.status.replace('_', ' ')}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>{step.timestamp}</span>
                            </div>
                            <div className="text-muted-foreground">
                              Handler: {step.handler}
                            </div>
                            
                            {(step.temperature || step.humidity) && (
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center">
                                  <ThermometerSun className="w-4 h-4 mr-1 text-accent" />
                                  <span>{step.temperature}°C</span>
                                </div>
                                <div className="text-muted-foreground">
                                  Humidity: {step.humidity}%
                                </div>
                              </div>
                            )}
                            
                            {step.notes && (
                              <p className="text-muted-foreground italic">{step.notes}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Temperature Monitoring */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ThermometerSun className="w-5 h-5 text-accent" />
                <span>Cold Chain Monitoring</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trackedProduct.temperatureHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={3}
                      name="Temperature (°C)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="humidity" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={2}
                      name="Humidity (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-success" />
                <span>Certifications & Quality</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {trackedProduct.certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : searchId && !isLoading ? (
        <Card className="shadow-medium">
          <CardContent className="p-12 text-center">
            <AlertTriangle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product Not Found</h3>
            <p className="text-muted-foreground mb-4">
              The product ID "{searchId}" was not found in our system.
            </p>
            <Button variant="outline" onClick={() => setSearchId("")}>
              Try Another Search
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-medium">
          <CardContent className="p-12 text-center">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Any Product</h3>
            <p className="text-muted-foreground mb-4">
              Enter a product ID or QR code to see its complete journey from farm to table.
            </p>
            <p className="text-sm text-muted-foreground">
              Try the demo with product ID: <code className="bg-muted px-2 py-1 rounded">AGR-2024-001</code>
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SupplyChainTracker;
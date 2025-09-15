import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Tractor, 
  Camera, 
  Mic, 
  MicOff, 
  Upload,
  CheckCircle,
  Clock,
  Leaf,
  Shield,
  QrCode
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface ProductData {
  id: string;
  cropType: string;
  quantity: number;
  harvestDate: string;
  farmLocation: string;
  farmerName: string;
  qualityScore: number;
  certifications: string[];
  timestamp: number;
  blockchainHash: string;
  qrCode: string;
}

const FarmerDashboard = () => {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [formData, setFormData] = useState({
    cropType: "",
    quantity: "",
    harvestDate: "",
    farmLocation: "",
    farmerName: "",
    notes: ""
  });
  const [recentProducts, setRecentProducts] = useState<ProductData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulate AI quality assessment
  const generateQualityScore = () => {
    return Math.floor(Math.random() * 20) + 80; // 80-100 quality score
  };

  // Simulate blockchain hash generation
  const generateBlockchainHash = () => {
    return `0x${Math.random().toString(16).substr(2, 40)}`;
  };

  // Handle voice recording simulation
  const toggleVoiceRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({
        title: "Voice Recording Started",
        description: "Speak in your local language. AI will transcribe automatically.",
      });
      
      // Simulate voice transcription after 3 seconds
      setTimeout(() => {
        if (isRecording) {
          setFormData(prev => ({
            ...prev,
            cropType: "Organic Tomatoes",
            farmLocation: "Maharashtra, India",
            farmerName: "Rajesh Kumar"
          }));
          setIsRecording(false);
          toast({
            title: "Voice Transcribed Successfully",
            description: "Information extracted from voice input.",
          });
        }
      }, 3000);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate blockchain transaction and AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const newProduct: ProductData = {
      id: uuidv4(),
      cropType: formData.cropType,
      quantity: parseInt(formData.quantity),
      harvestDate: formData.harvestDate,
      farmLocation: formData.farmLocation,
      farmerName: formData.farmerName,
      qualityScore: generateQualityScore(),
      certifications: ["Organic", "Fair Trade"],
      timestamp: Date.now(),
      blockchainHash: generateBlockchainHash(),
      qrCode: `https://agrichain.app/track/${uuidv4()}`
    };

    setRecentProducts(prev => [newProduct, ...prev.slice(0, 4)]);
    setFormData({
      cropType: "",
      quantity: "",
      harvestDate: "",
      farmLocation: "",
      farmerName: "",
      notes: ""
    });
    setIsSubmitting(false);

    toast({
      title: "Product Successfully Registered!",
      description: "Your crop data has been recorded on the blockchain.",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-primary-soft rounded-lg p-3">
            <Tractor className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Farmer Dashboard</h1>
            <p className="text-muted-foreground">Register your harvest and track your products</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-success" />
          <span className="text-sm text-success font-medium">Blockchain Secured</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-success" />
                <span>Register New Harvest</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Voice Input */}
                <div className="bg-muted rounded-lg p-4 border-2 border-dashed border-border">
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium">Voice Input (Local Language)</Label>
                    <Button
                      type="button"
                      variant={isRecording ? "destructive" : "secondary"}
                      size="sm"
                      onClick={toggleVoiceRecording}
                      className="flex items-center space-x-2"
                    >
                      {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      <span>{isRecording ? "Stop Recording" : "Start Voice Input"}</span>
                    </Button>
                  </div>
                  {isRecording && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
                      <span>Recording... Speak in Hindi, Tamil, or English</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cropType">Crop Type *</Label>
                    <Input
                      id="cropType"
                      value={formData.cropType}
                      onChange={(e) => setFormData(prev => ({ ...prev, cropType: e.target.value }))}
                      placeholder="e.g., Organic Tomatoes"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity (kg) *</Label>
                    <Input
                      id="quantity"
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                      placeholder="e.g., 500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="harvestDate">Harvest Date *</Label>
                    <Input
                      id="harvestDate"
                      type="date"
                      value={formData.harvestDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, harvestDate: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="farmLocation">Farm Location *</Label>
                    <Input
                      id="farmLocation"
                      value={formData.farmLocation}
                      onChange={(e) => setFormData(prev => ({ ...prev, farmLocation: e.target.value }))}
                      placeholder="e.g., Maharashtra, India"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="farmerName">Farmer Name *</Label>
                  <Input
                    id="farmerName"
                    value={formData.farmerName}
                    onChange={(e) => setFormData(prev => ({ ...prev, farmerName: e.target.value }))}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Farming practices, certifications, quality notes..."
                    rows={3}
                  />
                </div>

                {/* AI Quality Check */}
                <div className="bg-accent-soft rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Camera className="w-5 h-5 text-accent" />
                    <span className="font-medium">AI Quality Assessment</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Upload photos for automatic quality scoring and pest detection
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photos
                  </Button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  variant="hero" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Recording on Blockchain...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Record on Blockchain
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Recent Products */}
        <div>
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <QrCode className="w-5 h-5 text-secondary" />
                <span>Recent Products</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProducts.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Leaf className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No products registered yet</p>
                  <p className="text-sm">Submit your first harvest above</p>
                </div>
              ) : (
                recentProducts.map((product) => (
                  <div key={product.id} className="bg-muted rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-card-foreground">{product.cropType}</h4>
                        <p className="text-sm text-muted-foreground">{product.quantity} kg</p>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`${
                          product.qualityScore >= 95 ? 'bg-success text-success-foreground' :
                          product.qualityScore >= 85 ? 'bg-accent text-accent-foreground' :
                          'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        {product.qualityScore}% Quality
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Blockchain Verified</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {product.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <Button variant="outline" size="sm" className="w-full">
                        <QrCode className="w-4 h-4 mr-2" />
                        Generate QR Code
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
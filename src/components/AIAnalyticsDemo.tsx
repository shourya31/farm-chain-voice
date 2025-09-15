import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  Camera, 
  Mic, 
  MicOff,
  Upload, 
  Zap, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Eye,
  BarChart3,
  Leaf,
  Bug
} from "lucide-react";

interface AIAnalysis {
  qualityScore: number;
  freshness: number;
  defects: string[];
  recommendations: string[];
  marketPrice: number;
  pestDetection: {
    detected: boolean;
    confidence: number;
    pestType?: string;
    treatment?: string;
  };
  nutritionalValue: {
    vitamins: string[];
    minerals: string[];
    calories: number;
  };
}

const AIAnalyticsDemo = () => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [voiceQuery, setVoiceQuery] = useState("");

  // Simulate AI analysis
  const performAIAnalysis = useCallback(async () => {
    setIsAnalyzing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockAnalysis: AIAnalysis = {
      qualityScore: Math.floor(Math.random() * 20) + 80,
      freshness: Math.floor(Math.random() * 15) + 85,
      defects: ["Minor surface scratches", "Slight color variation"],
      recommendations: [
        "Ideal for immediate consumption",
        "Store in cool, dry place",
        "Best for fresh market sales"
      ],
      marketPrice: 45.50,
      pestDetection: {
        detected: Math.random() > 0.7,
        confidence: Math.floor(Math.random() * 30) + 70,
        pestType: "Aphids",
        treatment: "Neem oil spray recommended"
      },
      nutritionalValue: {
        vitamins: ["Vitamin C", "Vitamin K", "Folate"],
        minerals: ["Potassium", "Magnesium", "Iron"],
        calories: 18
      }
    };
    
    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
    
    toast({
      title: "AI Analysis Complete",
      description: "Comprehensive quality assessment generated",
    });
  }, [toast]);

  // Handle image upload simulation
  const handleImageUpload = () => {
    // Simulate image upload
    const demoImageUrl = "https://images.unsplash.com/photo-1592841200221-b8d3c8c1c352?w=400";
    setUploadedImage(demoImageUrl);
    performAIAnalysis();
  };

  // Handle voice command simulation
  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      toast({
        title: "Voice Assistant Active",
        description: "Ask questions about crop quality, pricing, or farming advice",
      });
      
      // Simulate voice recognition
      setTimeout(() => {
        setVoiceQuery("What is the current market price for tomatoes?");
        setIsListening(false);
        
        toast({
          title: "Voice Command Processed",
          description: "Generating AI-powered response...",
        });
      }, 3000);
    }
  };

  const getQualityColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-accent";
    return "text-destructive";
  };

  const getQualityBadgeColor = (score: number) => {
    if (score >= 90) return "bg-success text-success-foreground";
    if (score >= 75) return "bg-accent text-accent-foreground";
    return "bg-destructive text-destructive-foreground";
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          AI-Powered
          <span className="text-transparent bg-clip-text bg-gradient-earth"> Analytics</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Advanced computer vision and machine learning for crop quality assessment, 
          pest detection, and market intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Image Upload */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="w-5 h-5 text-accent" />
                <span>Computer Vision Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                {uploadedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded crop"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground">Image uploaded successfully</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-medium">Upload Crop Images</p>
                      <p className="text-sm text-muted-foreground">
                        AI will analyze quality, detect pests, and provide insights
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={handleImageUpload} 
                variant="hero" 
                className="w-full"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Brain className="w-4 h-4 mr-2 animate-pulse" />
                    AI Analyzing...
                  </>
                ) : (
                  <>
                    <Camera className="w-4 h-4 mr-2" />
                    {uploadedImage ? "Analyze Again" : "Upload & Analyze"}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Voice Assistant */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mic className="w-5 h-5 text-secondary" />
                <span>Voice Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">Ask AI Assistant</span>
                  <Button
                    onClick={toggleVoiceInput}
                    variant={isListening ? "destructive" : "secondary"}
                    size="sm"
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    {isListening ? "Stop" : "Start"}
                  </Button>
                </div>
                
                {isListening && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
                    <span>Listening... Ask about pricing, quality, or farming advice</span>
                  </div>
                )}
                
                {voiceQuery && (
                  <div className="mt-3 p-3 bg-secondary-soft rounded border-l-4 border-secondary">
                    <p className="text-sm font-medium">Your Question:</p>
                    <p className="text-sm text-muted-foreground">{voiceQuery}</p>
                  </div>
                )}
              </div>
              
              <div className="bg-accent-soft rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Brain className="w-4 h-4 text-accent mr-2" />
                  <span className="text-sm font-medium">AI Response</span>
                </div>
                {voiceQuery ? (
                  <p className="text-sm text-muted-foreground">
                    Based on current market data, tomatoes are trading at ₹45-50 per kg. 
                    Your crop quality suggests premium pricing potential. Consider direct sales to restaurants.
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Ask me anything about crop quality, market prices, farming techniques, or pest management.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {analysis ? (
            <>
              {/* Quality Score */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <span>Quality Assessment</span>
                    </div>
                    <Badge className={getQualityBadgeColor(analysis.qualityScore)}>
                      {analysis.qualityScore}% Quality
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getQualityColor(analysis.qualityScore)}`}>
                        {analysis.qualityScore}%
                      </div>
                      <div className="text-sm text-muted-foreground">Overall Quality</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getQualityColor(analysis.freshness)}`}>
                        {analysis.freshness}%
                      </div>
                      <div className="text-sm text-muted-foreground">Freshness</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Detected Issues:</h4>
                    {analysis.defects.map((defect, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <AlertTriangle className="w-4 h-4 text-accent mr-2" />
                        <span className="text-muted-foreground">{defect}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pest Detection */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bug className="w-5 h-5 text-destructive" />
                    <span>Pest Detection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {analysis.pestDetection.detected ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-destructive">
                          {analysis.pestDetection.pestType} Detected
                        </span>
                        <Badge variant="destructive">
                          {analysis.pestDetection.confidence}% Confidence
                        </Badge>
                      </div>
                      <div className="bg-destructive-foreground rounded-lg p-3 border border-destructive">
                        <p className="text-sm font-medium mb-1">Recommended Treatment:</p>
                        <p className="text-sm text-muted-foreground">
                          {analysis.pestDetection.treatment}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center text-success">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span>No pests detected</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Market Intelligence */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-success" />
                    <span>Market Intelligence</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-success">₹{analysis.marketPrice}</div>
                    <div className="text-sm text-muted-foreground">Current market price per kg</div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">AI Recommendations:</h4>
                    {analysis.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Zap className="w-4 h-4 text-accent mr-2" />
                        <span className="text-muted-foreground">{rec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Nutritional Analysis */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="w-5 h-5 text-success" />
                    <span>Nutritional Profile</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {analysis.nutritionalValue.calories}
                    </div>
                    <div className="text-sm text-muted-foreground">Calories per 100g</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Vitamins</h5>
                      <div className="space-y-1">
                        {analysis.nutritionalValue.vitamins.map((vitamin, index) => (
                          <Badge key={index} variant="outline" className="text-xs mr-1">
                            {vitamin}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Minerals</h5>
                      <div className="space-y-1">
                        {analysis.nutritionalValue.minerals.map((mineral, index) => (
                          <Badge key={index} variant="outline" className="text-xs mr-1">
                            {mineral}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="shadow-medium">
              <CardContent className="p-12 text-center">
                <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Analytics Ready</h3>
                <p className="text-muted-foreground mb-4">
                  Upload crop images or use voice commands to get AI-powered insights
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    <span>Computer Vision</span>
                  </div>
                  <div className="flex items-center">
                    <Mic className="w-4 h-4 mr-2" />
                    <span>Voice Commands</span>
                  </div>
                  <div className="flex items-center">
                    <Bug className="w-4 h-4 mr-2" />
                    <span>Pest Detection</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span>Market Analysis</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAnalyticsDemo;
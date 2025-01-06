import { Bot, TrendingDown, Zap, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "AI Agents Deployment",
      description: "Custom AI agents designed to automate your specific business processes",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-primary" />,
      title: "Cost Reduction",
      description: "Significantly reduce operational costs through intelligent automation",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Enhanced Efficiency",
      description: "Streamline workflows and boost productivity with AI-powered solutions",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Data-Driven Insights",
      description: "Make informed decisions with advanced analytics and reporting",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Transform Your Business with AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
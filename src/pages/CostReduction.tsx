import { TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CostReduction = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          ← Back
        </Button>
        
        <div className="flex items-center gap-4 mb-8">
          <TrendingDown className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold">Cost Reduction Through AI</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Cost Reduction"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h2>Strategic Cost Optimization</h2>
          <p>
            AI-driven cost reduction strategies offer businesses a sustainable way to 
            optimize their operational expenses while maintaining or improving service quality.
          </p>

          <h3>Cost Saving Areas</h3>
          <ul>
            <li>Operational Efficiency</li>
            <li>Resource Allocation</li>
            <li>Process Automation</li>
            <li>Energy Management</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            alt="Business Operations"
            className="w-full h-[300px] object-cover rounded-lg my-8"
          />

          <h2>Implementation Benefits</h2>
          <p>
            Our AI solutions provide measurable cost reductions through:
          </p>
          <ul>
            <li>Automated Task Management</li>
            <li>Predictive Maintenance</li>
            <li>Smart Resource Utilization</li>
            <li>Reduced Error Rates</li>
          </ul>

          <h3>ROI Analysis</h3>
          <p>
            Businesses implementing our AI solutions typically see:
          </p>
          <ul>
            <li>20-30% reduction in operational costs</li>
            <li>40% improvement in resource utilization</li>
            <li>50% decrease in error-related expenses</li>
            <li>Significant reduction in manual processing time</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostReduction;
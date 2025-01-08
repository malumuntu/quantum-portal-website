import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const EnhancedEfficiency = () => {
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
          <Zap className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold">Enhanced Efficiency</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Enhanced Efficiency"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h2>Streamlined Operations</h2>
          <p>
            AI-powered efficiency enhancements revolutionize how businesses operate, 
            creating streamlined workflows and optimized processes.
          </p>

          <h3>Key Efficiency Improvements</h3>
          <ul>
            <li>Automated Workflow Management</li>
            <li>Real-time Process Optimization</li>
            <li>Intelligent Resource Allocation</li>
            <li>Enhanced Productivity Tools</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Team Efficiency"
            className="w-full h-[300px] object-cover rounded-lg my-8"
          />

          <h2>Measurable Outcomes</h2>
          <p>
            Our efficiency solutions deliver tangible results:
          </p>
          <ul>
            <li>Reduced Processing Times</li>
            <li>Improved Team Productivity</li>
            <li>Enhanced Quality Control</li>
            <li>Better Resource Utilization</li>
          </ul>

          <h3>Implementation Process</h3>
          <p>
            We follow a structured approach to enhance efficiency:
          </p>
          <ol>
            <li>Process Analysis and Mapping</li>
            <li>AI Solution Design</li>
            <li>Integration and Testing</li>
            <li>Continuous Optimization</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EnhancedEfficiency;
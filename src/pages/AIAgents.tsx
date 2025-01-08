import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AIAgents = () => {
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
          <Bot className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold">AI Agents Deployment</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="AI Deployment"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h2>Revolutionizing Business Operations</h2>
          <p>
            AI agents represent a transformative approach to business process automation. 
            These intelligent systems can handle complex tasks, learn from interactions, 
            and continuously improve their performance.
          </p>

          <h3>Key Benefits</h3>
          <ul>
            <li>24/7 Operation Capability</li>
            <li>Consistent Performance</li>
            <li>Scalable Solutions</li>
            <li>Reduced Human Error</li>
          </ul>

          <h3>Implementation Strategy</h3>
          <p>
            Our approach to AI agent deployment follows a systematic process:
          </p>
          <ol>
            <li>Business Process Analysis</li>
            <li>Custom Agent Development</li>
            <li>Integration with Existing Systems</li>
            <li>Performance Monitoring and Optimization</li>
          </ol>

          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="AI Implementation"
            className="w-full h-[300px] object-cover rounded-lg my-8"
          />

          <h2>Real-World Applications</h2>
          <p>
            AI agents can be deployed across various business functions:
          </p>
          <ul>
            <li>Customer Service and Support</li>
            <li>Data Analysis and Reporting</li>
            <li>Process Automation</li>
            <li>Quality Control</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AIAgents;
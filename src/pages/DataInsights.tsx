import { BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DataInsights = () => {
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
          <BarChart className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold">Data-Driven Insights</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
            alt="Data Analytics"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h2>Advanced Analytics</h2>
          <p>
            Transform raw data into actionable insights with our AI-powered 
            analytics solutions, enabling better decision-making across your organization.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>Real-time Data Analysis</li>
            <li>Predictive Analytics</li>
            <li>Custom Reporting</li>
            <li>Visual Data Representation</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
            alt="Data Visualization"
            className="w-full h-[300px] object-cover rounded-lg my-8"
          />

          <h2>Business Impact</h2>
          <p>
            Data-driven insights provide numerous benefits:
          </p>
          <ul>
            <li>Improved Decision Making</li>
            <li>Market Trend Identification</li>
            <li>Risk Management</li>
            <li>Performance Optimization</li>
          </ul>

          <h3>Implementation Strategy</h3>
          <p>
            Our approach to implementing data insights:
          </p>
          <ol>
            <li>Data Source Integration</li>
            <li>Analytics Framework Setup</li>
            <li>Custom Dashboard Creation</li>
            <li>Continuous Monitoring and Refinement</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DataInsights;
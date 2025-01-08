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
          
          <h2 className="text-3xl font-semibold mt-12 mb-6">Strategic Cost Optimization</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In today's competitive business landscape, strategic cost optimization through AI implementation represents a transformative approach to achieving sustainable financial efficiency. By leveraging advanced artificial intelligence technologies, organizations can significantly reduce operational costs while maintaining or improving service quality and operational effectiveness.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Key Areas of Cost Reduction</h3>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Process Automation - Streamlining routine tasks and workflows</li>
            <li className="mb-3">Resource Optimization - Intelligent allocation and utilization of resources</li>
            <li className="mb-3">Predictive Maintenance - Preventing costly equipment failures</li>
            <li className="mb-3">Energy Management - Smart consumption and optimization</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            alt="Business Operations"
            className="w-full h-[300px] object-cover rounded-lg my-8"
          />

          <h2 className="text-3xl font-semibold mt-12 mb-6">Implementation Methodology</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Successful cost reduction through AI requires a systematic approach that combines technological innovation with strategic business planning. Our comprehensive methodology ensures maximum impact and sustainable results.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Phase 1: Cost Analysis</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The initial phase involves a detailed analysis of current cost structures and identification of optimization opportunities:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Comprehensive Cost Audit - Detailed examination of all cost centers</li>
            <li className="mb-3">Opportunity Identification - Pinpointing areas for AI-driven optimization</li>
            <li className="mb-3">Baseline Establishment - Setting benchmarks for measuring improvements</li>
            <li className="mb-3">Priority Assessment - Ranking opportunities by potential impact</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Phase 2: Solution Design</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            During this phase, we develop tailored AI solutions for identified cost reduction opportunities:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Custom AI Model Development - Creating specialized algorithms</li>
            <li className="mb-3">Integration Planning - Designing seamless system connections</li>
            <li className="mb-3">Process Reengineering - Optimizing workflows for AI integration</li>
            <li className="mb-3">Change Management Strategy - Preparing for organizational adaptation</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Measurable Benefits</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our AI-driven cost reduction solutions deliver quantifiable results across multiple dimensions:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Financial Impact</h3>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">20-30% reduction in operational costs</li>
            <li className="mb-3">40% improvement in resource utilization</li>
            <li className="mb-3">50% decrease in error-related expenses</li>
            <li className="mb-3">Significant reduction in manual processing time</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Operational Efficiency</h3>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Streamlined workflows and processes</li>
            <li className="mb-3">Reduced manual intervention requirements</li>
            <li className="mb-3">Improved accuracy and consistency</li>
            <li className="mb-3">Enhanced resource allocation</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Long-term Value Creation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond immediate cost savings, AI implementation creates lasting value through:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Sustainable Cost Management - Continuous optimization and improvement</li>
            <li className="mb-3">Competitive Advantage - Enhanced market positioning</li>
            <li className="mb-3">Innovation Capability - Platform for future improvements</li>
            <li className="mb-3">Organizational Agility - Improved adaptability to change</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostReduction;
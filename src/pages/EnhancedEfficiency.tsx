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
          <h1 className="text-4xl font-bold">Enhanced Efficiency Through AI</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Enhanced Efficiency"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h2 className="text-3xl font-semibold mt-12 mb-6">Revolutionizing Business Efficiency</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In the modern business landscape, achieving optimal operational efficiency is crucial for maintaining competitiveness and driving growth. Artificial Intelligence has emerged as a transformative force in revolutionizing how businesses operate, enabling unprecedented levels of productivity and performance optimization.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Core Components</h3>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Process Automation - Streamlining repetitive tasks</li>
            <li className="mb-3">Intelligent Workflow Management - Optimizing task distribution</li>
            <li className="mb-3">Predictive Analytics - Anticipating operational needs</li>
            <li className="mb-3">Resource Optimization - Maximizing asset utilization</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Team Efficiency"
            className="w-full h-[300px] object-cover rounded-lg my-8"
          />

          <h2 className="text-3xl font-semibold mt-12 mb-6">Implementation Framework</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Achieving enhanced efficiency through AI requires a structured approach that combines technological innovation with strategic business transformation. Our comprehensive framework ensures successful implementation and sustainable results.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Phase 1: Assessment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The initial phase focuses on understanding current processes and identifying opportunities for efficiency improvements:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Process Mapping - Detailed documentation of workflows</li>
            <li className="mb-3">Efficiency Analysis - Identifying bottlenecks and constraints</li>
            <li className="mb-3">Technology Assessment - Evaluating current systems</li>
            <li className="mb-3">Opportunity Identification - Prioritizing areas for improvement</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Phase 2: Solution Design</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            During this phase, we develop customized AI solutions to address identified efficiency opportunities:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">AI Model Development - Creating specialized algorithms</li>
            <li className="mb-3">Integration Architecture - Designing system connections</li>
            <li className="mb-3">Workflow Optimization - Redesigning processes</li>
            <li className="mb-3">Change Management - Preparing for implementation</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Measurable Outcomes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our AI-driven efficiency solutions deliver quantifiable improvements across multiple dimensions:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Operational Impact</h3>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">50% reduction in processing times</li>
            <li className="mb-3">30% increase in resource utilization</li>
            <li className="mb-3">40% improvement in accuracy</li>
            <li className="mb-3">Significant reduction in manual intervention</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Continuous Improvement</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our approach ensures ongoing optimization and enhancement:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Performance Monitoring - Tracking key metrics</li>
            <li className="mb-3">Regular Updates - Incorporating new capabilities</li>
            <li className="mb-3">Feedback Integration - Learning from outcomes</li>
            <li className="mb-3">Innovation Pipeline - Continuous enhancement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnhancedEfficiency;
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
          
          <h2 className="text-3xl font-semibold mt-12 mb-6">Unlocking Business Value Through Data</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In today's data-driven business environment, the ability to extract meaningful insights from vast amounts of information has become a critical competitive advantage. Our AI-powered data analytics solutions transform raw data into actionable intelligence, enabling organizations to make informed decisions and drive strategic growth.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Core Capabilities</h3>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Advanced Analytics - Deep data analysis and pattern recognition</li>
            <li className="mb-3">Predictive Modeling - Future trend forecasting</li>
            <li className="mb-3">Real-time Processing - Immediate insight generation</li>
            <li className="mb-3">Visual Analytics - Intuitive data representation</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
            alt="Data Visualization"
            className="w-full h-[300px] object-cover rounded-lg my-8"
          />

          <h2 className="text-3xl font-semibold mt-12 mb-6">Implementation Approach</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our comprehensive approach to implementing data insights solutions ensures maximum value creation and sustainable results.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Phase 1: Data Assessment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The initial phase focuses on understanding your data landscape and requirements:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Data Source Identification - Mapping available data sources</li>
            <li className="mb-3">Quality Assessment - Evaluating data integrity</li>
            <li className="mb-3">Requirements Analysis - Understanding business needs</li>
            <li className="mb-3">Architecture Planning - Designing data flow</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Phase 2: Solution Development</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            During this phase, we build and implement customized analytics solutions:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Analytics Framework - Building processing infrastructure</li>
            <li className="mb-3">Model Development - Creating specialized algorithms</li>
            <li className="mb-3">Integration - Connecting with existing systems</li>
            <li className="mb-3">Visualization - Developing intuitive dashboards</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Business Impact</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our data insights solutions deliver measurable value across multiple dimensions:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Strategic Benefits</h3>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Enhanced Decision Making - Data-driven strategic planning</li>
            <li className="mb-3">Market Intelligence - Deep market understanding</li>
            <li className="mb-3">Risk Management - Improved risk assessment</li>
            <li className="mb-3">Performance Optimization - Continuous improvement</li>
          </ul>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Future Readiness</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our solutions prepare organizations for future challenges and opportunities:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li className="mb-3">Scalable Architecture - Ready for growing data volumes</li>
            <li className="mb-3">Advanced Capabilities - Integration of emerging technologies</li>
            <li className="mb-3">Continuous Learning - Evolving analytics models</li>
            <li className="mb-3">Innovation Support - Platform for future development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataInsights;
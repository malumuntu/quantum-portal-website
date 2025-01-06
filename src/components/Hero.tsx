import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="container mx-auto relative z-20">
        <img 
          src="/lovable-uploads/1129422b-d3ec-4f2d-97bd-ae4463b5a455.png" 
          alt="QuantumGaze.AI Logo" 
          className="w-64 md:w-80 mx-auto mb-8 animate-fade-in"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Reduce Costs with AI-Powered Solutions
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in">
          Deploy intelligent AI agents to streamline your business operations and significantly reduce operational costs.
        </p>
        <Button
          className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 animate-fade-in"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};
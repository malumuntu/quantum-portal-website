import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 w-full">
        <div className="bg-white w-full py-6 mb-8">
          <div className="container mx-auto">
            <img 
              src="/lovable-uploads/c6210383-59ff-4250-8c27-06f02d642153.png" 
              alt="Astrelis Logo" 
              className="w-64 md:w-80 mx-auto animate-fade-in"
            />
          </div>
        </div>
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome
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
    </div>
  );
};
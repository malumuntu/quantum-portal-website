import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-primary via-secondary to-accent">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
        Quantum Intelligence for Tomorrow's Innovation
      </h1>
      <p className="text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in">
        Harness the power of advanced AI solutions to transform your business and stay ahead of the competition.
      </p>
      <Button
        className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 animate-fade-in"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Get Started
      </Button>
    </div>
  );
};
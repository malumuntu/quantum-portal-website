import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVision Inc",
    content: "QuantumGaze.AI transformed our data processing capabilities. Their AI solutions reduced our analysis time by 75%.",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, Future Systems",
    content: "The team's expertise in quantum computing and AI is unmatched. They delivered beyond our expectations.",
  },
  {
    name: "Emma Thompson",
    role: "Director of Innovation, GlobalTech",
    content: "Working with QuantumGaze.AI was a game-changer for our business. Their solutions are innovative and effective.",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-none p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary mb-6" />
            <p className="text-xl text-gray-300 mb-6">{testimonials[currentIndex].content}</p>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </Card>
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={previous}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <Testimonials />
      <ContactForm />
      <Chatbot />
    </div>
  );
};

export default Index;
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;
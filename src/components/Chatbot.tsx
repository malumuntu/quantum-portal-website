import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: 'Hello! How can I help you reduce costs with AI solutions today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response - In a real application, this would call your AI service
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant' as const,
        content: "Thank you for your question! Our AI solutions can help automate repetitive tasks, optimize resource allocation, and improve decision-making processes. Would you like to learn more about a specific aspect of our services?"
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4 bg-primary hover:bg-primary/90 text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      <Card className={cn(
        "fixed bottom-20 right-4 w-[350px] h-[500px] flex flex-col p-4 shadow-xl transition-all duration-300 bg-white",
        isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">AI Assistant</h3>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "p-3 rounded-lg max-w-[80%]",
                message.role === 'user' 
                  ? "bg-primary text-white ml-auto" 
                  : "bg-gray-100 text-gray-900"
              )}
            >
              {message.content}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </Card>
    </>
  );
};
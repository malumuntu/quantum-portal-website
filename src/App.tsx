import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIAgents from "./pages/AIAgents";
import CostReduction from "./pages/CostReduction";
import EnhancedEfficiency from "./pages/EnhancedEfficiency";
import DataInsights from "./pages/DataInsights";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/cost-reduction" element={<CostReduction />} />
          <Route path="/enhanced-efficiency" element={<EnhancedEfficiency />} />
          <Route path="/data-insights" element={<DataInsights />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
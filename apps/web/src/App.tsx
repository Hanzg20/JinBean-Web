import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Innovation from "./pages/Innovation";
import Cases from "./pages/Cases";
import Partners from "./pages/Partners";
import Apply from "./pages/Apply";
import Docs from "./pages/Docs";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Solutions & Sub-solutions */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:id" element={<Solutions />} />

            <Route path="/innovation" element={<Innovation />} />
            <Route path="/platform" element={<Innovation />} /> {/* Alias for Innovation */}
            <Route path="/cases" element={<Cases />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />

            <Route path="/products" element={<Solutions />} /> {/* Point products to solutions for now */}

            {/* Redirect /demo to /apply for now as a demo request */}
            <Route path="/demo" element={<Navigate to="/apply" replace />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

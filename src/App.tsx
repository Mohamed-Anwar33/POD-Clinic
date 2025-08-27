import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import i18n from "./i18n";
import AOS from 'aos';
import 'aos/dist/aos.css';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
      delay: 0,
    });

    const applyDir = (lng: string) => {
      const html = document.documentElement;
      const isAr = lng === "ar";
      html.setAttribute("lang", lng);
      html.setAttribute("dir", isAr ? "rtl" : "ltr");
      document.body.setAttribute("dir", isAr ? "rtl" : "ltr");
    };

    // Initial apply
    applyDir(i18n.language);

    // Listen to changes
    const handler = (lng: string) => applyDir(lng);
    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

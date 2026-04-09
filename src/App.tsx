import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Lazy load all page routes for code splitting
const Index = lazy(() => import("./pages/Index.tsx"));
const Products = lazy(() => import("./pages/Products.tsx"));
const ProductPage = lazy(() => import("./pages/ProductPage.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Media = lazy(() => import("./pages/Media.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

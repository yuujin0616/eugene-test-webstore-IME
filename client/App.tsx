import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/categories"
            element={
              <Placeholder
                title="Categories"
                description="Browse products by category. This page will show all available product categories with filtering options."
                backLink="/shop"
                backLinkText="Browse Products"
              />
            }
          />
          <Route
            path="/category/:category"
            element={
              <Placeholder
                title="Category Products"
                description="Products in this category will be displayed here with filtering and sorting options."
                backLink="/categories"
                backLinkText="All Categories"
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="About Us"
                description="Learn more about our company, mission, and the team behind our premium products."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Placeholder
                title="Contact Us"
                description="Get in touch with our customer support team. We're here to help with any questions."
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Placeholder
                title="Shopping Cart"
                description="Review your selected items and proceed to checkout. Cart functionality coming soon!"
                backLink="/shop"
                backLinkText="Continue Shopping"
              />
            }
          />
          <Route
            path="/new-arrivals"
            element={
              <Placeholder
                title="New Arrivals"
                description="Discover the latest products in our collection. Fresh styles and innovative designs."
                backLink="/shop"
                backLinkText="Browse All Products"
              />
            }
          />
          <Route
            path="/sale"
            element={
              <Placeholder
                title="Sale Items"
                description="Great deals on premium products. Limited time offers and discounted items."
                backLink="/shop"
                backLinkText="Browse All Products"
              />
            }
          />
          <Route
            path="/shipping"
            element={
              <Placeholder
                title="Shipping Information"
                description="Learn about our shipping options, delivery times, and costs."
              />
            }
          />
          <Route
            path="/returns"
            element={
              <Placeholder
                title="Returns & Exchanges"
                description="Information about our return policy and how to process returns or exchanges."
              />
            }
          />
          <Route
            path="/faq"
            element={
              <Placeholder
                title="Frequently Asked Questions"
                description="Find answers to commonly asked questions about our products and services."
              />
            }
          />
          <Route
            path="/careers"
            element={
              <Placeholder
                title="Careers"
                description="Join our team! Explore current job openings and learn about working with us."
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <Placeholder
                title="Privacy Policy"
                description="Information about how we collect, use, and protect your personal data."
              />
            }
          />
          <Route
            path="/terms"
            element={
              <Placeholder
                title="Terms of Service"
                description="Legal terms and conditions for using our website and services."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

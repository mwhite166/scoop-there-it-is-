
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import CakeDecorating from "./pages/CakeDecorating";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Layout/Navbar";
import SocialLinks from "./components/SocialLinks";
import { Mail, Phone, MapPin } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cake-decorating" element={<CakeDecorating />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="bg-icecream-blue/10 py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Phone size={16} className="text-icecream-blue" />
                    <a href="tel:9853279617" className="hover:text-icecream-blue">
                      (985) 327-9617
                    </a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Mail size={16} className="text-icecream-blue" />
                    <a href="mailto:whitemegan404@gmail.com" className="hover:text-icecream-blue">
                      whitemegan404@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin size={16} className="text-icecream-blue" />
                    <a 
                      href="https://maps.google.com/?q=8229+Jefferson+Hwy,+Harahan,+LA+70123" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-icecream-blue"
                    >
                      8229 Jefferson Hwy, Harahan, LA 70123
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-4">Hours</h4>
                  <p className="mb-1">Monday - Thursday: 11am - 9pm</p>
                  <p className="mb-1">Friday - Saturday: 11am - 10pm</p>
                  <p>Sunday: 12pm - 8pm</p>
                </div>
                <div className="text-center md:text-right">
                  <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                  <SocialLinks className="justify-center md:justify-end" />
                  <div className="mt-4">
                    <img 
                      src="/lovable-uploads/013a76a0-1e1b-4894-bf24-4d32016e5de0.png" 
                      alt="Scoop There It Is Logo" 
                      className="h-16 w-auto mx-auto md:ml-auto md:mr-0" 
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-8 pt-4 border-t border-icecream-blue/20">
                <p>© {new Date().getFullYear()} Scoop There It Is. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

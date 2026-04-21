import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Defence from "./pages/Defence";
import Transportation from "./pages/Transportation";
import Recreation from "./pages/Recreation";
import Technology from "./pages/Technology";
import About from "./pages/About";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Disclaimer from "./pages/Disclaimer";

import PalmBeach from "./data/03_12_26"
import TorontoBoatShow from "./data/02_11_26";
import TIBS2026 from "./data/01_13_26";
import SeedRound from  "./data/06_10_25";
import NV1Feature from "./data/08_26_24"
import DesignovaPartnership from "./data/08_02_24";
import MaRS from "./data/05_30_24";
import SDTCFunding from "./data/05_18_24";
import ACStudio from "./data/05_09_23";
import DefenceExpansion from "./data/04_21_26"
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/defence" element={<Defence />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/recreation" element={<Recreation />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          <Route path="/news/envgo-palm-beach-2026" element={<PalmBeach />} />
          <Route path="/news/envgo-toronto-boat-show-2026" element={<TorontoBoatShow />} />
          <Route path="/news/envgo-nv1-toronto-international-boat-show-2026" element={<TIBS2026 />} />
          <Route path="/news/envgo-raises-2m-seed-round" element={<SeedRound />} />
          <Route path="/news/envgo-new-electric-boat-nv1" element={<NV1Feature />} />
          <Route path="/news/envgo-partnership-j-david-weiss-designova" element={<DesignovaPartnership />} />
          <Route path="/news/envgo-joins-mars-discovery-district" element={<MaRS />} />
          <Route path="/news/envgo-secures-sdtc-funding" element={<SDTCFunding />} />
          <Route path="/news/envgo-ac-studio-program-grant" element={<ACStudio />} />
          <Route path="news/envgo-expands-into-defence-public-safety" element={<DefenceExpansion />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
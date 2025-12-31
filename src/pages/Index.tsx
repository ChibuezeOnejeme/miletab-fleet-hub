import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueProps />
      <Features />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

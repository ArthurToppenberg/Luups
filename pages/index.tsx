import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { QuoteSection } from "@/components/home/QuoteSection";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <QuoteSection />
      <SustainabilitySection />
      <CTASection />
    </Layout>
  );
};

export default Index;

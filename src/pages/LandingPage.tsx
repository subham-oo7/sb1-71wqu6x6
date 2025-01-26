import React from 'react';
import { Header } from '../components/header';
import { HeroSection } from '../components/hero-section';
import { FeaturesSection } from '../components/features-section';
import { ShadowAISection } from '../components/shadow-ai-section';
import { WorkflowSection } from '../components/workflow-section';
import { PricingSection } from '../components/pricing-section';
import { CTASection } from '../components/cta-section';
import { Footer } from '../components/footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ShadowAISection />
      <WorkflowSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
import React from "react";
import "./App.css";
import { CTASection } from "./components/cta/cta.componentr";
import { FaqSection } from "./components/faq/faq.component";
import { FeaturesSection } from "./components/features/features.component";
import { Footer } from "./components/footer/footer.component";
import { HeroSection } from "./components/hero/hero.component";
import { Container } from "./components/primitives/container/container.component";

function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Container>
        <FaqSection />
      </Container>
      <Footer />
    </>
  );
}

export default App;

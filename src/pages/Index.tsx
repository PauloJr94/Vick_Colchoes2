import { useState, useEffect } from "react";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import BenefitsSection from "@/components/BenefitsSection";
import CategoryIcons from "@/components/CategoryIcons";
import ProductList from "@/components/ProductList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setShowContact(window.location.hash === "#contato");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {showContact ? (
          <ContactSection />
        ) : (
          <>
            <PromoBanner />
            <BenefitsSection />
            <CategoryIcons />
            <ProductList />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

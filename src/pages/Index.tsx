import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Challenges from "@/components/Challenges";
import FutureScope from "@/components/FutureScope";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="challenges">
          <Challenges />
        </section>
        <section id="future">
          <FutureScope />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

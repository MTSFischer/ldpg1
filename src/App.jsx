import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Offer from './components/Offer.jsx';
import Testimonials from './components/Testimonials.jsx';
import Guarantee from './components/Guarantee.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import { CountdownProvider } from './components/Countdown.jsx';
import FloatingBar from './components/FloatingBar.jsx';
import TrustBadges from './components/TrustBadges.jsx';

const App = () => (
  <CountdownProvider>
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        {/* Placeholder para integração de analytics (GA4, Meta Pixel, etc.) */}
        <Hero />
        <TrustBadges />
        <Benefits />
        <HowItWorks />
        <Offer />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  </CountdownProvider>
);

export default App;

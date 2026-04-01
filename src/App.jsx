import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="font-sans pb-32 md:pb-40"> {/* Este padding evita que el footer tape el final del sitio */}
      <Header />
      <Hero />
      <Services />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
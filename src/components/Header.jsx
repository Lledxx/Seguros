import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Definimos las clases según el estado para que sea más limpio
  const headerClasses = scrolled 
    ? "bg-black shadow-lg md:bg-black/70 md:backdrop-blur-md" 
    : "bg-transparent backdrop-blur-none";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClasses}`}>
      
      <div className="container mx-auto flex items-center justify-between p-3 md:p-6">
        
        <a href="/" className="block"> 
          <img 
            src="/img/logo.png"
            alt="Logo Alejandro Bessi" 
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled 
                ? "h-10 md:h-14" 
                : "h-12 md:h-18"
            }`}
          />
        </a>

      </div>
    </header>
  );
}
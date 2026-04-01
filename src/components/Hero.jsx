const telefono = "5491178293424";

export default function Hero() {
  const contactar = () => {
    const url = `https://wa.me/${telefono}?text=Hola, quiero asesoramiento sobre seguros`;
    window.open(url, "_blank");
  };

  return (
    <section 
      className="relative min-h-screen bg-cover bg-[50%_35%] bg-no-repeat flex items-center justify-center px-5"
      style={{ 
        backgroundImage: "url('https://campus.seguros.school/pluginfile.php/911/course/overviewfiles/prl-sector-asegurador.jpg')" 
      }}
    >
      {/* Overlay: Importante para el contraste del logo arriba */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white text-center max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
          Seguros Generales <br className="hidden md:block" /> a tu Medida
        </h2>

        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
          Asesoramiento profesional, rápido y confiable para proteger lo que más valorás.
        </p>

        <button
          onClick={contactar}
          className="bg-green-500 px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
        >
          Solicitar asesoramiento
        </button>
      </div>
    </section>
  );
}
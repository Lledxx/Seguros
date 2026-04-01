const telefono = "5491178293424";

export default function Hero() {
  const contactar = () => {
    const url = `https://wa.me/${telefono}?text=Hola, quiero asesoramiento sobre seguros`;
    window.open(url, "_blank");
  };

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-32 px-5 flex items-center justify-center"
      style={{ 
        backgroundImage: "url('https://i.ibb.co/Y7RV93hV/Gemini-Generated-Image-4wrdik4wrdik4wrd.png')" 
      }}
    >
      <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[1px]"></div>

      <div className="relative z-10 text-white text-center max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Seguros Generales a tu Medida
        </h2>

        <p className="text-xl mb-10 max-w-xl mx-auto drop-shadow-md">
          Asesoramiento profesional, rápido y confiable para proteger lo que más valorás.
        </p>

        <button
          onClick={contactar}
          className="bg-green-500 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:bg-green-600 transition-all shadow-xl"
        >
          Solicitar asesoramiento
        </button>
      </div>
    </section>
  );
}
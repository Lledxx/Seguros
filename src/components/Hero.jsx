const telefono = "5491178293424";

export default function Hero() {
  const contactar = () => {
    const url = `https://wa.me/${telefono}?text=Hola, quiero cotizar un seguro`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center px-5 pt-24 md:pt-32 overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat blur-[1px] scale-105"
        style={{ backgroundImage: "url('/img/insurance.jpg')" }}
      />
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 bg-black/25 p-6 md:p-10 rounded-2xl backdrop-blur-md text-center flex flex-col items-center border border-white/10 max-w-3xl shadow-2xl">
        
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg leading-tight">
          Cotizá tu seguro en minutos <br/> 
          <span className="text-orange-400">y pagá menos</span>
        </h1>
        
        <p className="text-gray-100 text-base md:text-lg max-w-2xl mb-6">
          Comparamos entre las mejores aseguradoras para darte el mejor precio, sin vueltas.
        </p>

        <div className="text-gray-200 text-sm md:text-base mb-8 flex flex-col md:flex-row md:gap-6 space-y-2 md:space-y-0">
          <p className="flex items-center justify-center gap-1">
            <span className="text-green-400 font-bold">✔</span> Respuesta en minutos
          </p>
          <p className="flex items-center justify-center gap-1">
            <span className="text-green-400 font-bold">✔</span> Sin compromiso
          </p>
          <p className="flex items-center justify-center gap-1">
            <span className="text-green-400 font-bold">✔</span> Atención personalizada
          </p>
        </div>
        
        <button 
          onClick={contactar}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-xl shadow-xl hover:scale-105 transition-all text-lg"
        >
          Cotizar por WhatsApp ahora
        </button>

      </div>
      
    </section>
  );
}
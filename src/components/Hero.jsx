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
   {/* Contenedor del texto y botón */}
<div className="relative z-10 bg-black/40 p-6 md:p-10 rounded-xl backdrop-blur-[2px] text-center flex flex-col items-center">
  
  <h1 className="text-white text-4xl md:text-6xl font-bold italic mb-4 drop-shadow-lg">
    Seguros Generales <br/> 
    <span className="text-blue-400">a tu Medida</span>
  </h1>
  
  <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-8">
    Asesoramiento profesional, rápido y confiable para proteger lo que más valorás.
  </p>
  
  {/* Botón centrado gracias a 'items-center' en el div padre */}
  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:scale-105 transition-all text-lg w-fit">
    Solicitar asesoramiento
  </button>

</div>
    </section>
  );
}
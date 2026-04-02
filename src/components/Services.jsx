import { Shield, Home, Building2 } from "lucide-react"; // Importamos iconos

export default function Services() {
  const servicios = [
    {
      titulo: "Seguros Personales",
      desc: "Protección integral para vos y tu familia: vida, accidentes personales y salud.",
      icon: <Shield className="w-10 h-10 text-blue-500" />,
    },
    {
      titulo: "Seguros Patrimoniales",
      desc: "Cuidamos tus bienes más importantes: auto, hogar, moto y embarcaciones.",
      icon: <Home className="w-10 h-10 text-blue-500" />,
    },
    {
      titulo: "Seguros Empresariales",
      desc: "Soluciones a medida para empresas, comercios, ART y responsabilidad civil.",
      icon: <Building2 className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <section className="py-24 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Contenedor de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Contenedor del Icono */}
              <div className="mb-6 bg-blue-50 w-fit p-4 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                   {s.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {s.titulo}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-12 md:h-16" />
    </section>
  );
}
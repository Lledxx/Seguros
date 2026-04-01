export default function Services() {
  const servicios = [
    {
      titulo: "Seguros Personales",
      desc: "Protección para vos y tu familia en todo momento",
    },
    {
      titulo: "Seguros Patrimoniales",
      desc: "Cuidamos tus bienes más importantes",
    },
    {
      titulo: "Seguros Empresariales",
      desc: "Soluciones para empresas y comercios",
    },
  ];

  return (
    <section className="py-20 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {servicios.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-xl p-8 w-72 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-3">{s.titulo}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
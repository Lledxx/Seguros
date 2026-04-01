const telefono = "5491178293424";

export default function Contact() {
  const enviar = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const tel = e.target.telefono.value;
    const mensaje = e.target.mensaje.value;

    const texto = `Hola, soy ${nombre}. Tel: ${tel}. Necesito: ${mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-20 text-center">
      <div className="text-center mb-10">
  <h2 className="text-[#0a192f] text-3xl md:text-4xl font-extrabold mb-2">
    Solicitá tu cotización
  </h2>
  <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
  <p className="text-gray-500 mt-4">Completá tus datos y te contactaremos a la brevedad.</p>
     </div>
      
      <form
        onSubmit={enviar}
        className="flex flex-col items-center gap-4"
      >
        <input
          name="nombre"
          placeholder="Nombre"
          className="p-3 w-80 border rounded-lg"
          required
        />
        <input
          name="telefono"
          placeholder="Teléfono"
          className="p-3 w-80 border rounded-lg"
          required
        />
        <textarea
          name="mensaje"
          placeholder="¿Qué seguro necesitás?"
          className="p-3 w-80 border rounded-lg"
          required
        />

        <button className="bg-orange-500 px-6 py-3 rounded-lg text-white hover:bg-green-600">
          Enviar consulta
        </button>
      </form>
    </section>
  );
}
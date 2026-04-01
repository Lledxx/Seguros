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
      <h2 className="text-4xl font-bold mb-8">Solicitar Cotización</h2>

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

        <button className="bg-green-500 px-6 py-3 rounded-lg text-white hover:bg-green-600">
          Enviar consulta
        </button>
      </form>
    </section>
  );
}
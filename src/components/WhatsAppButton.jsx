const telefono = "5491178293424";

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open(`https://wa.me/${telefono}`, "_blank")}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      💬
    </button>
  );
}
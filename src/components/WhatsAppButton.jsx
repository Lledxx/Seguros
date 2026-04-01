import React from 'react';
/* Opción A: Si usas react-icons (Recomendado) 
   Instalación: npm install react-icons
*/
import { FaWhatsapp } from 'react-icons/fa';

const telefono = "5491178293424";

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open(`https://wa.me/${telefono}`, "_blank")}
      /* CAMBIOS CLAVE:
         1. bottom-[70px]: Lo sube para que no quede detrás de la barra del footer.
         2. z-[60]: Lo pone por encima de la capa del footer (z-50).
      */
      className="fixed bottom-[70px] right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-[60] flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      {/* El ícono de react-icons es más nítido que un emoji */}
      <FaWhatsapp size={30} className="drop-shadow-md" />
    </button>
  );
}
import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';


export default function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open(`https://wa.me/1178293424`, "_blank")}
      className="fixed bottom-[70px] right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-[60] flex items-center justify-center animate-bounce-subtle"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={30} className="drop-shadow-md" />
      
  
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </button>
  );
}
import React, { useState } from 'react';
import * as LucideIcons from "lucide-react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anioActual = new Date().getFullYear();
  const { Instagram, Linkedin, Mail, MessageCircle, ChevronUp, X } = LucideIcons;

  return (
    <footer 
      className={`fixed bottom-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out border-t border-gray-200 bg-white/95 backdrop-blur-2xl ${
        isOpen 
          ? 'translate-y-0 shadow-[0_-15px_50px_rgba(0,0,0,0.2)]' 
          : 'translate-y-[calc(100%-48px)]' 
      }`}
    >
      {/* --- BARRA SUPERIOR (SIEMPRE VISIBLE) --- */}
      <div 
        className="h-[48px] max-w-7xl mx-auto px-4 flex justify-between items-center cursor-pointer touch-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <h3 className="text-gray-900 text-sm md:text-lg font-bold italic">
            Alejandro <span className="text-blue-600">Bessi</span>
          </h3>
        </div>
        
        <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px]">
          {isOpen ? (
             <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
               <X size={14} /> CERRAR
             </span>
          ) : (
             <span className="flex items-center gap-1">
               <ChevronUp size={14} className="animate-bounce" /> MÁS INFO
             </span>
          )}
        </div>
      </div>

      {/* --- CONTENIDO DESPLEGABLE (CON SCROLL INTERNO) --- */}
      <div className={`max-w-7xl mx-auto px-6 pt-6 pb-20 border-t border-gray-100 overflow-y-auto max-h-[75vh] md:max-h-none transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Perfil */}
          <div className="space-y-3">
            <h4 className="text-gray-900 font-black italic text-lg tracking-tight">Alejandro Bessi</h4>
            <p className="text-sm text-gray-700 font-medium leading-snug"> 
              Asesoramiento profesional y personalizado con respaldo nacional.
            </p>
            <div className="flex space-x-6 pt-2">
              <a href="https://wa.me/5491178293424" className="text-gray-500 hover:text-green-600">
                {MessageCircle && <MessageCircle size={24} />}
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                {Instagram && <Instagram size={24} />}
              </a>
            </div>
          </div>

          {/* Seguros */}
          <div className="hidden md:block">
            <h4 className="text-gray-900 font-black mb-4 text-[11px] uppercase tracking-widest">Coberturas</h4>
            <ul className="space-y-2 text-sm text-gray-700 font-semibold">
              <li>🚗 Vehículos</li>
              <li>🏠 Hogar</li>
              <li>🛡️ Vida</li>
              <li>🏢 Pyme</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-black text-[11px] uppercase tracking-widest">Contacto</h4>
            <div className="space-y-3 text-sm text-gray-700 font-semibold">
              <p className="flex items-center gap-2">📍 Moreno, Bs. As.</p>
              <p className="text-blue-700 font-bold">📞 +54 9 11 7829-3424</p>
              <p className="text-xs break-all truncate text-gray-500">
                {Mail && <Mail size={14} className="inline mr-1" />} bessiseguros@gmail.com.ar
              </p>
            </div>
          </div>

          {/* Institucional */}
          <div className="space-y-4 pt-4 md:pt-0">
            <button className="w-full py-3 px-4 border-2 border-red-100 text-red-600 text-[11px] font-black rounded-xl uppercase bg-red-50 active:bg-red-200 transition-all">
              Arrepentimiento
            </button>
            <div className="text-[10px] text-gray-400 font-bold border-l-2 border-gray-100 pl-3">
               <p className="uppercase text-gray-700">Superintendencia de Seguros</p>
               <p>0800-666-8400 | ssn.gob.ar</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
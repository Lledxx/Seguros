import React, { useState } from 'react';
import * as LucideIcons from "lucide-react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anioActual = new Date().getFullYear();
  const { Instagram, Linkedin, Mail, MessageCircle, ChevronUp } = LucideIcons;

  return (
    <footer 
      className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-t border-gray-200 bg-white/95 backdrop-blur-2xl ${
        isOpen ? 'translate-y-0 shadow-[0_-15px_50px_rgba(0,0,0,0.15)]' : 'translate-y-[calc(100%-48px)]' 
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* --- BARRA SUPERIOR (SIEMPRE VISIBLE) --- */}
      <div 
        className="h-[48px] max-w-7xl mx-auto px-6 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <h3 className="text-gray-900 text-lg font-bold italic tracking-tight">
            Alejandro <span className="text-blue-600">Bessi</span>
          </h3>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-3 ml-1 font-bold">
            Asesor de Seguros
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-blue-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">
          <span className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            {ChevronUp ? <ChevronUp size={14} strokeWidth={3} /> : "▲"}
          </span>
          {isOpen ? 'Cerrar' : 'Más Información'}
        </div>

        <p className="hidden md:block text-[10px] text-gray-500 font-bold">© {anioActual}</p>
      </div>

      {/* --- CONTENIDO DESPLEGABLE (INTERIOR) --- */}
      <div className={`max-w-7xl mx-auto px-6 pt-10 pb-12 border-t border-gray-100 transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Perfil */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-black italic text-xl tracking-tight">Alejandro Bessi</h4>
            <p className="text-sm leading-relaxed text-gray-700 font-medium"> 
              Asesoramiento profesional y personalizado con respaldo de las mejores compañías del país. Protegemos lo que más valorás con honestidad y rapidez.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://wa.me/5491178293424" className="text-gray-500 hover:text-green-600 transition-colors">
                {MessageCircle && <MessageCircle size={22} />}
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
                {Instagram && <Instagram size={22} />}
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
                {Linkedin && <Linkedin size={22} />}
              </a>
            </div>
          </div>

          {/* Seguros */}
          <div>
            <h4 className="text-gray-900 font-black mb-6 text-[11px] uppercase tracking-[0.2em]">Coberturas</h4>
            <ul className="space-y-3 text-sm text-gray-700 font-semibold">
              <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">🚗 Vehículos y Motos</li>
              <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">🏠 Hogar y Consorcio</li>
              <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">🛡️ Vida y Accidentes</li>
              <li className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">🏢 Comercio y Pyme</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-gray-900 font-black mb-6 text-[11px] uppercase tracking-[0.2em]">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-700 font-semibold">
              <li className="flex items-center gap-2">📍 Moreno, Buenos Aires</li>
              <li className="flex items-center gap-2 text-gray-900 font-bold bg-blue-50 w-fit px-2 py-1 rounded">📞 +54 9 11 7829-3424</li>
              <li className="flex items-center gap-2 break-all hover:text-blue-600 transition-colors cursor-pointer">
                {Mail && <Mail size={16} className="text-blue-600" />} bessiseguros@gmail.com.ar
              </li>
            </ul>
          </div>

          {/* SSN y Arrepentimiento */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-black mb-6 text-[11px] uppercase tracking-[0.2em]">Institucional</h4>
            <button className="w-full py-3 px-4 border-2 border-red-200 text-red-600 text-[11px] font-black rounded-xl uppercase tracking-widest bg-red-50 hover:bg-red-100 hover:border-red-300 transition-all shadow-sm">
              Botón de Arrepentimiento
            </button>
            <div className="pt-2 border-l-2 border-gray-100 pl-4">
               <p className="text-[10px] uppercase text-gray-800 font-extrabold leading-tight">Superintendencia de Seguros</p>
               <p className="text-[10px] text-gray-500 font-medium">0800-666-8400 | ssn.gob.ar</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">
            © {anioActual} Alejandro Bessi Seguros • Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
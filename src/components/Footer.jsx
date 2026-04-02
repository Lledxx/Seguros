import React, { useState } from 'react';
import * as LucideIcons from "lucide-react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anioActual = new Date().getFullYear();
  const { Instagram, Linkedin, Mail, MessageCircle, ChevronUp, X, ShieldCheck } = LucideIcons;

  return (
    <footer 
      className={`fixed bottom-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out border-t border-gray-200 bg-white/95 backdrop-blur-2xl ${
        isOpen 
          ? 'translate-y-0 shadow-[0_-15px_50px_rgba(0,0,0,0.15)]' 
          : 'translate-y-[calc(100%-48px)]' 
      }`}
    >
      {/* --- BARRA SUPERIOR (SIEMPRE VISIBLE) --- */}
      <div 
        className="h-[48px] max-w-7xl mx-auto px-6 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <h3 className="text-gray-900 text-base md:text-lg font-bold italic tracking-tight">
            Alejandro <span className="text-blue-600">Bessi</span>
          </h3>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-3 ml-1 font-bold">
            Productor Asesor de Seguros
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-blue-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">
          {isOpen ? (
            <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
              <X size={14} strokeWidth={3} /> CERRAR
            </span>
          ) : (
            <span className="flex items-center gap-1">
              {ChevronUp ? <ChevronUp size={14} strokeWidth={3} className="animate-bounce" /> : "▲"}
              MÁS INFORMACIÓN
            </span>
          )}
        </div>

        <p className="hidden md:block text-[10px] text-gray-400 font-bold tracking-tighter italic">Matrícula SSN: En trámite</p>
      </div>

      {/* --- CONTENIDO DESPLEGABLE --- */}
      <div className={`max-w-7xl mx-auto px-6 pt-10 pb-20 border-t border-gray-100 overflow-y-auto max-h-[80vh] md:max-h-none transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Perfil Profesional */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600">
               {ShieldCheck && <ShieldCheck size={24} />}
               <h4 className="text-gray-900 font-black italic text-xl">Alejandro Bessi</h4>
            </div>
            <p className="text-[13px] leading-relaxed text-gray-700 font-medium"> 
              <strong>Productor Asesor de Seguros</strong> dedicado a brindar tranquilidad y respaldo a familias y empresas a través de soluciones de cobertura a medida.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://wa.me/5491178293424" className="text-gray-400 hover:text-green-600 transition-colors">
                {MessageCircle && <MessageCircle size={22} />}
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                {Instagram && <Instagram size={22} />}
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                {Linkedin && <Linkedin size={22} />}
              </a>
            </div>
          </div>

          {/* Coberturas Destacadas */}
          <div>
            <h4 className="text-gray-900 font-black mb-6 text-[11px] uppercase tracking-[0.2em] border-b border-blue-100 pb-2">Coberturas</h4>
            <ul className="space-y-3 text-sm text-gray-700 font-semibold">
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">🚗 Seguros de Automotores</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">🏠 Combinado Familiar</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">🛡️ Accidentes Personales</li>
              <li className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">🏢 Riesgos Integrales</li>
            </ul>
          </div>

          {/* Datos de Contacto */}
          <div>
            <h4 className="text-gray-900 font-black mb-6 text-[11px] uppercase tracking-[0.2em] border-b border-blue-100 pb-2">Contacto Directo</h4>
            <ul className="space-y-4 text-sm text-gray-700 font-semibold">
              <li className="flex items-center gap-2">📍 Moreno, Buenos Aires</li>
              <li className="flex items-center gap-2 text-blue-700 font-bold bg-blue-50 w-fit px-2 py-1 rounded">📞 +54 9 11 7829-3424</li>
              <li className="flex items-center gap-2 break-all hover:text-blue-600 transition-colors cursor-pointer">
                {Mail && <Mail size={16} className="text-blue-600" />} bessiseguros@gmail.com.ar
              </li>
            </ul>
          </div>

          {/* Información Institucional SSN */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-black mb-6 text-[11px] uppercase tracking-[0.2em] border-b border-blue-100 pb-2">Legal</h4>
            <button className="w-full py-3 px-4 border-2 border-red-100 text-red-600 text-[11px] font-black rounded-xl uppercase tracking-widest bg-red-50 hover:bg-red-100 transition-all shadow-sm">
              Botón de Arrepentimiento
            </button>
            <div className="pt-2">
               <p className="text-[10px] uppercase text-gray-800 font-extrabold leading-tight">Superintendencia de Seguros de la Nación</p>
               <p className="text-[10px] text-gray-500 font-medium">Atención al asegurado: 0800-666-8400</p>
               <p className="text-[10px] text-gray-500 font-medium">Organismo de control: www.ssn.gob.ar</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">
            © {anioActual} Alejandro Bessi • Productor Asesor de Seguros
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
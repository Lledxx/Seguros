import React, { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer 
      className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-500 ease-out border-t border-blue-500/30 bg-[#0a192f]/95 backdrop-blur-md ${
        isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-48px)]' 
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      
      {/* BARRA SIEMPRE VISIBLE */}
      <div className="h-[48px] max-w-7xl mx-auto px-6 flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-2">
          <h3 className="text-white text-lg font-bold italic">Alejandro Bessi</h3>
          {/* AQUÍ VOLVIÓ: Asesor de Seguros */}
          <span className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider border-l border-gray-700 pl-2 ml-1 hidden sm:inline">
            Asesor de Seguros
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-[10px]">
          <span className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▲
          </span>
          {isOpen ? 'Cerrar' : 'Más Información'}
        </div>

        <p className="hidden md:block opacity-40 text-[10px] text-gray-400">© {new Date().getFullYear()}</p>
      </div>

      {/* CONTENIDO DESPLEGABLE COMPLETO */}
      <div className={`max-w-7xl mx-auto px-6 pt-8 pb-10 border-t border-gray-800 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Columna 1: Branding y Redes */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <h3 className="text-white text-xl font-bold italic">Alejandro Bessi</h3>
              <span className="text-gray-500 text-[10px] uppercase">Asesor de Seguros</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Asesoramiento profesional y personalizado para proteger lo que más valorás.
            </p>
            <div className="flex space-x-4 pt-2 text-2xl">
              <a href="#" title="WhatsApp" className="hover:opacity-80 transition-opacity">💬</a>
              <a href="#" title="Instagram" className="hover:opacity-80 transition-opacity">📸</a>
              <a href="#" title="LinkedIn" className="hover:opacity-80 transition-opacity">💼</a>
            </div>
          </div>

          {/* Columna 2: Seguros */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-blue-500 pb-2 w-fit">Nuestros Seguros</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">🚗 Seguros de Vehículos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">🏠 Seguros de Hogar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">🚜 Seguros de Campo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">🛡️ Vida y Accidentes</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-blue-500 pb-2 w-fit">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">📍 Moreno / Buenos Aires</li>
              <li className="flex items-center gap-2">📞 +54 9 11 7829-3424</li>
              <li className="flex items-center gap-2">✉️ bessiseguros@gmail.com.ar</li>
            </ul>
          </div>

          {/* Columna 4: Legal / SSN */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4 border-b border-blue-500 pb-2 w-fit">Legal</h4>
            <button className="w-full py-2 px-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all text-[10px] font-bold rounded uppercase tracking-wider bg-red-500/5">
              Botón de Arrepentimiento
            </button>
            <div className="pt-2">
               <p className="text-[10px] uppercase text-gray-500 font-semibold">Superintendencia de Seguros de la Nación</p>
               <p className="text-[10px] text-gray-500 italic">0800-666-8400 | www.ssn.gob.ar</p>
            </div>
          </div>
        </div>

        {/* Defensa del Consumidor */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-[10px] text-gray-600">
          <p>© {new Date().getFullYear()} Alejandro Bessi Seguros - Todos los derechos reservados.</p>
          <p className="mt-1 underline cursor-pointer">Defensa del Consumidor: Para reclamos ingrese aquí.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
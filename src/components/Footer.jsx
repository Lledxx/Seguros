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
      
      <div className="h-[48px] max-w-7xl mx-auto px-6 flex justify-between items-center cursor-pointer">
        <div className="flex items-center gap-2">
          <h3 className="text-white text-lg font-bold italic">Alejandro Bessi</h3>
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

      <div className={`max-w-7xl mx-auto px-6 pt-6 pb-10 border-t border-gray-800 transition-opacity duration-300 overflow-y-auto max-h-[60vh] md:max-h-none ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <h3 className="text-white text-xl font-bold italic">Alejandro Bessi</h3>
              <span className="text-gray-500 text-[10px] uppercase">Asesor de Seguros</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Asesoramiento profesional y personalizado para proteger lo que más valorás.
            </p>
            <div className="flex space-x-4 pt-2 text-2xl">
              <a href="#" className="hover:opacity-80">💬</a>
              <a href="#" className="hover:opacity-80">📸</a>
              <a href="#" className="hover:opacity-80">💼</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-blue-500 pb-2 w-fit text-sm">Nuestros Seguros</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>🚗 Seguros de Vehículos</li>
              <li>🏠 Seguros de Hogar</li>
              <li>🚜 Seguros de Campo</li>
              <li>🛡️ Vida y Accidentes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-blue-500 pb-2 w-fit text-sm">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍 Moreno / Buenos Aires</li>
              <li>📞 +54 9 11 7829-3424</li>
              <li>✉️ bessiseguros@gmail.com.ar</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4 border-b border-blue-500 pb-2 w-fit text-sm">Legal</h4>
            <button className="w-full py-2 px-4 border border-red-500 text-red-500 text-[10px] font-bold rounded uppercase tracking-wider bg-red-500/5">
              Botón de Arrepentimiento
            </button>
            <div className="pt-2">
               <p className="text-[10px] uppercase text-gray-500 font-semibold leading-tight">Superintendencia de Seguros de la Nación</p>
               <p className="text-[10px] text-gray-500 italic">0800-666-8400 | www.ssn.gob.ar</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-[10px] text-gray-600">
          <p>© {new Date().getFullYear()} Alejandro Bessi Seguros.</p>
          <p className="mt-1 underline">Defensa del Consumidor: Para reclamos ingrese aquí.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
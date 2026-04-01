import React, { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer 
      className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-700 ease-in-out border-t border-blue-500/30 ${
        isOpen ? 'bg-[#0a192f]/95 backdrop-blur-xl' : 'bg-[#0a192f]/80 backdrop-blur-md'
      }`}
      // En PC se abre al pasar el mouse, en Celu al tocarlo
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      
      {/* 1. BARRA SIEMPRE VISIBLE (Muy fina y elegante) */}
      <div className="max-w-7xl mx-auto py-3 px-6 flex justify-between items-center text-[10px] md:text-xs text-gray-400 cursor-pointer">
        <div className="flex items-center gap-2">
          <span className="text-blue-400 font-bold italic">Alejandro Bessi</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">Asesor de Seguros</span>
        </div>
        
        {/* Indicador visual de que se abre */}
        <div className="flex items-center gap-1 text-blue-400 font-bold uppercase tracking-widest text-[9px]">
          {isOpen ? 'Cerrar' : 'Más Información'}
          <span className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▲
          </span>
        </div>

        <p className="opacity-60">© {new Date().getFullYear()}</p>
      </div>

      {/* 2. CONTENIDO DESPLEGABLE (Original con 4 columnas) */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-[80vh] md:max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-8 border-t border-white/5">
          
          {/* Redes */}
          <div className="space-y-3">
            <h3 className="text-white text-lg font-bold italic">Alejandro Bessi</h3>
            <p className=" text-white text-xs opacity-70">Protección profesional personalizada.</p>
            <div className="flex space-x-4 text-xl">
              <a href="#">💬</a><a href="#">📸</a><a href="#">💼</a>
            </div>
          </div>

          {/* Seguros (Solo se ve en PC o si está abierto) */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-sm border-b border-blue-500 pb-1 w-fit">Seguros</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-[11px] text-gray-400">
              <li>🚗 Vehículos</li>
              <li>🏠 Hogar</li>
              <li>🚜 Campo</li>
              <li>🛡️ Vida</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-sm border-b border-blue-500 pb-1 w-fit">Contacto</h4>
            <ul className="space-y-2 text-[11px] text-gray-400">
              <li>📍 Moreno / Bs. As.</li>
              <li>📞 +54 9 11 7829-3424</li>
              <li>✉️ bessiseguros@gmail.com.ar</li>
            </ul>
          </div>

          {/* Legal / Arrepentimiento */}
          <div className="space-y-3 pt-4 md:pt-0">
             <button className="w-full py-2 border border-red-500/60 text-red-400 hover:bg-red-500 hover:text-white transition-all text-[10px] font-bold rounded uppercase">
              Botón de Arrepentimiento
            </button>
            <div className=" text-white opacity-50 text-[14px]">
               <p>SSN: 0800-666-8400 | www.ssn.gob.ar</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
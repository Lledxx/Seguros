import React from 'react';

const Footer = () => {
  return (
    /* La clase 'group' permite que el footer reaccione cuando pasas el mouse */
    <footer className="fixed bottom-0 left-0 w-full z-50 group transition-all duration-500 ease-in-out">
      
      {/* 1. LA BARRA VISIBLE SIEMPRE (Muy fina) */}
      <div className="bg-[#0a192f]/90 backdrop-blur-md border-t border-blue-500/30 py-2 px-6 flex justify-between items-center text-[10px] text-gray-400">
        <p className="font-bold italic text-white opacity-80">Alejandro Bessi Seguros</p>
        <p className="animate-pulse">▲ Desliza para ver más información</p>
        <p>© {new Date().getFullYear()}</p>
      </div>

      {/* 2. EL CONTENIDO QUE SE DESPLIEGA (Oculto por defecto) */}
      <div className="bg-[#0a192f]/95 backdrop-blur-xl max-h-0 group-hover:max-h-[400px] overflow-hidden transition-all duration-500 ease-in-out px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-white/5">
          
          {/* Columna 1: Redes */}
          <div className="space-y-3">
            <h3 className="text-white text-lg font-bold italic">Alejandro Bessi</h3>
            <p className="text-xs opacity-70">Protección profesional y personalizada.</p>
            <div className="flex space-x-4 pt-1 text-xl">
              <a href="#" className="hover:scale-110 transition-transform">💬</a>
              <a href="#" className="hover:scale-110 transition-transform">📸</a>
              <a href="#" className="hover:scale-110 transition-transform">💼</a>
            </div>
          </div>

          {/* Columna 2: Seguros */}
          <div className="hidden md:block">
            <h4 className="text-white font-semibold mb-3 border-b border-blue-500 pb-1 w-fit text-sm">Seguros</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>🚗 Vehículos</li>
              <li>🏠 Hogar</li>
              <li>🚜 Campo</li>
              <li>🛡️ Vida</li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-3 border-b border-blue-500 pb-1 w-fit text-sm">Contacto</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>📍 Moreno / Bs. As.</li>
              <li>📞 +54 9 11 7829-3424</li>
              <li>✉️ bessiseguros@gmail.com.ar</li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold mb-3 border-b border-blue-500 pb-1 w-fit text-sm">Legal</h4>
            <button className="w-full py-2 border border-red-500/60 text-red-400 hover:bg-red-500 hover:text-white transition-all text-[9px] font-bold rounded uppercase">
              Arrepentimiento
            </button>
            <div className="opacity-50 text-[9px]">
               <p>SSN: 0800-666-8400</p>
               <p>www.ssn.gob.ar</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-300 pt-12 pb-6 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Columna 1: Branding y Redes */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bold italic">Alejandro Bessi</h3>
          <p className="text-sm leading-relaxed">
            Asesoramiento profesional y personalizado para proteger lo que más valorás.
          </p>
          <div className="flex space-x-4 pt-2 text-2xl">
            <a href="#" title="WhatsApp" className="hover:opacity-80">💬</a>
            <a href="#" title="Instagram" className="hover:opacity-80">📸</a>
            <a href="#" title="LinkedIn" className="hover:opacity-80">💼</a>
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
          
          <button className="w-full py-2 px-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all text-[10px] font-bold rounded uppercase tracking-wider">
            Botón de Arrepentimiento
          </button>

          <div className="pt-2">
             <p className="text-[10px] uppercase text-gray-500">Superintendencia de Seguros de la Nación</p>
             <p className="text-[10px] text-gray-500 italic">0800-666-8400 | www.ssn.gob.ar</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-[10px] text-gray-600">
        <p>© {new Date().getFullYear()} Alejandro Bessi Seguros - Todos los derechos reservados.</p>
        <p className="mt-1 underline cursor-pointer">Defensa del Consumidor: Para reclamos ingrese aquí.</p>
      </div>
    </footer>
  );
};

export default Footer;
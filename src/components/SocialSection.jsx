import React from 'react';

export default function SocialSection() {
  const email = "bessiseguros@gmail.com";

  return (
    <section className="py-20 bg-[#0a192f] text-white overflow-hidden relative">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">
          Mantenete <span className="text-blue-400">Protegido</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
          Seguinos para conocer consejos de prevención, novedades del mercado y estar siempre en contacto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Instagram - ACTUALIZADO CON TU USUARIO */}
          <a 
            href="https://instagram.com/bessi.seguros" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-500 shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl">Instagram</h3>
            <p className="text-sm text-gray-500 group-hover:text-white/80">@bessi.seguros</p>
          </a>

          {/* Email - NUEVO (Reemplaza a LinkedIn) */}
          <a 
            href={`mailto:${email}`} 
            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 transition-all duration-500 shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl">Email</h3>
            <p className="text-[11px] md:text-sm text-gray-500 group-hover:text-white/80">{email}</p>
          </a>

          {/* WhatsApp Directo */}
          <a 
            href="https://wa.me/5491178293424" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-green-600 transition-all duration-500 shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.4-16.4-14.7-27.5-32.8-30.7-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl">WhatsApp Business</h3>
            <p className="text-sm text-gray-400 group-hover:text-white/80">Atención Inmediata</p>
          </a>

        </div>
      </div>
    </section>
  );
}
import React from 'react';


export default function TrustLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm font-semibold mb-8">
          Trabajamos con las mejores compañías
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">

          <img src="/img/expertaseguros.png" alt="Experta Seguros" className="h-12 w-auto" />
          <img src="/img/fedpatlogo.png" alt="Federacion Patronal" className="h-12 w-auto" />
          <img src="/img/mercantil.png" alt="Mercantil Andina" className="h-12 w-auto" />
          <img src="/img/sancristobal.png" alt="San Cristobal" className="h-12 w-auto" />
        </div>
      </div>
    </section>
  );
}
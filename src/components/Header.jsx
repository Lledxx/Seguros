

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center p-4 md:p-6">
      {/* EL FONDO: Ahora con un degradado sutil para que el logo blanco siempre resalte */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md z-[-1]"></div>
      
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
         <img 
           src="/img/logo.png"
            alt="Logo Alejandro Bessi" 
            /* CAMBIOS CLAVE:
               1. Aumentamos el alto a h-16 (móvil) y h-24 (PC) para que sea grande.
               2. Eliminamos clases que lo achicaban.
               3. Usamos shadow-black para darle profundidad.
            */
            className="h-14 md:h-24 w-auto object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" 
            style={{ 
              imageRendering: 'auto',
              filter: 'contrast(1.1)' // Le da un poco más de fuerza al blanco
            }} 
          />
        </div>
        
        {/* Aquí podrías poner un menú si quisieras, por ahora queda el logo libre */}
      </div>
    </header>
  );
}
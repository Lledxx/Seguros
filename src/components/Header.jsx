export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center p-4 md:p-6">
      {/* Overlay con Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md z-[-1]"></div>
      
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="block"> 
            <img 
              src="/img/logo.png"
              alt="Logo Alejandro Bessi" 
              // Usamos max-h para que nunca exceda el contenedor y w-auto para mantener proporción
              className="h-14 md:h-24 w-auto object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] transition-all duration-300" 
              style={{ 
                imageRendering: '-webkit-optimize-contrast',
                filter: 'contrast(1.1)' 
              }} 
            />
          </a>
        </div>
        
        {/* Aquí iría tu menú de navegación si lo agregas luego */}
      </div>
    </header>
  );
}
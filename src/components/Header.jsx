
import logo from '../img/logo.png'; 

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-5 shadow-md flex items-center justify-between">
    

      <div className="flex-shrink-0 ml-4">
        <img 
          src={logo} 
          alt="Logo Alejandro Bessi" 
          className="h-10 w-auto md:h-14 lg:h-16 transition-all duration-300 object-contain" 
        />
      </div>
    </header>
  );
}
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-orange-600">Bretas Serviços e Construções</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors">Galeria</a>
              <a href="#clientes" className="text-gray-700 hover:text-orange-600 transition-colors">Serviços</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
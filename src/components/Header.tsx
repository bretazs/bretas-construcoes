import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-end space-x-8">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

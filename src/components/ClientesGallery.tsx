import React from 'react';

const images = [
  { id: 1, url: '/vilma.jpg', alt: 'Projeto 13' },
  { id: 2, url: '/fundo.jpg', alt: 'Projeto 2' },
  { id: 3, url: '/3.png', alt: 'Projeto 3' },
  { id: 4, url: '/4.png', alt: 'Projeto 4' },
  { id: 5, url: '/6.png', alt: 'Projeto 5' },
  { id: 5, url: '/7.png', alt: 'Projeto 5' },
  { id: 5, url: '/8.png', alt: 'Projeto 5' },
  { id: 5, url: '/9.png', alt: 'Projeto 5' },

];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 max-w-screen-lg mx-auto">
      {images.map((image) => (
        <div 
          key={image.id}
          className="group relative overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-32 object-cover transform group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}
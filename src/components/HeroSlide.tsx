import React from 'react';

interface HeroSlideProps {
  title: string;
  description: string;
  backgroundImage: string;
  isActive: boolean;
}

export default function HeroSlide({ title, description, backgroundImage, isActive }: HeroSlideProps) {
  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {description}
            </p>
            <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors duration-300">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
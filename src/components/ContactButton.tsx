import React from 'react';

interface ContactButtonProps {
  phoneNumber: string;
  message: string;
}

export default function ContactButton({ phoneNumber, message }: ContactButtonProps) {
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber.replace(/\D/g, '')}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm.031 18c-1.498 0-2.96-.404-4.242-1.172l-3.789.994 1.025-3.742A8.938 8.938 0 014 12c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9z"/>
      </svg>
      <span>Iniciar Conversa</span>
    </button>
  );
}
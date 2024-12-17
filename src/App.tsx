import React from 'react';
import Navbar from './components/Navbar';
import ContactButton from './components/ContactButton';
import { Phone, Mail, MapPin } from 'lucide-react';

const images = [
  { id: 1, url: '/fundo.jpg', alt: 'Projeto 1' },
  { id: 2, url: '/2.jpg', alt: 'Projeto 2' },
  { id: 3, url: '/3.png', alt: 'Projeto 3' },
  { id: 4, url: '/4.png', alt: 'Projeto 4' },
  { id: 5, url: '/6.png', alt: 'Projeto 5' },
  { id: 6, url: '/7.png', alt: 'Projeto 6' },
  { id: 7, url: '/13.png', alt: 'Projeto 7' },
  { id: 8, url: '/9.png', alt: 'Projeto 8' },
  { id: 9, url: '/10.png', alt: 'Projeto 9' },
  { id: 10, url: '/12.jpg', alt: 'Projeto 10' },
];

const images2 = [
  { id: 1, url: '/vilma.png', alt: 'Vilma' },
  { id: 2, url: '/anglogold.png', alt: 'AngloGold' },
  { id: 3, url: '/braspress.png', alt: 'Braspress' },
  { id: 4, url: '/laut.png', alt: 'Laut' },
  { id: 5, url: '/pirata.png', alt: 'Pirata' },
  { id: 6, url: '/vale.png', alt: 'Vale' },
  { id: 7, url: '/wals.png', alt: 'Wäls' },
  { id: 8, url: '/bunge.png', alt: 'Bunge' },
];

function App() {
  const whatsappNumber = '+5531991636342';
  const defaultMessage =
    'Olá! Gostaria de saber mais sobre os serviços da Bretas Construções.';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 -z-10"></div>
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900 space-y-8 text-left">
  <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-orange-500">
    Excelência em
    <br />
    <span className="text-orange-600">Construção Civil</span>
    <br />
    <span className="text-orange-700">e Manutenção Industrial</span>
  </h1>
  <p className="text-lg lg:text-xl text-gray-700">
    Transformamos os seus sonhos em realidade com qualidade, compromisso e principalmente segurança!
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="#contact"
      className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center shadow-md"
    >
      Solicitar Orçamento
    </a>
    <a
      href="#gallery"
      className="inline-block bg-gray-200 hover:bg-gray-300 text-orange-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center shadow-md"
    >
      Ver Projetos
    </a>
  </div>
</div>
              {/* Right Column */}
              <div className="relative">
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/engenharia.png"
                    alt="Engenharia"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Galeria */}
        <div className="container mx-auto px-4" id="gallery">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
            Galeria
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-12 max-w-screen-lg mx-auto">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md bg-white"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="clientes">
  <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
    Nossos Clientes
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-4 max-w-screen-lg mx-auto justify-items-center group-hover:scale-105 transition-transform duration-300">
    {images2.map((image2, index) => (
      <div
        key={index}
        className="flex items-center justify-center overflow-hidden rounded-lg shadow-md bg-white p-6 group-hover:scale-105 transition-transform duration-300"
        style={{ height: '120px', width: '200px' }}
      >
        <img
          src={image2.url}
          alt={image2.alt}
          className="object-contain h-full max-h-16 w-autogroup-hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
    {/* Adicionando divs vazias para centralizar as últimas imagens */}
    {images2.length % 4 !== 0 &&
      Array(4 - (images2.length % 4))
        .fill('')
        .map((_, idx) => (
          <div
            key={`empty-${idx}`}
            className="hidden lg:block"
            style={{ height: '120px', width: '200px' }}
          ></div>
        ))}
  </div>
</section>



      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Entre em Contato
              </h2>
              <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos prontos para atender suas necessidades
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Informações de Contato
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="h-6 w-6 text-orange-500" />
                        <span className="text-gray-600 text-lg">
                          (31)99163-6342
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="h-6 w-6 text-orange-500" />
                        <span className="text-gray-600 text-lg">
                          contato@bretas.com.br
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Fale Conosco
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Clique no botão abaixo para iniciar uma conversa pelo
                      WhatsApp
                    </p>
                    <ContactButton
                      phoneNumber={whatsappNumber}
                      message={defaultMessage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                  Bretas Serviços e Construções
                </h3>
                <p className="text-gray-400">
                Transformamos os seus sonhos em realidade com qualidade, compromisso e principalmente segurança!
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gallery"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Galeria
                    </a>
                  </li>
                  <li>
                    <a
                      href="#clientes"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>(31)99163-6342</li>
                  <li>contato@bretas.com.br</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Bretas Serviços e Construções.
                Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

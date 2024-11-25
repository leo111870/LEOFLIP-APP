import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import LicenseTypes from './components/LicenseTypes';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import Quiz from './components/Quiz';
import WelcomeModal from './components/WelcomeModal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <WelcomeModal />
      <Hero />
      <Services />
      <LicenseTypes />
      <Quiz />
      <Blog />
      <section className="py-24 bg-dark-800" id="contatti">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contattaci</h2>
            <p className="text-xl text-gray-300">
              Siamo qui per aiutarti nel tuo percorso verso la patente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ContactForm />

            <div className="bg-dark-700 p-8 rounded-xl shadow-lg">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Telefono & WhatsApp</h3>
                    <p className="text-gray-300">+39 359 815 3475</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Email</h3>
                    <a href="mailto:contatto@patentediguidaora.com" className="text-gray-300 hover:text-primary-500 transition-colors">
                      contatto@patentediguidaora.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white">Indirizzo</h3>
                    <p className="text-gray-300">Via Roma 123, Milano</p>
                  </div>
                </div>

                <div className="border-t border-dark-600 pt-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">Orari di Apertura</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Lunedì - Venerdì</span>
                      <span>9:00 - 19:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sabato</span>
                      <span>9:00 - 13:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domenica</span>
                      <span>Chiuso</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark-900 text-white py-12 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Scuola Guida Italiana</h3>
              <p className="text-gray-400">
                La tua scelta affidabile per ottenere la patente di guida in Italia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contatti</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Telefono: +39 359 815 3475</li>
                <li>WhatsApp: +39 359 815 3475</li>
                <li>Email: <a href="mailto:contatto@patentediguidaora.com" className="hover:text-primary-500 transition-colors">contatto@patentediguidaora.com</a></li>
                <li>Indirizzo: Via Roma 123, Milano</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Orari</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lun - Ven: 9:00 - 19:00</li>
                <li>Sabato: 9:00 - 13:00</li>
                <li>Domenica: Chiuso</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Scuola Guida Italiana. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
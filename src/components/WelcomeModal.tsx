import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { X } from 'lucide-react';

const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedTerms = Cookies.get('acceptedTerms');
    if (!hasAcceptedTerms) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('acceptedTerms', 'true', { expires: 365 });
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
              <button
                onClick={handleAccept}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Benvenuto nella Scuola Guida Italiana
                </h2>
                <p className="text-gray-600">
                  La tua scelta affidabile per ottenere la patente di guida
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Termini di Utilizzo
                  </h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      Utilizzando questo sito web, accetti i seguenti termini:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Tutti i servizi sono soggetti a disponibilità</li>
                      <li>I prezzi possono variare senza preavviso</li>
                      <li>Le informazioni fornite saranno trattate con riservatezza</li>
                      <li>Ci riserviamo il diritto di modificare i servizi offerti</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Privacy e Cookie
                  </h3>
                  <p className="text-sm text-gray-600">
                    Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
                    Continuando a utilizzare questo sito, accetti l'uso dei cookie in conformità 
                    con la nostra politica sulla privacy.
                  </p>
                </div>
              </div>

              <button
                onClick={handleAccept}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Accetto i Termini e Condizioni
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
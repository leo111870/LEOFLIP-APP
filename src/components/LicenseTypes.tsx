import React from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Bike, Bus } from 'lucide-react';

const licenses = [
  {
    icon: <Car className="h-8 w-8" />,
    type: "Patente B",
    description: "Per auto e veicoli fino a 3.5 tonnellate",
    requirements: [
      "Età minima: 18 anni",
      "Visita medica",
      "Documenti d'identità validi"
    ],
    duration: "4-8 settimane",
    price: "da €1500"
  },
  {
    icon: <Bike className="h-8 w-8" />,
    type: "Patente A",
    description: "Per motocicli e scooter",
    requirements: [
      "Età minima: 16-24 anni (secondo categoria)",
      "Visita medica",
      "Documenti d'identità validi"
    ],
    duration: "3-6 settimane",
    price: "da €1200"
  },
  {
    icon: <Truck className="h-8 w-8" />,
    type: "Patente C",
    description: "Per camion e veicoli pesanti",
    requirements: [
      "Età minima: 21 anni",
      "Patente B",
      "Visita medica speciale"
    ],
    duration: "6-10 settimane",
    price: "da €2000"
  },
  {
    icon: <Bus className="h-8 w-8" />,
    type: "Patente D",
    description: "Per autobus e mezzi di trasporto passeggeri",
    requirements: [
      "Età minima: 24 anni",
      "Patente B",
      "Visita medica professionale"
    ],
    duration: "8-12 settimane",
    price: "da €2500"
  }
];

const LicenseTypes: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="patenti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tipi di Patente</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo assistenza per l'ottenimento di tutte le categorie di patente e la conversione di patenti estere
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {licenses.map((license, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 text-white rounded-lg">
                  {license.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{license.type}</h3>
                  <p className="text-gray-600">{license.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requisiti:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {license.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-sm text-gray-500">Durata</span>
                    <p className="font-semibold text-gray-900">{license.duration}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Prezzo</span>
                    <p className="font-semibold text-gray-900">{license.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversione Patenti Estere</h3>
          <p className="text-gray-600 mb-6">
            Offriamo assistenza completa per la conversione di patenti estere in patenti italiane. Il processo include:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              Verifica validità patente originale
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              Traduzione documenti
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              Pratiche amministrative
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              Assistenza completa iter burocratico
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default LicenseTypes;
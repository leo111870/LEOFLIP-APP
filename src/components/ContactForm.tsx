import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    tipoPatente: 'B',
    citta: '',
    messaggio: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formsubmit.co/contatto@patentediguidaora.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nuova richiesta da ${formData.nome} ${formData.cognome}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        alert('Messaggio inviato con successo!');
        setFormData({
          nome: '',
          cognome: '',
          email: '',
          telefono: '',
          tipoPatente: 'B',
          citta: '',
          messaggio: ''
        });
      } else {
        throw new Error('Errore nell\'invio del messaggio');
      }
    } catch (error) {
      alert('Si è verificato un errore. Per favore riprova più tardi.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-dark-800 rounded-xl shadow-xl p-8 border border-dark-700"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
            Nome *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
          />
        </div>

        <div>
          <label htmlFor="cognome" className="block text-sm font-medium text-gray-300 mb-2">
            Cognome *
          </label>
          <input
            type="text"
            id="cognome"
            name="cognome"
            required
            value={formData.cognome}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
            Telefono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
          />
        </div>

        <div>
          <label htmlFor="tipoPatente" className="block text-sm font-medium text-gray-300 mb-2">
            Tipo di Patente *
          </label>
          <select
            id="tipoPatente"
            name="tipoPatente"
            required
            value={formData.tipoPatente}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
          >
            <option value="A">Patente A</option>
            <option value="B">Patente B</option>
            <option value="C">Patente C</option>
            <option value="D">Patente D</option>
          </select>
        </div>

        <div>
          <label htmlFor="citta" className="block text-sm font-medium text-gray-300 mb-2">
            Città *
          </label>
          <input
            type="text"
            id="citta"
            name="citta"
            required
            value={formData.citta}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="messaggio" className="block text-sm font-medium text-gray-300 mb-2">
          Messaggio *
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          value={formData.messaggio}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
        ></textarea>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
        >
          <Send className="h-5 w-5" />
          Invia Messaggio
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-400 text-center">
        * Campi obbligatori
      </p>
    </motion.form>
  );
};

export default ContactForm;
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/driving-school-hero.jpg"
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/539002011/rendition/1080p/file.mp4?loc=external" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Comprare La Patente Di Guida
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Nel corso degli anni, la nostra rete di agenti che aiutano a ottenere patenti di guida e altri documenti registrati non fa che migliorare.
          </p>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
            Comprare la patente di guida in Italia senza esami teorici né esami pratici. Siamo consapevoli delle difficoltà che tante persone incontrano negli esami teorici.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
            <a
              href="#contatti"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Scopri di Più
            </a>
            <a
              href="https://wa.me/393598153475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-12 w-12 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
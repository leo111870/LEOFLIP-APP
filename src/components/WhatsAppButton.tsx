import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Ciao! Vorrei avere maggiori informazioni sulla patente di guida.");
  const whatsappUrl = `https://wa.me/393598153475?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-6 py-4 rounded-full font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline">Chatta con noi</span>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
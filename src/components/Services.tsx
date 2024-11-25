import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Car, Users, Award, Clock, Shield } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  delay: number;
}> = ({ icon, title, description, image, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute top-4 right-4 bg-blue-600 p-3 rounded-full shadow-lg">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Book className="h-6 w-6 text-white" />,
      title: "Corsi Teorici Avanzati",
      description: "Lezioni interattive con materiali didattici moderni e simulazioni digitali",
      image: "/images/theory-class.jpg"
    },
    {
      icon: <Car className="h-6 w-6 text-white" />,
      title: "Guide Pratiche Personalizzate",
      description: "Istruttori certificati e veicoli di ultima generazione per un'esperienza ottimale",
      image: "/images/driving-lesson.jpg"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Supporto Continuo",
      description: "Assistenza dedicata e monitoraggio dei progressi durante tutto il percorso",
      image: "/images/support.jpg"
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Certificazioni Garantite",
      description: "Preparazione completa per tutte le categorie di patente",
      image: "/images/certification.jpg"
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Orari Flessibili",
      description: "Programmi adattabili alle tue esigenze e disponibilità",
      image: "/images/flexible-hours.jpg"
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Sicurezza Prioritaria",
      description: "Focus sulla guida sicura e responsabile con tecniche moderne",
      image: "/images/safety.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="servizi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi per garantire il tuo successo nel conseguimento della patente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
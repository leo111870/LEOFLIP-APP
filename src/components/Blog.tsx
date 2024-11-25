import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Come Prepararsi all'Esame Teorico della Patente",
    excerpt: "Consigli e strategie per superare con successo l'esame teorico della patente di guida...",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    date: "15 Nov 2024",
    readTime: "5 min"
  },
  {
    title: "Le Nuove Normative per la Guida in Italia",
    excerpt: "Aggiornamenti sulle ultime modifiche al codice della strada e come influenzano i conducenti...",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    date: "12 Nov 2024",
    readTime: "4 min"
  },
  {
    title: "Guida Sicura: Consigli per Neopatentati",
    excerpt: "Le migliori pratiche per i nuovi conducenti per garantire una guida sicura e responsabile...",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    date: "10 Nov 2024",
    readTime: "6 min"
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Articoli e novità sul mondo della guida e delle patenti
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Leggi di più
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users } from 'lucide-react';

const Hero = () => {
  const heroImage = "https://www.stadev.fr/IMG/Femme%20tient%20ventre%20champ.jpeg"

  const stats = [
    { icon: Users, number: "500+", label: "Naissances accompagnées" },
    { icon: Heart, number: "15+", label: "Années d'expérience" },
    { icon: Star, number: "4.9/5", label: "Note moyenne" }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/60 via-sage-800/40 to-transparent z-10"></div>
        <img
          src={heroImage}
          alt="Maternité paisible"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Accompagner la
                <span className="block text-warm-300">
                  naissance naturellement
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-warm-100 leading-relaxed max-w-2xl"
              >
                Sage-femme libérale passionnée, j'accompagne les femmes et les couples 
                dans leur parcours de maternité avec bienveillance et expertise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Prendre rendez-vous
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card text-white hover:text-sage-800 px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/90 transition-all duration-300 text-center"
                >
                  Découvrir mes services
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className="w-6 h-6 text-warm-300" />
                    </div>
                    <div className="font-display text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-warm-200 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right side content or additional elements */}
          <div className="lg:flex lg:justify-center lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="glass-card p-8 rounded-3xl max-w-md mx-auto lg:mx-0"
            >
              <h3 className="font-display text-2xl font-semibold text-sage-800 mb-4">
                Pourquoi choisir un suivi personnalisé ?
              </h3>
              <ul className="space-y-3 text-sage-700">
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Accompagnement sur mesure selon vos besoins</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Respect de vos choix et de votre projet de naissance</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Disponibilité et écoute bienveillante</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
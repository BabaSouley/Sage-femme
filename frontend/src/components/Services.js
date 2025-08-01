import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Baby, Home, Users, Clock, Shield } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      title: "Suivi de grossesse",
      description: "Accompagnement complet pendant votre grossesse avec consultations personnalisées, surveillance médicale et préparation à la naissance.",
      icon: Heart,
      image: "https://www.stadev.fr/IMG/Coeur sur ventre.jpeg",
      features: ["Consultations mensuelles", "Échographies", "Dépistage prénatal", "Préparation à la naissance"]
    },
    {
      title: "Accouchement à domicile",
      description: "Accompagnement pour un accouchement naturel dans le confort et l'intimité de votre foyer, en toute sécurité.",
      icon: Home,
      image: "https://www.stadev.fr/IMG/femme porte bébé.jpeg",
      features: ["Préparation personnalisée", "Matériel médical fourni", "Accompagnement continu", "Sécurité médicale"]
    },
    {
      title: "Soins postpartum",
      description: "Suivi attentif après la naissance pour vous accompagner dans cette période d'adaptation et favoriser votre récupération.",
      icon: Baby,
      image: "https://www.stadev.fr/IMG/femme porte bébé caché.jpeg",
      features: ["Visites à domicile", "Allaitement maternel", "Soins du nouveau-né", "Soutien psychologique"]
    }
  ];

  const additionalServices = [
    { icon: Users, title: "Préparation en couple", description: "Séances dédiées pour préparer l'arrivée de bébé ensemble" },
    { icon: Clock, title: "Disponibilité 24h/7j", description: "Je suis disponible quand vous avez besoin de moi" },
    { icon: Shield, title: "Sécurité médicale", description: "Matériel médical professionnel et protocoles de sécurité" }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-warm-50 to-sage-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl lg:text-5xl font-bold text-sage-800 mb-6"
          >
            Services d'accompagnement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed"
          >
            Un accompagnement complet et personnalisé pour chaque étape de votre maternité, 
            du début de la grossesse aux premiers mois avec votre bébé.
          </motion.p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="glass-card rounded-3xl overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 via-sage-800/20 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-semibold text-sage-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sage-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sage-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-6 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      En savoir plus
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-100 group-hover:bg-primary-200 p-4 rounded-full transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h4 className="font-display text-xl font-semibold text-sage-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-sage-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
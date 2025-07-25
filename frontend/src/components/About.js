import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const backgroundImage = "https://images.unsplash.com/photo-1457342813143-a1ae27448a82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcmVnbmFuY3l8ZW58MHx8fHwxNzUzNDY4NjAyfDA&ixlib=rb-4.1.0&q=85";

  const qualifications = [
    {
      icon: Award,
      title: "Diplôme d'État",
      description: "Sage-femme diplômée de l'École de Sages-femmes de Lyon"
    },
    {
      icon: BookOpen,
      title: "Formation continue",
      description: "Spécialisations en haptonomie et accompagnement périnatal"
    },
    {
      icon: Heart,
      title: "Approche holistique",
      description: "Prise en compte globale de la femme et du couple"
    },
    {
      icon: Users,
      title: "Expérience reconnue",
      description: "Plus de 500 naissances accompagnées avec succès"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-sage-900/80 z-10"></div>
        <img
          src={backgroundImage}
          alt="Silhouette grossesse"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Qui suis-je ?
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 text-warm-100 leading-relaxed"
              >
                <p className="text-lg">
                  Je suis Sarah Dubois, sage-femme libérale passionnée par l'accompagnement 
                  des femmes et des familles dans leur parcours de maternité. Fort de plus de 
                  15 années d'expérience, j'ai développé une approche bienveillante et 
                  personnalisée de la périnatalité.
                </p>
                
                <p className="text-lg">
                  Ma philosophie repose sur le respect des choix de chaque femme, l'écoute 
                  active et l'accompagnement dans la bienveillance. Je crois profondément 
                  en la capacité naturelle des femmes à donner naissance et je m'efforce 
                  de créer un environnement de confiance et de sérénité.
                </p>
                
                <p className="text-lg">
                  Spécialisée dans l'accompagnement global à la naissance, je propose un 
                  suivi personnalisé qui respecte vos valeurs et vos souhaits, tout en 
                  garantissant la sécurité médicale nécessaire.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Prenons contact
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card text-white hover:text-sage-800 px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/90 transition-all duration-300 text-center"
              >
                Mes services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-display text-2xl font-semibold text-sage-800 mb-8">
                Mes qualifications
              </h3>
              
              <div className="grid gap-6">
                {qualifications.map((qual, index) => {
                  const Icon = qual.icon;
                  return (
                    <motion.div
                      key={qual.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-warm-50/50 transition-all duration-300"
                    >
                      <div className="bg-primary-100 p-3 rounded-full flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sage-800 mb-1">
                          {qual.title}
                        </h4>
                        <p className="text-sage-600 text-sm leading-relaxed">
                          {qual.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h4 className="font-display text-xl font-semibold text-sage-800 mb-4">
                Ma philosophie
              </h4>
              <blockquote className="text-sage-700 italic leading-relaxed">
                "Chaque naissance est unique et mérite d'être accompagnée avec respect, 
                bienveillance et expertise. Mon rôle est de vous guider en toute confiance 
                vers cette rencontre extraordinaire avec votre enfant."
              </blockquote>
              <cite className="block mt-4 text-primary-600 font-medium">
                — Sarah Dubois, Sage-femme
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
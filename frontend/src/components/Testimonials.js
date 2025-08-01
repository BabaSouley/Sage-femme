import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundImage = "https://www.stadev.fr/IMG/petite main bébé.jpeg";

  const testimonials = [
    {
      name: "Marie L.",
      location: "Lyon",
      rating: 5,
      text: "Angèle a été d'une présence extraordinaire pendant toute ma grossesse et mon accouchement à domicile. Sa bienveillance, son professionnalisme et sa disponibilité m'ont permis de vivre cette expérience en toute sérénité. Je recommande vivement !",
      service: "Accouchement à domicile"
    },
    {
      name: "Émilie & Thomas",
      location: "Villeurbanne",
      rating: 5,
      text: "Nous avons été accompagnés par Angèle pour notre première grossesse. Elle a su nous rassurer, nous préparer et nous donner confiance. Son approche naturelle et respectueuse nous a permis de vivre un moment magique. Merci infiniment !",
      service: "Suivi de grossesse complet"
    },
    {
      name: "Claire M.",
      location: "Caluire-et-Cuire",
      rating: 5,
      text: "Le suivi post-partum avec Angèle a été précieux. Elle m'a accompagnée dans les premiers jours avec bébé, m'aidant pour l'allaitement et répondant à toutes mes questions avec patience et expertise. Une sage-femme exceptionnelle !",
      service: "Soins postpartum"
    },
    {
      name: "Sophie R.",
      location: "Bron",
      rating: 5,
      text: "Angèle combine parfaitement compétence médicale et qualités humaines. Son écoute, sa disponibilité et son respect de nos choix ont fait toute la différence. Une expérience de naissance inoubliable grâce à son accompagnement.",
      service: "Préparation à la naissance"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-900/70 via-sage-900/60 to-primary-900/50 z-10"></div>
        <img
          src={backgroundImage}
          alt="Petits pieds de bébé"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Témoignages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-warm-100 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez les expériences de familles que j'ai eu le privilège d'accompagner 
            dans leur parcours de maternité.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 lg:p-12 rounded-3xl text-center"
              >
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-primary-400" />
                </div>

                <blockquote className="text-lg lg:text-xl text-sage-800 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-sage-800 text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sage-600 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>

                  {/* Service */}
                  <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-primary-500 scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "500+", label: "Familles accompagnées" },
            { number: "4.9/5", label: "Note moyenne" },
            { number: "15+", label: "Années d'expérience" },
            { number: "100%", label: "Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-primary-300 mb-2">
                {stat.number}
              </div>
              <div className="text-warm-200 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
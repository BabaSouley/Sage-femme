import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "Quelles sont les conditions pour un accouchement à domicile ?",
      answer: "Un accouchement à domicile nécessite une grossesse à bas risque, sans complications médicales. Je procède à une évaluation complète de votre situation lors de nos consultations prénatales. Il est important d'habiter à moins de 30 minutes d'une maternité et d'avoir un accès facile pour les services d'urgence."
    },
    {
      question: "Comment se déroule le suivi de grossesse ?",
      answer: "Le suivi comprend des consultations mensuelles jusqu'à 32 semaines, puis bi-mensuelles. Chaque consultation inclut un examen clinique, la surveillance de la croissance fœtale, des analyses si nécessaire, et nous prenons le temps de discuter de vos questions et préoccupations. Je coordonne également avec les autres professionnels si besoin."
    },
    {
      question: "Que comprend l'accompagnement post-partum ?",
      answer: "L'accompagnement post-partum inclut des visites à domicile dans les premiers jours après la naissance, le suivi de votre récupération physique et émotionnelle, l'aide à l'allaitement maternel, les soins du nouveau-né, et un soutien psychologique. Je reste disponible pour répondre à vos questions jusqu'à la fin de votre congé maternité."
    },
    {
      question: "Quels sont vos tarifs et les remboursements ?",
      answer: "Mes consultations sont facturées selon les tarifs conventionnés de la Sécurité Sociale et sont remboursées à 100%. L'accouchement à domicile peut nécessiter des dépassements d'honoraires qui peuvent être pris en charge par certaines mutuelles. Je vous fournis tous les détails lors de notre premier rendez-vous."
    },
    {
      question: "Comment préparez-vous les couples à l'accouchement ?",
      answer: "Je propose des séances de préparation personnalisées incluant des exercices de respiration, de relaxation, des positions pour l'accouchement, et l'implication du partenaire. Nous abordons aussi les aspects pratiques et émotionnels de la naissance, et j'adapte la préparation selon vos besoins spécifiques."
    },
    {
      question: "Que faire en cas d'urgence pendant l'accouchement ?",
      answer: "Je dispose de tout le matériel médical nécessaire pour gérer les urgences courantes. En cas de complication nécessitant un transfert, je vous accompagne à la maternité la plus proche. Nous établissons ensemble un plan de transfert dès le début du suivi, et je maintiens un contact avec l'équipe hospitalière."
    },
    {
      question: "À partir de quand peut-on commencer le suivi ?",
      answer: "Vous pouvez me contacter dès que vous connaissez votre grossesse. Il est idéal de débuter le suivi avant 12 semaines d'aménorrhée pour optimiser l'accompagnement. Pour l'accouchement à domicile, je recommande de prendre contact avant 20 semaines pour avoir le temps de bien préparer votre projet de naissance."
    },
    {
      question: "Travaillez-vous avec d'autres professionnels ?",
      answer: "Je travaille en réseau avec des gynécologues-obstétriciens, des échographistes, des pédiatres, des psychologues périnataux et des consultantes en lactation. Cette collaboration garantit une prise en charge globale et de qualité pour vous et votre bébé."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-to-br from-sage-50 to-warm-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-primary-100 p-4 rounded-full">
              <HelpCircle className="w-8 h-8 text-primary-600" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl lg:text-5xl font-bold text-sage-800 mb-6"
          >
            Questions fréquentes
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-sage-600 leading-relaxed"
          >
            Retrouvez ici les réponses aux questions les plus fréquemment posées 
            sur mon accompagnement et mes services.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-sage-800 pr-8 leading-relaxed">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-primary-600" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-sage-200">
                          <p className="text-sage-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-16"
        >
          <p className="text-sage-600 mb-6 text-lg">
            Vous avez d'autres questions ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contactez-moi
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
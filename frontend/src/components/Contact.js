import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'consultation',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await emailjs.send(
      'service_osxo9xq',      // Remplace par ton Service ID
      'template_5wzzrrt',     // Remplace par ton Template ID
      formData,
      'YGj1HqTkgK36XGRuY'    // Remplace par ta Public Key
    );

    console.log('Email envoyé :',result.text);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'consultation', message: '' });
    }, 3000);
  } catch (error) {
    console.error('EmailJS Error:', error);
    alert("Une erreur est survenue. Veuillez réessayer plus tard.");
  }
};

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content:  <a href="tel:0621306856">06 21 30 68 56</a>,
      description: "Du lundi au vendredi de 8h à 20h"
    },
    {
      icon: Mail,
      title: "Adresse Email",
      content: <a href="mailto:angelerosalie.sf@proton.me">angelerosalie.sf@proton.me</a>,
      description: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Secteur d'intervention",
      content: "Annecy et ses alentours",
      description: "Dans un rayon de 30 km"
    },
    {
      icon: Clock,
      title: "Horaire du cabinet",
      content: "9H00-16H00 ",
      description: "Lundi/Mardi/Jeudi/Vendredi"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-warm-50 via-sage-50/50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="font-display text-4xl lg:text-5xl font-bold text-sage-800 mb-6"
          >
            Prenons contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed"
          >
            Je suis là pour répondre à toutes vos questions et vous accompagner 
            dans votre projet de naissance. N'hésitez pas à me contacter.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-sage-800 mb-8">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4 center">
                        <div className="bg-primary-100 p-3 rounded-full flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sage-800 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-primary-600 font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-sage-600 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-2xl"
            >
              <h4 className="font-semibold text-primary-800 mb-2">
                En cas d'urgence
              </h4>
              <p className="text-primary-700 text-sm leading-relaxed">
                Pour toute urgence obstétricale, n'hésitez pas à m'appeler directement. 
                Si je ne suis pas disponible immédiatement, dirigez-vous vers les urgences 
                de la maternité la plus proche.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 rounded-3xl shadow-xl"
          >
            <h3 className="font-display text-2xl font-semibold text-sage-800 mb-8">
              Envoyer un message
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="votre.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-sage-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    >
                      <option value="consultation">Première consultation</option>
                      <option value="suivi">Suivi de grossesse</option>
                      <option value="accouchement">Accouchement à domicile</option>
                      <option value="postpartum">Soins post-partum</option>
                      <option value="information">Demande d'information</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Décrivez votre demande ou vos questions..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="font-display text-2xl font-semibold text-sage-800 mb-2">
                  Message envoyé !
                </h4>
                <p className="text-sage-600">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
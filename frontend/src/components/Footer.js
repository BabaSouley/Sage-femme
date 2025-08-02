import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "À Propos", href: "#about" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Suivi de grossesse",
    "Accouchement à domicile", 
    "Soins postpartum",
    "Préparation à la naissance",
    "Consultations couples",
    "Soutien allaitement"
  ];

  const legalLinks = [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "CGU", href: "#" }
  ];

  return (
    <footer className="bg-sage-900 text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              Prête à commencer votre parcours ?
            </h3>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Contactez-moi dès aujourd'hui pour discuter de votre projet de naissance 
              et découvrir comment je peux vous accompagner.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Prendre rendez-vous
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-display text-2xl font-semibold text-warm-200 mb-4">
                  Angèle Rosalie
                </h4>
                <p className="text-sage-300 mb-6 leading-relaxed">
                  Sage-femme libérale passionnée, j'accompagne les femmes et les familles 
                  dans leur parcours de maternité avec bienveillance et expertise.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        viewport={{ once: true }}
                        className="bg-sage-800 hover:bg-primary-600 p-3 rounded-full transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h5 className="font-semibold text-warm-200 text-lg mb-6">
                  Navigation
                </h5>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        whileHover={{ x: 5, color: "#ec7a6b" }}
                        viewport={{ once: true }}
                        className="text-sage-300 hover:text-primary-400 transition-all duration-200 block"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h5 className="font-semibold text-warm-200 text-lg mb-6">
                  Services
                </h5>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={service}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sage-300 flex items-start"
                      >
                        <Heart className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h5 className="font-semibold text-warm-200 text-lg mb-6">
                  Contact
                </h5>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="tel:0621306856"><p className="text-sage-300 text-sm">06 21 30 68 56</p></a>
                      <p className="text-sage-400 text-xs">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="mailto:angelerosalie.sf@proton.me"> <p className="text-sage-300 text-sm">angelerosalie.sf@proton.me</p> </a>
                      <p className="text-sage-400 text-xs">Réponse sous 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sage-300 text-sm">Annecy et alentours</p>
                      <p className="text-sage-400 text-xs">Rayon de 30 km</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sage-300 text-sm">Urgences 24h/7j</p>
                      <p className="text-sage-400 text-xs">Disponible pour vous</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice */}
                <div className="mt-6 p-4 bg-primary-900/30 border border-primary-700/50 rounded-xl">
                  <p className="text-primary-200 text-sm">
                    <strong>Urgence ?</strong> Appelez-moi directement ou rendez-vous 
                    aux urgences de la maternité la plus proche.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-sage-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sage-400 text-sm text-center md:text-left"
            >
              <p>
                © {currentYear} Angèle Rosalie - Sage-femme libérale. Tous droits réservés.
              </p>
              <p className="mt-1">
                Diplôme d'État n° 12345 - ADELI: 690123456
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sage-400 hover:text-primary-400 text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
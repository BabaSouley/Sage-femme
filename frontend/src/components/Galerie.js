import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";


const GalerieReact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });


  const cabinetImages = [
    { src: "https://www.stadev.fr/IMG/facade.png", alt: "Le cabinet" },
    { src: "https://www.stadev.fr/IMG/salle-attente.png", alt: "Salle d’attente" },
    { src: "https://www.stadev.fr/IMG/Bureau.png", alt: "Salle de consultation" },
  ];
  
  const plateauImages = [
    { src: "https://www.stadev.fr/IMG/Salle tapis.png", alt: "Salle de préparation" },
    { src: "https://www.stadev.fr/IMG/consultation-arriere.png", alt: "Fauteuil d'examen" },
    { src: "https://www.stadev.fr/IMG/plateau technique.png", alt: "Plateau technique" },
  ];

  const [activeCategory, setActiveCategory] = useState("cabinet");

  const displayedImages = activeCategory === "cabinet" ? cabinetImages : plateauImages;

  return (
    <section id="galerie" className="py-20 lg:py-32 bg-gradient-to-br from-warm-50 to-sage-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
            Galerie du Cabinet
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez en images notre environnement de soins : le cabinet, ses équipements, et le plateau technique.
          </p>
        </motion.div>

        {/* Boutons de filtre */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveCategory("cabinet")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === "cabinet"
                ? "bg-primary-600 text-white shadow"
                : "bg-white text-sage-700 border border-sage-200 hover:bg-sage-100"
            }`}
          >
            Les locaux
          </button>
          <button
            onClick={() => setActiveCategory("plateau")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === "plateau"
                ? "bg-primary-600 text-white shadow"
                : "bg-white text-sage-700 border border-sage-200 hover:bg-sage-100"
            }`}
          >
            La préparation
          </button>
        </div>

        {/* Grille d’images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayedImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-4 py-2">
                  {img.alt}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GalerieReact;

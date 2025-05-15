import React from "react";
import { motion } from "framer-motion";

const ReasonsToChoose = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  
  const rotateVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        delay: 2,
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const cards = [
    {
      title: "Customized Solutions",
      description:
        "Tailored learning experiences designed specifically for your needs and goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="h-32 w-32"
        >
          <motion.g
            initial="initial"
            animate="animate"
            variants={rotateVariants}
            transform-origin="100 100"
          >
            <motion.path
              d="M50 50H80V80H50z"
              fill="#6366F1"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
            />
            <motion.path
              d="M80 50H110V80H80z"
              fill="#8B5CF6"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
            />
            <motion.path
              d="M50 80H80V110H50z"
              fill="#EC4899"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            />
            <motion.path
              d="M80 80H110V110H80z"
              fill="#F59E0B"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
            />
          </motion.g>

          <motion.path
            d="M110 65H150V85H110z"
            fill="#10B981"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7 }}
          />
          <motion.path
            d="M65 110V150H85V110z"
            fill="#3B82F6"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.8 }}
          />
        </svg>
      ),
      color: "bg-indigo-50",
    },
    {
      title: "Innovative Approach",
      description:
        "Cutting-edge methodologies that make learning engaging and effective.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="h-32 w-32"
        >
        
          <motion.path
            d="M100 30L80 70L100 60L120 70z"
            fill="#F97316"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
          />
          <motion.path
            d="M100 60V150"
            stroke="#3B82F6"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

         
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <path
              d="M90 150Q100 170 110 150"
              stroke="#EC4899"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M85 145Q100 165 115 145"
              stroke="#F59E0B"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M80 140Q100 160 120 140"
              stroke="#F97316"
              strokeWidth="6"
              fill="none"
            />
          </motion.g>

          
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.g
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              transform-origin="30 50"
            >
              <path
                d="M30 40L35 50L45 50L37 57L40 67L30 62L20 67L23 57L15 50L25 50z"
                fill="#FCD34D"
              />
            </motion.g>
            <motion.g
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              transform-origin="160 90"
            >
              <path
                d="M160 80L165 90L175 90L167 97L170 107L160 102L150 107L153 97L145 90L155 90z"
                fill="#A78BFA"
              />
            </motion.g>
            <motion.g
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              transform-origin="50 130"
            >
              <path
                d="M50 120L55 130L65 130L57 137L60 147L50 142L40 147L43 137L35 130L45 130z"
                fill="#6EE7B7"
              />
            </motion.g>
          </motion.g>
        </svg>
      ),
      color: "bg-purple-50",
    },
    {
      title: "Proven Results",
      description:
        "Demonstrated success with measurable outcomes and satisfied learners.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="h-32 w-32"
        >
         
          <motion.path
            d="M70 50H130V90H120V120H80V90H70z"
            fill="#F59E0B"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          />
          <motion.path
            d="M60 120H140V130H60z"
            fill="#D97706"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ type: "spring", delay: 0.4 }}
          />
          <motion.path
            d="M90 70H110V90H90z"
            fill="#FFFFFF"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />

          
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.g
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              transform-origin="40 45"
            >
              <path d="M40 40L45 45L40 50z" fill="#EC4899" />
            </motion.g>
            <motion.g
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              transform-origin="160 65"
            >
              <path d="M160 60L165 65L160 70z" fill="#3B82F6" />
            </motion.g>
            <motion.g
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              transform-origin="50 35"
            >
              <path d="M50 30L55 35L50 40z" fill="#10B981" />
            </motion.g>
            <motion.g
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              transform-origin="170 105"
            >
              <path d="M170 100L175 105L170 110z" fill="#F97316" />
            </motion.g>
            <motion.g
              initial="initial"
              animate="animate"
              variants={rotateVariants}
              transform-origin="30 85"
            >
              <path d="M30 80L35 85L30 90z" fill="#8B5CF6" />
            </motion.g>
          </motion.g>

         
          <motion.path
            d="M60 150V170H80V140H100V160H120V130H140V180"
            stroke="#6366F1"
            strokeWidth="4"
            fill="none"
            variants={rotateVariants}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </svg>
      ),
      color: "bg-teal-50",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Reasons to Choose Us
      </motion.h2>

      <motion.p
        className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover what sets us apart in the world of digital education
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className={`p-8 rounded-xl shadow-lg hover:shadow-lg transition-all ${card.color}`}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="mb-6 flex justify-center">{card.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-center">
              {card.title}
            </h3>
            <p className="text-gray-700 text-center">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToChoose;

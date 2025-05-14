import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  const svgVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 + 0.6, duration: 0.5 }
    })
  };

  const content = [
    {
      title: 'Our Mission',
      desc: 'Empowering learners with accessible and engaging digital education experiences.',
    },
    {
      title: 'Our Vision',
      desc: 'To innovate the way knowledge is shared and inspire the next generation of thinkers.',
    },
    {
      title: 'What We Do',
      desc: 'We create modern ed-tech solutions for personalized, effective, and fun learning.',
    },
  ];

  return (
    <section className="bg-blue-100 py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Who We Are
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* SVG Animation on Left */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={svgVariants}
        >
          <svg
            viewBox="0 0 500 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* Book Base */}
            <motion.rect
              x="50"
              y="50"
              width="300"
              height="250"
              rx="5"
              fill="#4f46e5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            {/* Book Pages */}
            <motion.rect
              x="80"
              y="70"
              width="240"
              height="210"
              fill="#ffffff"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            
            {/* Book Spine */}
            <motion.rect
              x="350"
              y="50"
              width="20"
              height="250"
              fill="#3730a3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            {/* Graduation Cap */}
            <motion.path
              d="M200,100 L250,70 L300,100 L250,130 Z"
              fill="#f59e0b"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
            />
            <motion.path
              d="M220,100 L220,150 L280,150 L280,100"
              fill="#f59e0b"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1, type: 'spring' }}
            />
            
            {/* Lightbulb */}
            <motion.circle
              cx="150"
              cy="200"
              r="30"
              fill="#fbbf24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2, type: 'spring' }}
            />
            <motion.path
              d="M150,230 L150,260 M130,210 L120,190 M170,210 L180,190"
              stroke="#374151"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            />
          </svg>
        </motion.div>

       
        <motion.div
          className="w-full md:w-1/2 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          {content.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className="bg-gray-50 shadow-lg p-6 hover:scale-110 transition-all rounded-xl border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default WhoWeAre
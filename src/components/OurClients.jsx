import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import edureka from "../assets/edureka.png";
import ace from "../assets/ace.png";
import Aria from "../assets/Aria.png";
import kwick from "../assets/kwick.png";
import dexetro from "../assets/dexetro.png";
import covac from "../assets/covac.png";

const OurClients = () => {
  const controls = useAnimation();
  const clientLogos = [edureka, ace, Aria, kwick, dexetro, covac];

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
        },
      },
    });
  }, [controls]);

  return (
    <section className="py-20 px-4 text-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Trusted by <span className="text-blue-600">Innovators</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
        >
          Partnered with forward-thinking companies to transform education through technology
        </motion.p>

        {/* Double Marquee Container */}
        <div className="relative w-full h-48 md:h-60 overflow-hidden group">
          {/* Gradient Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* First Marquee */}
          <motion.div 
            className="absolute flex items-center h-full"
            animate={controls}
          >
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={`first-${i}`} className="px-6 md:px-10 flex">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${i + 1}`}
                    className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-500"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Second Marquee (offset) */}
          <motion.div 
            className="absolute flex items-center h-full left-[100%]"
            animate={controls}
          >
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={`second-${i}`} className="px-6 md:px-10 flex">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${i + 1}`}
                    className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-500"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Become a Partner
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurClients;
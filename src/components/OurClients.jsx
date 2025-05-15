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
      x: ["0%", "-50%"],
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
    <section className="py-20 px-4 text-center overflow-hidden bg-white">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
      >
        Our Clients
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-2xl mx-auto text-gray-600 mb-10"
      >
        Trusted by forward-thinking companies to elevate education through
        innovation and technology.
      </motion.p>

      <div className="relative w-full h-36 overflow-hidden bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 shadow-inner rounded-lg">
        <motion.div className="flex w-max items-center" animate={controls}>
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="px-8">
              <motion.img
                whileHover={{ scale: 1.15 }}
                src={logo}
                alt={`Client ${i + 1}`}
                className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out drop-shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;

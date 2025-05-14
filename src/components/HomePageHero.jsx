import { motion } from "framer-motion";
import heroImage from "../assets/1263.jpg";

const HomepageHero = () => {
  const cards = [
    {
      title: "Actify Business",
      description: "Transform your operations with our cutting-edge software solutions designed for modern enterprises.",
      features: [
        "Enterprise-grade solutions",
        "Seamless integration",
        "Real-time analytics",
        "24/7 support"
      ],
      color: "bg-[#F00F0F]",
      hoverColor: "hover:bg-[#f00f0fef]",
      textColor: "text-white",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Actify Learning",
      description: "Elevate your skills with our comprehensive courses and hands-on training programs.",
      features: [
        "Industry-expert instructors",
        "Hands-on projects",
        "Career support",
        "Flexible learning"
      ],
      color: "bg-indigo-950",
      hoverColor: "hover:bg-indigo-900",
      textColor: "text-white",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    }
  ];

  return (
    <section className="flex min-h-screen flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white text-black">
      <div className="md:w-1/2 text-left">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Empowering Growth Through{" "}
          <span className="text-[#F00F0F]">Learning</span>{" "}
          <span className="text-indigo-950">And Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-gray-700 text-lg"
        >
          Whether you're here to elevate your skills or enhance your business with
          cutting-edge software solutions, Actify is your partner in success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className={`${card.color} ${card.hoverColor} ${card.textColor} p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 flex flex-col relative overflow-hidden`}
            >
              {/* Animated background elements */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white bg-opacity-10"
                initial={{ scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="flex items-center mb-4 z-10">
                <motion.div 
                  className="p-2 rounded-lg bg-white bg-opacity-20 mr-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              
              <p className="opacity-90 text-sm mb-4 z-10">{card.description}</p>
              
              {/* Animated feature list */}
              <motion.ul className="mb-1 z-10">
                {card.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center mb-2 text-sm"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                  >
                    <motion.span 
                      className="mr-2"
                      whileHover={{ scale: 1.2 }}
                    >
                      ✓
                    </motion.span>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              
              
              <motion.div 
                className="mt-auto flex items-center justify-between z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="text-sm font-semibold flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-white bg-opacity-30 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Animated border */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
                whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 h-[60%] mb-10 md:mb-0"
      >
        <img
          src={heroImage}
          alt=""
          className="rounded-xl h-full shadow-xl w-full max-w-md mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default HomepageHero;
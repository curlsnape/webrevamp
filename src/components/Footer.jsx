import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import actify from "../assets/ac.webp";
const linkVariants = {
  hover: { x: 5, color: "#93c5fd", transition: { duration: 0.2 } },
};

export default function Footer() {
  return (
    <div className="relative mt-20">
      <div className="absolute inset-0 -skew-y-2 bg-gradient-to-b from-[#0E2378] via-indigo-900 to-purple-600 z-[-1]" />

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-20 text-white"
      >
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "Contact",
                "Why choose us?",
                "Actify Learning",
                "Actify Business",
                "Careers",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover="hover"
                  variants={linkVariants}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaInstagram className="text-white" /> actify.business
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-white" /> Actify Business
              </li>
              <li className="flex items-center gap-2">
                <FaFacebookF className="text-white" /> Actify Business
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4">Learning</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaInstagram className="text-white" /> actify.learning
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-white" /> Actify Learning
              </li>
              <li className="flex items-center gap-2">
                <FaFacebookF className="text-white" /> actify.learning
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">📞 +91-98**********</p>
            <p className="text-sm mb-6">✉️ info@actifyzone.com</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-white text-sm text-blue-900 rounded-lg font-medium shadow-md hover:bg-blue-200 transition"
            >
              Contact Now
            </motion.button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              sequi nulla quisquam modi placeat quam voluptatum maiores officiis
              reprehenderit dolore!
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© Copyright 2024. All Rights Reserved.</span>
          <div className="logo w-40 bg-white p-2 rounded-sm">
            <img className="w-full h-full object-cover" src={actify} alt="" />
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

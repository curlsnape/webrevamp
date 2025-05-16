import React from "react";
import { motion } from "framer-motion";

const ReasonBlock = ({ heading, points, imageSrc, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col-reverse ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 my-16`}
    >
      {/* Text */}
      <div className="flex-1 text-black max-w-lg space-y-4 px-4">
        <h2 className="text-2xl md:text-3xl font-bold">{heading}</h2>
        <ul className="space-y-2 list-disc list-inside text-base">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img src={imageSrc} alt={heading} className="w-full max-w-md object-contain" />
      </div>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <div className="bg-white py-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-20">
        Why Choose Us
      </h1>

      {/* Block 1 */}
      <ReasonBlock
        heading="Personal Attention"
        points={[
          "Personalized guidance for every student",
          "Regular interaction with mentors",
          "Ensuring no one feels left behind",
        ]}
        imageSrc="https://via.placeholder.com/400"
      />

      {/* Block 2 */}
      <ReasonBlock
        heading="Innovative Teaching Methodologies"
        points={[
          "Interactive learning approaches",
          "Hands-on practice with modern tools",
          "Focus on deep understanding over rote learning",
        ]}
        imageSrc="https://via.placeholder.com/400"
        reverse
      />

      {/* Block 3 */}
      <ReasonBlock
        heading="One-to-One Sessions"
        points={[
          "Dedicated personalized sessions for doubt clearing",
          "Flexible scheduling as per student needs",
          "Continuous performance review and feedback",
        ]}
        imageSrc="https://via.placeholder.com/400"
      />

      {/* Block 4 */}
      <ReasonBlock
        heading="Relevant Projects & Real-world Exposure"
        points={[
          "Work on real-world projects",
          "Industry-aligned learning experiences",
          "Build a portfolio that stands out",
        ]}
        imageSrc="https://via.placeholder.com/400"
        reverse
      />
    </div>
  );
};

export default WhyChooseUsSection;

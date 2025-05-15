import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "../../src/index.css";

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    role: "Frontend Developer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, delectus.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Smith",
    role: "UI/UX Designer",
    rating: 4,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo neque, tenetur recusandae, ut architecto quis, cumque molestias eos atque tempora eius quod optio reprehenderit illo?",
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Alex Johnson",
    role: "Project Manager",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo neque, tenetur recusandae, ut architecto quis, cumque molestias eos atque tempora eius quod optio reprehenderit illo?",
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Alex Johnson",
    role: "Project Manager",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo neque, tenetur recusandae, ut architecto quis, cumque molestias eos atque tempora eius quod optio reprehenderit illo?",
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Alex Johnson",
    role: "Project Manager",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo neque, tenetur recusandae, ut architecto quis, cumque molestias eos atque tempora eius quod optio reprehenderit illo?",
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Alex Johnson",
    role: "Project Manager",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo neque, tenetur recusandae, ut architecto quis, cumque molestias eos atque tempora eius quod optio reprehenderit illo?",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

const Testimonials = () => {
  return (
    <section className="bg-[#f9fafb] py-16 px-4 md:px-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-black mb-12"
      >
        What Our Clients Say
      </motion.h2>
      <motion.p
        className="text-xl text-center text-gray-600 mb-12 -mt-5 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Voices That Define Our Work.
      </motion.p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <Card testimonial={t} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const Card = ({ testimonial, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className="perspective"
    >
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative w-full h-[300px] transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        
        <div className="absolute w-full h-full flex justify-center items-center backface-hidden bg-[#0e2378] text-white rounded-lg p-6 shadow-md">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex items-center">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm opacity-80">{testimonial.role}</p>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-yellow-400 text-xl mb-2">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <div className="bg-white text-[#0e2378] text-xs font-semibold px-3 py-1 rounded-full animate-bounce shadow-md">
                Click to Read Review
              </div>
            </div>
          </div>
        </div>

   
        <div className="absolute flex justify-center items-center w-full h-full backface-hidden bg-indigo-800 text-white rounded-lg p-6 shadow-md rotate-y-180">
          <p className="text-sm">{testimonial.text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;

import React, { useState } from "react";
import frontendlogo from "../assets/frontend.png";
import backendlogo from "../assets/backend.png";
import fullstacklogo from "../assets/fullstackk.png";
const roles = {
  frontend: {
    title: "Frontend Developer",
    description:
      "Master modern UI/UX development with cutting-edge frameworks and tools to create stunning user interfaces.",
    keywords: [
      "React",
      "Vue",
      "Tailwind CSS",
      "Responsive Design",
      "JavaScript",
    ],
    bgImage:
      "https://i.pinimg.com/736x/3b/5a/f5/3b5af5d4edd399d68915f67667b74fb4.jpg",
  },
  backend: {
    title: "Backend Developer",
    description:
      "Build robust server-side applications, APIs, and database architectures to power your applications.",
    keywords: [
      "Node.js",
      "Express",
      "Database",
      "API Design",
      "Authentication",
    ],
    bgImage:
      "https://i.pinimg.com/736x/f2/2d/2a/f22d2afa19665d3dcf1d1480f1f527c2.jpg",
  },
  fullstack: {
    title: "Fullstack Developer",
    description:
      "Develop complete applications from front to back with end-to-end expertise in modern web technologies.",
    keywords: ["MERN Stack", "Next.js", "Deployment", "Testing", "REST APIs"],
    bgImage:
      "https://i.pinimg.com/736x/7c/43/3e/7c433e7273948204d875ee5cdcf218ff.jpg",
  },
};

const LearningUI = () => {
  const [activeRole, setActiveRole] = useState("frontend");

  return (
    <div
      className="min-h-screen bg-center text-black relative transition-all duration-500"
      style={{
        backgroundImage: `url(${roles[activeRole].bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-[#00000048]"></div>

      <div className="relative z-10 p-8 max-w-6xl mx-auto text-white">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl text-zinc-300 font-bold mb-4">
            <span className="text-[#F10D0D]">Actify</span>
            <span className="text-[#2e52d3]">Learning</span>
          </h1>
          <h2 className="text-2xl w-[55%] md:text-3xl font-semibold mb-4">
            Empower your {roles[activeRole].title.toLowerCase()} journey with
            tools that matter.
          </h2>
          <p className="text-lg md:text-xl w-[50%] mb-6 max-w-2xl">
            {roles[activeRole].description}
          </p>

          <div className="flex flex-col items-start flex-wrap gap-4 mb-8">
            <button className="px-6 py-3 bg-purple-800 text-white rounded-full hover:bg-purple-700 transition">
              Get Started
            </button>
            <button className="px-3 py-3 text-white rounded-lg transition">
              Have any question?
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {roles[activeRole].keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white bg-opacity-20 text-black backdrop-blur-sm font-medium border border-white"
              >
                {keyword}
              </span>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.keys(roles).map((role) => (
            <div
              key={role}
              onClick={() => setActiveRole(role)}
              className={`p-6 h-48 flex flex-col justify-between rounded-xl cursor-pointer transition-all ${
                role === activeRole
                  ? "ring-2 ring-white bg-[#2b35ca9c] backdrop-blur-sm"
                  : " bg-purple-600 bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                {role === "frontend" && (
                  <img className="h-10 w-10 rounded-full" src={fullstacklogo} alt="frontendlogo" />
                )}
                {role === "backend" && (
                  <img className="h-10 w-10 rounded-full" src={fullstacklogo} alt="backendlogo" />
                )}
                {role === "fullstack" && (
                  <img className="h-14 w-14 rounded-full" src={fullstacklogo} alt="fullstack" />
                )}

                {/* Role Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {roles[role].title}
                </h3>

                {/* Role Description */}
                <p className="text-sm text-white text-opacity-80">
                  {role === "frontend" &&
                    "Build beautiful, responsive user interfaces"}
                  {role === "backend" &&
                    "Develop powerful server-side applications"}
                  {role === "fullstack" &&
                    "Create complete end-to-end solutions"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningUI;

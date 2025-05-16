import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const LearningCurveTimeline = () => {
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);
  const pathsRef = useRef([]);
  const achievementRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate items
    itemsRef.current.forEach((item, index) => {
      gsap.from(item, {
        y: index % 2 === 0 ? 50 : -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Animate paths
    pathsRef.current.forEach((path, index) => {
      const length = path.getTotalLength();
      gsap.fromTo(path,
        { strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const playAchievementAnimation = (index) => {
    const achievement = achievementRefs.current[index];
    if (!achievement) return;

    gsap.fromTo(achievement,
      { scale: 0, opacity: 0 },
      { 
        scale: 1.2,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        yoyo: true,
        repeat: 1
      }
    );
  };

  const learningSteps = [
    { id: 1, title: "Online/Offline", description: "Begin your learning journey", achievement: "New Learner Badge" },
    { id: 2, title: "Training", description: "Discover courses & resources", achievement: "Explorer Award" },
    { id: 3, title: "Industry Projects", description: "Hands-on coding exercises", achievement: "Practice Champion" },
    { id: 4, title: "Mock Interviews", description: "Create real-world projects", achievement: "Builder Medal" },
    { id: 5, title: "Resume Building", description: "Get expert feedback", achievement: "Quality Seal" },
    { id: 6, title: "Web Portfolio", description: "Achieve proficiency", achievement: "Mastery Trophy" },
    { id: 7, title: "Git & LinkedIn", description: "Present your portfolio", achievement: "Portfolio Star" }
  ];

  const generatePath = (startX, startY, endX, endY) => {
    const cp1x = startX + (endX - startX) * 0.3;
    const cp1y = startY + (Math.random() * 100 - 50);
    const cp2x = startX + (endX - startX) * 0.7;
    const cp2y = endY + (Math.random() * 100 - 50);
    
    return `M${startX},${startY} C${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-bold mb-4">Actify Learning</h1>
        <p className="text-xl text-gray-600 max-w-2xl">Follow your personalized learning curve to mastery</p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative w-full max-w-6xl mx-auto h-96 overflow-visible">
        {/* Paths */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
          {learningSteps.slice(0, -1).map((_, index) => {
            const startX = (index / (learningSteps.length - 1)) * 1000;
            const endX = ((index + 1) / (learningSteps.length - 1)) * 1000;
            const startY = index % 2 === 0 ? 80 : 120;
            const endY = (index + 1) % 2 === 0 ? 80 : 120;
            
            return (
              <path
                key={`path-${index}`}
                ref={el => pathsRef.current[index] = el}
                d={generatePath(startX, startY, endX, endY)}
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                className="opacity-70"
              />
            );
          })}
        </svg>

        {/* Timeline items */}
        <div className="relative h-full">
          {learningSteps.map((step, index) => {
            const isOdd = index % 2 !== 0;
            const position = {
              left: `${(index / (learningSteps.length - 1)) * 100}%`,
              top: isOdd ? '60%' : '20%'
            };

            return (
              <div
                key={step.id}
                ref={el => itemsRef.current[index] = el}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={position}
              >
                <div 
                  className="relative group flex flex-col items-center"
                  onMouseEnter={() => playAchievementAnimation(index)}
                >
                  {/* Info card on top for upper points */}
                  { !isOdd && (
                    <div className="mb-4 w-48 p-4 bg-white rounded-lg shadow-lg text-center z-20">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  )}

                  {/* Achievement Circle - Always visible */}
                  <div className="relative">
                    <div 
                      className="
                        w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                        text-white flex items-center justify-center text-xl font-bold shadow-lg 
                        transform transition-all duration-300 z-10
                        group-hover:scale-110 group-hover:shadow-xl
                      "
                    >
                      {step.id}
                    </div>
                    {/* Achievement badge on hover */}
                    <div 
                      ref={el => achievementRefs.current[index] = el}
                      className={`absolute ${isOdd ? 'top-0' : 'bottom-0'} left-1/2 transform -translate-x-1/2
                        w-32 p-2 bg-yellow-100 rounded-lg shadow-md text-center
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        ${isOdd ? '-translate-y-full' : 'translate-y-full'}
                      `}
                    >
                      <span className="text-xs font-bold text-yellow-800">{step.achievement}</span>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 
                        ${isOdd ? 'bottom-0 translate-y-full' : 'top-0 -translate-y-full'} 
                        w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent 
                        ${isOdd ? 'border-b-yellow-100' : 'border-t-yellow-100 border-b-0'}`}>
                      </div>
                    </div>
                  </div>

                  {/* Info card on bottom for lower points */}
                  { isOdd && (
                    <div className="mt-4 w-48 p-4 bg-white rounded-lg shadow-lg text-center z-20">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Content */}
      <div className="max-w-6xl mx-auto mt-32 grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-md shadow-zinc-300 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Start Learning</h3>
          <p className="text-gray-600">Begin with our curated beginner courses</p>
        </div>
        <div className="p-6 shadow-md shadow-zinc-300 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Track Progress</h3>
          <p className="text-gray-600">Monitor your advancement through each stage</p>
        </div>
        <div className="p-6 shadow-md shadow-zinc-300 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Achieve Mastery</h3>
          <p className="text-gray-600">Complete the journey with portfolio-ready projects</p>
        </div>
      </div>
    </div>
  );
};

export default LearningCurveTimeline;
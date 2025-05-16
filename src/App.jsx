import React from "react";
import Navbar from "./components/Navbar";
import HomepageHero from "./components/HomePageHero";
import WhoWeAre from "./components/WhoWeAre";
import ReasonsToChoose from "./components/ReasonsToChoose";
import OurClients from "./components/OurClients";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import LocomotiveScroll from "locomotive-scroll";
import LearningUI from "./components/LearningUi";


import LearningCurveTimeline from "./components/LearningCurveTimeline";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen">
      {/* <Navbar/>
      <HomepageHero/>
      <WhoWeAre/>
      <ReasonsToChoose/>
      <OurClients/>
      <Testimonials />
      <Footer/> */}
      <LearningUI />
      <LearningCurveTimeline />
      <WhyChooseUsSection />
    </div>
  );
}

export default App;

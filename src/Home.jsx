import React from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import Animation from "./Animation";
import Footer from "./Footer";
import DeveloperCoordinator from "./components/Developer_Coordinator";
import SponsorCarousel from "./SponsorCarousel";

const Home = () => {

  return (
    <>
      <Animation />
      <SponsorCarousel/>
      <Events />
      <DeveloperCoordinator/>
      <Footer />
      </>
  );
};
export default Home;

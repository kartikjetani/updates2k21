import React from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import Animation from "./Animation";
import Footer from "./Footer";
import Developer_Coordinator from "./components/Developer_Coordinator"

const Home = () => {

  return (
    <>
      <Navbar />
      <Animation />
      <Events />
      <Developer_Coordinator/>
      <Footer />
      </>
  );
};
export default Home;

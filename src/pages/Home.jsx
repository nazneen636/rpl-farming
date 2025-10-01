import React from "react";
import Banner from "../components/homeComponents/Banner";
import Guides from "../components/homeComponents/Guides";
import CropDetails from "../components/homeComponents/CropDetails";
import PestControl from "../components/homeComponents/Pest";
import Contact from "../components/homeComponents/Contact";

const Home = () => {
  return (
    <div>
      <div id="#">
        <Banner />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div id="guides">
          <Guides />
        </div>
        <div id="crop">
          {" "}
          <CropDetails />
        </div>
        <div id="pest">
          {" "}
          <PestControl />
        </div>
        <div id="contact">
          {" "}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;

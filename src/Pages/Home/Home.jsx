// src/pages/Home.js
import React from "react";
import Banner from "../../components/Banner/Banner";
import MarqueeC from "../../components/Marquee/MarqueeC";
import CraftItems from "../../components/CraftItems/CraftItems";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import MapIlford from "../../components/MapIlford/MapIlford";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <Fade duration={1000} delay={300}>
      <div className="">
        <Banner />
        <MarqueeC />
        <CraftItems />
        <CustomerReview></CustomerReview>
        <MapIlford></MapIlford>
      </div>
    </Fade>
  );
};

export default Home;

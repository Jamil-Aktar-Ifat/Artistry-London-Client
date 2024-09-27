// src/pages/Home.js
import React from "react";
import Banner from "../../components/Banner/Banner";
import MarqueeC from "../../components/Marquee/MarqueeC";
import CraftItems from "../../components/CraftItems/CraftItems";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import MapIlford from "../../components/MapIlford/MapIlford";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <MarqueeC />
      <CraftItems />
      <CustomerReview></CustomerReview>
      <MapIlford></MapIlford>
    </div>
  );
};

export default Home;

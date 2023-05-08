import React from "react";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import ChefsContainer from "../../components/chefsContainer/ChefsContainer";
import Testimonial from "../../components/testimonial/Testimonial";
import PopularMenuItems from "../../components/popularMenuItems/PopularMenuItems";


const Home = () => {
  return (
    <div>
      <HomeBanner />
      <ChefsContainer />
      <Testimonial />
      <PopularMenuItems />
    </div>
  );
};

export default Home;

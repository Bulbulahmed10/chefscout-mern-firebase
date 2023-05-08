import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "./homeBanner.css";
const bannerImageLink = [
  {
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    title: "Spicy Shrimp Tacos",
    desc: "Juicy shrimp seasoned with a blend of spices, served in warm tortillas with fresh salsa, avocado, and a squeeze of lime for a delicious and healthy meal.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Creamy Garlic Chicken",
    desc: "Tender chicken breasts smothered in a rich and creamy garlic sauce, served with your favorite vegetables and a side of pasta or rice.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1659275799237-cbc057d97e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    title: "Mushroom Risotto",
    desc: "Creamy and flavorful risotto made with arborio rice and a mix of sautéed mushrooms, garlic, and parmesan cheese. Perfect as a side or a vegetarian main dish.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",

    title: "Classic Lasagna",
    desc: "Layers of pasta, beef, cheese and sauce make this lasagna a classic comfort food that's perfect for feeding a crowd or freezing for later.",
  },
];

const HomeBanner = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper relative z-10 h-screen overflow-hidden customCssBannerContainer">
      {bannerImageLink &&
        bannerImageLink.map((singleBannerImage, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute bg-gray-900 h-screen w-full bg-opacity-50"></div>
            <div className="flex ">
              <div className="text-white absolute flex flex-col justify-center h-screen w-full items-center">
                <h4 className="text-center font-CoveredByYourGrace text-6xl font-bold w-full">
                  {singleBannerImage.title}
                </h4>
                <p className="text-center w-full px-4 mt-8 font-Raleway text-lg">
                  {singleBannerImage.desc}
                </p>
              </div>
              <img
                className="w-full object-cover "
                src={singleBannerImage.image}
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default HomeBanner;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";

const testimonialData = [
  {
    id: "5661465645",
    desc: "I tried one of your recipes for dinner last night and it was a hit with my whole family. We can't wait to try more! there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryYour products have completely changed the way I cook. The quality is outstanding and the flavors are unbeatable. to be sure there isn't anything embarrassing hidden in the middle of text. All the",
    author_image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Nabila Khan",
    designation: "Founder, Lotas",
  },
  {
    id: "561451545",
    desc: "Your products have completely changed the way I cook. The quality is outstanding and the flavors are unbeatable. to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryand the flavors are unbeatable. to be sure there isn't anything embarrassing hidden in the middle o",
    author_image:
      "https://images.unsplash.com/photo-1555001652-38dc6d28a9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Shanin Kalaji",
    designation: "MD, Sarlina, Inc",
  },
  {
    id: "561664645",
    desc: "TI've always been intimidated by cooking, but your tips and tricks have given me the confidence to try new things inu need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryI've always been intimidated by cooking, but your tips and tricks have given me the confidence to try new things inu need to be sure there isn't anything embarrassing hidd",
    author_image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Ausitne Wade",
    designation: "COO, Lamsam Group",
  },
  {
    id: "5614645",
    desc: "I love reading the 'What People' section of your website and seeing how your recipes have impacted other people's lives. Keep up the great ll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryI love reading the 'What People' section of your website and seeing how your recipes have impacted other people's lives. Keep up the great ll the Lorem Ipsum generators on the Internet tend",
    author_image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Sergio de paula",
    designation: "CEO, Karniz Group",
  },
  {
    id: "566164645",
    desc: "Your story is so inspiring and it's clear that you truly care about your customers and their culinary experiencesthere isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessarYour story is so inspiring and it's clear that you truly care about your customers and their culinary experiencesthere isn't anything embarrassing hidden in the middley",
    author_image:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80",
    name: "Nabila Khan",
    designation: "CEO, Sigmund",
  },
  {
    id: "56145645",
    desc: "I've been a loyal customer for years and I can always count on your products to deliver delicious and consistent results.Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryI've been a loyal customer for years and I can always count on your products to deliver delicious and ",
    author_image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    name: "Radrigo Slafie",
    designation: "Founder, Suprime",
  },
  {
    id: "561464645",
    desc: "Your recipes are always so easy to follow and the ingredients are readily available at my local grocery store. Thank you for making cooking so accessiblesure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryYour recipes are always so easy to follow and the ingredients are readily available at my local grocery store. Thank you for making cooking so accessiblesure there isn't anything embarr",
    author_image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    name: "Ranis karina",
    designation: "Founder, Lasagna",
  },
  {
    id: "561164645",
    desc: "Thereas hesitant to try your products at first, but now I can't imagine cooking without them. They've become staples in my kited to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryThereas hesitant to try your products at first, but now I can't imagine cooking without them. They've become staples in my kited to be sure there isn't anything embarr",
    author_image:
      "https://images.unsplash.com/photo-1615473976681-e28b6590775a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Salina Karolina",
    designation: "MD, Tarican Group",
  },
  {
    id: "561445645",
    desc: "TI recently hosted a dinner party and used one of your recipes for the main course. My guests were blown away and couldn't stop raving about the food. Thank you for helping me impress my friends and fa All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessaryTI recently hosted a dinner party and used one of your recipes for the main course. My guests were blown away and couldn't stop raving about the food. Thank you for helping me impress my f",
    author_image:
      "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
    name: "Naim Ahmed",
    designation: "Founder, Sarcastic",
  },
];

const Testimonial = () => {
  return (
    <div className="mt-24 w-full relative">
      <LazyLoadImage
        className="w-full h-[800px]"
        src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="absolute top-0 flex flex-col items-center justify-center mt-12 m-auto w-full">
        <div>
          <h2 className="text-center font-bold text-5xl lg:text-6xl font-CoveredByYourGrace capitalize">
            what people say
          </h2>
          <p className="text-center text-lg mt-6 mx-auto w">
            Discover what people are saying about our recipes, products, and
            cooking tips in our section. <br /> Read reviews and testimonials
            from satisfied customers and home cooks who have <br /> tried our
            recipes and products. See how our recipes have transformed their
          </p>
        </div>
        <div className="w-full max-w-[1280px] mt-20">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwipe">
            {testimonialData &&
              testimonialData.map((singleData) => {
                const { id, desc, name, author_image, designation } =
                  singleData;
                return (
                  <SwiperSlide key={id} className="px-4">
                    <div className="bg-white h-[350px] p-4 rounded-sm">
                      <p className="text-justify">
                        {desc.length > 300 ? desc.slice(0, 260) + "..." : desc}
                      </p>
                      <div className="flex items-center gap-2 mt-10">
                        <img
                          className="w-16 h-16 object-cover rounded-full"
                          src={author_image}
                          alt=""
                        />
                        <div>
                          <h3 className="text-lg font-semibold tracking-wider font-Raleway">
                            {name}
                          </h3>
                          <span className="text-sm font-semibold">
                            {designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

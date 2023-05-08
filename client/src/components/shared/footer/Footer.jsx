import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 bg-black py-4 lg:py-20">
        <div>
          <h4 className="uppercase text-xl font-semibold font-Raleway tracking-wide mb-6 text-white">
            our story
          </h4>
          <p className="text-[#c0bbbbf4]">
            Learn about our brand's history and journey in our "Our Story"
            section. Discover the inspiration behind our products and recipes,
            and the people who make it all possible.
          </p>
          <div className="flex items-center gap-3 mt-6 ">
            <BsClockHistory className="text-yellow-500" />{" "}
            <span className="text-[#c0bbbbf4]">Mon-Sat 8.00 - 18.00</span>{" "}
          </div>
          <div className="flex items-center gap-3 mt-1">
            <BsClockHistory className="text-yellow-500" />{" "}
            <span className="text-[#c0bbbbf4]">Sunday closed</span>
          </div>
        </div>
        <div>
          <h4 className="uppercase text-xl font-semibold font-Raleway tracking-wide mb-6 text-white">
            useful links
          </h4>
          <ul className="flex flex-col gap-2">
            <a
              className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300"
              href="#">
              Engaging, Purposeful, and Creative
            </a>
            <a
              className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300"
              href="#">
              Extroadinary Life Events
            </a>
            <a
              className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300"
              href="#">
              Connect Your Worlds
            </a>
            <a
              className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300"
              href="#">
              Improving Workplace Productivity
            </a>
            <a
              className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300"
              href="#">
              Leading Organizations
            </a>
          </ul>
        </div>
        <div>
          <h4 className="uppercase text-xl font-semibold font-Raleway tracking-wide mb-6 text-white">
            Latest post
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <img
                className="w-[90px] h-[60px] object-cover"
                src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300 font-Raleway font-semibold">
                  Cooking is an Art
                </a>
                <a
                  href="#"
                  className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300 font-Raleway tracking-wider font-semibold">
                  03/15/2023
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-[90px] h-[60px] object-cover"
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                alt=""
              />
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300 font-Raleway font-semibold">
                  Francisco Haynes
                </a>
                <a
                  href="#"
                  className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300 font-Raleway tracking-wider font-semibold">
                  09/18/2022
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-[90px] h-[60px] object-cover"
                src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                alt=""
              />
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300 font-Raleway font-semibold">
                  The Art of Success
                </a>
                <a
                  href="#"
                  className="text-[#c0bbbbf4] hover:text-yellow-500 duration-300 font-Raleway tracking-wider font-semibold">
                  02/26/2022
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="uppercase text-xl font-semibold font-Raleway tracking-wide mb-6 text-white">
            find us
          </h4>
          <Link to="/contact" href="">
            <img
              src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/footer-img-1.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="bg-black text-white p-8 grid md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-y-4">
        <h2 className="text-4xl font-StyleScript tracking-widest text-gray-300">
          chefscout
        </h2>
        <p className="text-[#c0bbbbf4]">
          ©2023{" "}
          <span className="text-[#f1eaeaf4] cursor-pointer">
            Bulbul Ahmed Inc,
          </span>{" "}
          All Rights Reserved{" "}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-lg uppercase font-Raleway text-[#d1cdcdf4]">
            follow us
          </p>
          <div className="flex gap-2">
            <FaTwitter className="hover:text-[#c0bbbbf4] cursor-pointer duration-300" />
            <FaFacebook className="hover:text-[#c0bbbbf4] cursor-pointer duration-300" />
            <FaYoutube className="hover:text-[#c0bbbbf4] cursor-pointer duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

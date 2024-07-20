import React from "react";
import Features from "../component/Features";
import { GoArrowUpRight } from "react-icons/go";
import AboutCompo from "../component/AboutCompo";
import { useNavigate } from "react-router-dom";
import screen1 from "/screen3.webp";
import outdoor from "/outdoor.webp";
import screen2 from "/screen2.webp";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='section bg-Black'>
        <div className="container">
          <div className="grid grid-cols-12 place-items-center">
            <div className="xl:col-span-6 col-span-12" data-aos="fade-right" data-duration="1000" data-aos-delay="100">
              <h1 className="mb-10 xl:leading-[70px] capitalize">
                Easy, affordable, beautiful{" "}
                <span className="text-White border-b-4 border-b-solid border-b-White">
                  digital signage
                </span>
              </h1>
              <p>
                Transform communication, increase productivity and boost sales
                with Dynamic Displays digital signage software, hardware and
                solutions.{" "}
              </p>
              <button className="dark_btn mt-5">Start Now</button>
            </div>
            <div className="xl:col-span-6 col-span-12 mt-5 xl:mt-0" data-aos="fade-left" data-duration="1000" data-aos-delay="200">
              <div>
                <img src={screen1} alt="Screen 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutCompo AboutBtn={true} />
      <div className='section bg-[url("./dots.png")] bg-Gray'>
        <div className="container">
          <div className="grid grid-cols-12 place-items-center">
            <div className="xl:col-span-5 md:col-span-6 col-span-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              <div>
                <h2 className="lefthead">43'Smart Outdoor Signage</h2>
                <p>
                  Inheriting the exquisite craftsmanship and advanced special
                  effects of this product series, the appearance design is more
                  beautiful, the piano paint is matched with the wire drawing
                  process, the ultra-thin frame, and seven new colors are added.
                </p>
                <button
                  className="circlebtn"
                  onClick={() => navigate("/outdoorsignage")}>
                  Learn More <GoArrowUpRight className="circledesign" />
                </button>
              </div>
            </div>
            <div className="xl:col-span-7 md:col-span-6 col-span-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
              <img src={outdoor} alt="Outdoor Signage" />
            </div>
          </div>
          <div className="grid grid-cols-12 place-items-center xl:mt-0 mt-5">
            <div className="xl:col-span-5 md:col-span-6 col-span-12 order-1 xl:order-none" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <img src={screen2} alt="Screen 2" />
            </div>
            <div className="xl:col-span-7 md:col-span-6 col-span-12" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
              <div>
                <h2 className="lefthead">
                  Indoor full screen lcd digital signage
                </h2>
                <p>
                  The Indoor Double-Sided Full-Screen LCD Digital Signage is a
                  powerful tool for businesses looking to enhance their
                  advertising efforts. Its double-sided display, high-resolution
                  visuals, and sleek design make it an effective and attractive
                  solution for engaging your audience. Invest in this advanced
                  digital signage to maximize your advertising reach and impact.
                </p>
                <button
                  className="circlebtn"
                  onClick={() => navigate("/indoorsignage")}>
                  Learn More <GoArrowUpRight className="circledesign" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="centerhead">
            <h2>Explore Premium Features</h2>
          </div>
          <div className="grid grid-cols-12 xl:mt-20 md:mt-20 mt-10">
            <Features />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

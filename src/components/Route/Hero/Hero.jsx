import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import heroimg4 from "../../../beautiful_greenery_land_with_landscape_view_of_mountains_under_light_purple_sky_hd_nature.jpg";

const Hero = () => {
  return (
    <div
      className={`relative h-screen w-full  bg-cover bg-center  ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${heroimg4})`,
      }}
    >
      <div className={`${styles.section} w-[90%] 700px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#186F65] font-[600] capitalize`}
        >
          Best Collection for <br /> Your fridge
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#F3FDE8]">
          Discover a World of Exceptional Culinary Delights as You Embark on a
          <br/>
          Journey of Flavor and Freshness, <br/>Connecting Farms to Your Fork - Where <br/>
          Every Dish is a Celebration of Nature's Bounty!"
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

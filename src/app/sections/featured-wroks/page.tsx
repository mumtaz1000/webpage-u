import React from "react";
//import Image from "next/image";
import FeaturedWorksBoxes from "./ContentBoxes";

//Images name mentioned over here where not correct

const featuredWorksImges = {
  img1: "/images/featuredimgs1.png",
  img2: "/images/featuredimgs2.png",
  img3: "/images/featuredimgs3.png",
};

const FeaturedWorks = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-bodyColor p-[200px]">
        <div className="flex flex-row ml[492.54px] p-5">
          <img src={featuredWorksImges.img1} alt="featured image" />
          <FeaturedWorksBoxes />
        </div>
        <div className="flex flex-row ml[492.54px] p-5">
          <img src={featuredWorksImges.img2} alt="featured image" />
          <FeaturedWorksBoxes />
        </div>
        <div className="flex flex-row ml[492.54px] p-5">
          <img src={featuredWorksImges.img3} alt="featured image" />
          <FeaturedWorksBoxes />
        </div>
      </div>
    </>
  );
};

export default FeaturedWorks;

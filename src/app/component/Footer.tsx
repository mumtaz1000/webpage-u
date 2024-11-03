import React from "react";
//import Image from "next/image";

//Saving svg images for social media icon from font awsome 
//and adding them
const footerImages = {
    fb: "/images/fb.svg",
    twitter: "/images/twitter.svg",
    instagram: "/images/insta.svg",
    linkedin: "/images/linkedin.svg"
};


const Footer = () => {
    return(
        <div className="bg-bodyColor px-[200px] py-[30px]">
        <div className="flex flex-row justify-center gap-5">
            <img src={footerImages.fb} alt="fb" height="20px" width="20px"/>
            <img src={footerImages.twitter} alt="twitter" height="20px" width="20px"/>
            <img src={footerImages.instagram} alt="instagram" height="20px" width="20px"/>
            <img src={footerImages.linkedin} alt="linkedin" height="20px" width="20px"/>
        </div>
        <div>
            <h1 className="flex flex-row font-bold justify-center pt-4">Copyright © 2020 All rights reserved</h1>
        </div>
        </div>
    )
}

export default Footer;
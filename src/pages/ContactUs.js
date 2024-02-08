import React from "react";
import Navbar from '../components/Navbar';
import {Routes,Route} from "react-router-dom"

import insta from "./sim/insta.png";
import linkdin from "./sim/linkedin.png";
import gmail from "./sim/gmail.png";

const Linkedin_Link = "https://www.linkedin.com/company/numetry-technologies/";
const Instagram_Link = "https://www.instagram.com/numetrytechnologies/";

const Email_Link = "mailto:info@numetry.in";

export const ContactUs = () => {
  const iconSize = "w-12 h-12 mt-[30px] "; // Adjust the size as needed

  return (
    <>
    <Routes>
<Route path="/" element={<Navbar/>}/>
</Routes>
    <div className="flex items-center justify-center gap-4">
      <a
        href={Instagram_Link}
        className={`instagram ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={insta} alt="Instagram" />
      </a>
      <a
        href={Linkedin_Link}
        className={`linkedin ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkdin} alt="LinkedIn" />
      </a>
      
      <a
        href={Email_Link}
        className={`email ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={gmail} alt="Email" />
      </a>
    </div>
    </>
  );
}
"use client";
import React, { useContext, useRef } from "react";
import { ThemeContext } from "@/app/context/themeContext";
import simpleParallax from 'simple-parallax-js';
import About from "@/componentsmain/about/about";
import Skills1 from "@/componentsmain/skills/skills";
import Footer from "@/componentsmain/layout/Footer/footer";
import Contact from "@/componentsmain/contact/contact";
import Porfolio from "@/componentsmain/portfolio/portfolio";
import {
  Backpage,
  Logo,
  LogoName,
  NavItemDecoration,
  NavStction,
  TextDecor,
} from "@/componentsmain/layout/Header1/styles";
import { Button } from "@/componentsmain/button";
import Acomplishments from "@/componentsmain/acomplishments/acompl";

function App() {
  const { changeTheme } = useContext(ThemeContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const porfolioRef = useRef<HTMLDivElement>(null);
  const compRef = useRef<HTMLDivElement>(null);


  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToacomp = () => {
    if (compRef.current) {
      compRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    if (porfolioRef.current) {
      porfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Backpage>
        <Logo>
          <NavStction>
            <NavItemDecoration />
            <LogoName onClick={scrollToAbout}>  About me </LogoName>
            <LogoName onClick={scrollToSkills}> Skills</LogoName>
            <LogoName onClick={scrollToPortfolio}>Portfolio</LogoName>
            <LogoName onClick={scrollToacomp}> Achievements </LogoName>
            <LogoName onClick={scrollToContact}>Contact</LogoName> 
            <LogoName>
              <Button onClick={changeTheme} />{" "}
            </LogoName>
          </NavStction>
        </Logo>
        <TextDecor>
         Hello i'm <br />
          Protas German
        </TextDecor>
      </Backpage>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills1 />
      </div>
      <div ref={porfolioRef}>
        <Porfolio />
        <div ref={compRef}>
          <Acomplishments/>
        </div>
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
     
    </>
  );
}
export default App;

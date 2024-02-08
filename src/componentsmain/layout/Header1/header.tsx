import { Button } from "@/componentsmain/button";
import { useContext,  } from "react";
import { ThemeContext } from "@/app/context/themeContext";
import { Logo, LogoName, NavItemDecoration, NavStction } from "./styles";

export const Header1 = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <>
      <Logo>
        <NavStction>
            <NavItemDecoration />
            <LogoName onClick={() => window.location.href = '/'}>Home</LogoName>
            <LogoName>About me</LogoName>
            <LogoName>Skills</LogoName>
            <LogoName>Portfolio</LogoName>
            <LogoName>Contact</LogoName>
            <LogoName><Button onClick={changeTheme} /></LogoName>
        </NavStction>
      </Logo>
    </>
  );
};

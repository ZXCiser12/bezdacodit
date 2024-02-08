import { ThemeContext } from "@/app/context/themeContext";
import { FC, useContext } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";

const StyledMoon = styled(IoMoonOutline)`
  cursor: pointer;
  &:hover ,
  &:focus {
    path {
      transition: 0.4s;
      fill: #000000;
      stroke: #000000;
      stroke-width: 20px;
      stroke-linecap: butt;
    }
  }
`;
const StyledSun = styled(IoSunnyOutline)`
  cursor: pointer;
  &:hover,
  &:focus {
    path {
      transition: 0.4s;
      fill: #e6ff02;
      stroke: #fbff00;
      stroke-width: 20px;
      stroke-linecap: butt;
    }
  }
`;

interface IButtonInterface {
  onClick?: () => void;
}

export const Button: FC<IButtonInterface> = ({ onClick }) => {
  const { themeMode, changeTheme } = useContext(ThemeContext);
  return (
    <div>
      {themeMode === "light" ? (
        <StyledMoon onClick={changeTheme} />
      ) : (
        <StyledSun onClick={changeTheme} />
      )}
    </div>
  );
};

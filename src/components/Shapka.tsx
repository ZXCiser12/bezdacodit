import styled from "styled-components";
import { Button } from "./button";
import { useContext } from "react";
import { ThemeContext } from "@/app/layout";

const Wrapper = styled.header`
  display: flex;

  padding: 10px 10px;
  width: 100%;

  justify-content: space-between;
  align-items: center;

  background-color: Black;
`;
export const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <Wrapper>
      <Button onClick={themeContext.toggleTheme} />
    </Wrapper>
  );
};

import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  headerBackground: "#000000",

  buttonBackground: "#000000",

  backgroundColor: "#000000", 

  textColor: "#050505",
};

export const darkTheme = {
  headerBackground: "#000000",

  
  background: "#32223D",
  textColor: "#ffffff",
};

export const GlobalStyle = createGlobalStyle`
html, body {
padding: 0;
margin: 0;

font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      

${(themeProps) => {
  switch (themeProps.theme) {
    case lightTheme:
      return lightTheme;
    default:
      return darkTheme;
  }
}};

#root{
height: 100%;

}}
`;

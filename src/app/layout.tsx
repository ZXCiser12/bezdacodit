"use client";
import { Inter } from "next/font/google";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


interface ThemeContextInterface  {
  isTheme?: {[key:string]:string};
  toggleTheme?: () => void;
}

const themeName = {
  light: {
    backgroundColor: "#e61010",
  },
  dark: {
    backgroundColor: "#3418d6",
  },
};

export const ThemeContext = createContext<ThemeContextInterface >({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTheme, setIsTheme] = useState<{}>(themeName.light);

  const toggleTheme = () => {
    isTheme === themeName.light
      ? setIsTheme(themeName.dark)
      : setIsTheme(themeName.light);
      console.log(isTheme);
  };

  return (
    <html>
      <body className={inter.className}>
        <ThemeContext.Provider value={{ isTheme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}

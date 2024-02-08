"use client";

import { useState } from "react";
import { GlobalStyle, darkTheme, lightTheme } from "./styles/GlobalStyles";
import { ThemeContext } from "./context/themeContext";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialTheme = typeof window !== 'undefined' ? window.localStorage.getItem('themeName') || 'light' : 'light';
  const [themeMode, setThemeMode] = useState(initialTheme);
  const theme = themeMode === 'light' ? darkTheme : lightTheme;

  const changeTheme = () => {
    const newThemeName = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeName);
    localStorage.setItem('themeName', newThemeName);
  };

  return (
    <html>
      <body>
        <ThemeContext.Provider value={{ themeMode, changeTheme }}>
          <GlobalStyle theme={theme} />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
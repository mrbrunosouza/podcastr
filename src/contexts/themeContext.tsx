import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import Head from 'next/head';


type ThemeContextData = {
  currentTheme: 'light' | 'dark';
  toggleTheme(): void;
};

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  function toggleTheme() {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme,
      }}
    >
      <>
        <Head>
          {
            currentTheme === 'dark' ? (
              <link
                rel="stylesheet"
                type="text/css"
                href="/themeDark.css"
              />
            ) :
              (
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="/themeLight.css"
                />
              )
          }
        </Head>
        {children}
      </>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext);
}
import { createContext, useContext, useState, useLayoutEffect, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const initialTheme = () => {
    localStorage.getItem("myTheme");
    const initialColorScheme = 
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark"
    : "light";
    return initialColorScheme;
} 


const [theme, setTheme] = useState(initialTheme);

const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    

    useLayoutEffect(() => { 
        
        localStorage.setItem("myTheme", theme);
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "dark");
           
          
        } else {
            document.documentElement.removeAttribute("data-theme", "dark");
            document.documentElement.setAttribute("data-theme", "light");
        }
        
     
    }, [theme]);
    
    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};




const useTheme = () => {
  const context = useContext(ThemeContext);
    if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};


export { ThemeProvider, useTheme };
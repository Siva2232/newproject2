// import { createContext, useContext, useEffect, useState } from "react";

// // 1️⃣ Create Context
// const ThemeContext = createContext();

// // 2️⃣ Provider Component
// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");

//   // Load saved theme
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.add(savedTheme);
//     } else {
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   // Update theme
//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";

//     document.documentElement.classList.remove(theme);
//     document.documentElement.classList.add(newTheme);

//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // 3️⃣ Custom Hook
// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

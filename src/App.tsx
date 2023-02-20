import { Suspense, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { ThemeContext } from "./theme/ThemeContext";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export function App() {
  const {setTheme, theme} = useContext(ThemeContext)
  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  }

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Main Page</Link>
      <Link to={"/about"}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

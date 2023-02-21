import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "helpers/classNames";
import { AboutPageAsync } from "pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "pages/MainPage/MainPage.async";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export function App() {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
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

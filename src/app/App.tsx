import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";

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
      <AppRouter/>
    </div>
  );
}

export default App;

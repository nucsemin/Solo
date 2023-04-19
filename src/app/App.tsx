import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import "./styles/index.scss";

function MyComponent() {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <button onClick={onToggle}>{t("Перевод")}</button>
      {t("Тестовый пример")}
    </div>
  );
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <MyComponent />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;

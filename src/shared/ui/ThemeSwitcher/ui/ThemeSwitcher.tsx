import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import s from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={classNames(s.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon/>}
    </button>
  );
};

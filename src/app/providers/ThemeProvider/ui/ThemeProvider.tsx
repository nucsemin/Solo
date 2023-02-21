import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

export const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
  const [ theme, setTheme ] = useState<Theme>(defaultTheme);

  // т.к. в провайдере value это объект, то ссылка будет всегда новая на каждый рендер компонента она будет инициализироваться заново, компонент будет перерисовываться
  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme, ])


  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

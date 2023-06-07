import { Theme, useTheme } from '1-app/providers/ThemeProvider';
import { classNames } from '6-shared/lib/classNames/classNames';
import DarkIcon from '6-shared/assets/icons/theme-dark.svg';
import LightIcon from '6-shared/assets/icons/theme-light.svg';
import { Button } from '6-shared/ui/Button';
import { ThemeButton } from '6-shared/ui/Button/ui/Button';
import s from './styles.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(s.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}

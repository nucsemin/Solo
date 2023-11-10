import { useState } from 'react';
import { classNames } from '6-shared/lib/classNames/classNames';
import { LangSwitcher } from '3-widgets/LangSwitcher';
import { ThemeSwitcher } from '3-widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from '6-shared/ui/Button';
import { SizeButton, ThemeButton } from '6-shared/ui/Button/ui/Button';
import { AppLink } from '6-shared/ui/AppLink';
import { AppRoutes, RoutePath } from '6-shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from '6-shared/ui/AppLink/ui';
import MainIcon from '6-shared/assets/icons/main.svg';
import AboutIcon from '6-shared/assets/icons/about.svg';
import MapIcon from '6-shared/assets/icons/map.svg';
import s from './styles.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const { t, i18n } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={s.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={s.items}>
                <AppLink theme={AppLinkTheme.PRIMARY} className={s.item} to={RoutePath[AppRoutes.MAIN]}>
                    <MainIcon className={s.icon} />
                    <span className={s.link}>{t('Главная страница')}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={s.item} to={RoutePath[AppRoutes.ABOUT]}>
                    <AboutIcon className={s.icon} />
                    <span className={s.link}>{t('О сайте')}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={s.item} to={RoutePath[AppRoutes.MAP]}>
                    <MapIcon className={s.icon} />
                    <span className={s.link}>{t('Map')}</span>
                </AppLink>
            </div>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
}

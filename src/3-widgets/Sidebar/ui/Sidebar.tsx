import { useState } from 'react';
import { classNames } from '6-shared/lib/classNames/classNames';
import { LangSwitcher } from '3-widgets/LangSwitcher';
import { ThemeSwitcher } from '3-widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
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
            <button type="button" onClick={onToggle}>{t('Открыть')}</button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
}

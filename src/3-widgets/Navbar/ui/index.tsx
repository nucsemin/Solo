import { classNames } from '6-shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '6-shared/ui/AppLink/ui';
import { useTranslation } from 'react-i18next';
import s from './styles.module.scss';

interface NavbarProps {
  className?: string;
}

// компоненты которые не требуют асинхронного чанка экспортировать не по дефолту, а именованным образом
export function Navbar({ className }: NavbarProps) {
    const { t, i18n } = useTranslation('navbar');

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} className={s.mainLink} to="/">
                    {t('Главная страница')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
}

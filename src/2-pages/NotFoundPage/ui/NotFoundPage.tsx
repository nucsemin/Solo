import { useTranslation } from 'react-i18next';
import { classNames } from '6-shared/lib/classNames/classNames';
import s from './styles.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export function NotFoundPage({ className }: NotFoundPageProps) {
    const { t, i18n } = useTranslation('notFound');

    return (
        <div className={classNames(s.NotFoundPage, {}, [className])}>
            {t('PageNotFound')}
        </div>
    );
}

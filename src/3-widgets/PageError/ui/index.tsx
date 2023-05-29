import { classNames } from '6-shared/lib/classNames/classNames';
import { Button } from '6-shared/ui/Button';
import { useTranslation } from 'react-i18next';

import s from './styles.module.scss';

interface PageErrorProps {
  className?: string;
}

export function PageError({ className }: PageErrorProps) {
    const { t, i18n } = useTranslation('translation');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <p>{t('An unexpected error occurred')}</p>
            <Button
                onClick={reloadPage}
            >
                {t('Reload page')}
            </Button>
        </div>
    );
}

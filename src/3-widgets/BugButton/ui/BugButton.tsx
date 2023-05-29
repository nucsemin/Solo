import { classNames } from '6-shared/lib/classNames/classNames';
import { Button } from '6-shared/ui/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.scss';

interface BugButtonProps {
  className?: string;
}

export function BugButton({ className }: BugButtonProps) {
    const { t, i18n } = useTranslation('translation');
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            className={classNames(s.BugButton, {}, [className])}
        >
            {t('Start error')}
        </Button>

    );
}

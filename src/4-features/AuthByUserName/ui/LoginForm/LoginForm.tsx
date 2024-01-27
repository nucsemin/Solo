import { classNames } from '6-shared/lib/classNames/classNames';
import { Button } from '6-shared/ui/Button';
import { Input } from '6-shared/ui/Input';
import { useTranslation } from 'react-i18next';
import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation('Sign in');

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Input
                placeholder="Введите почту"
                autoFocus
                className={s.input}
            />
            <Input
                placeholder="Введите пароль"
                className={s.input}
            />
            <Button className={s.btnForm}>{t('Войти')}</Button>
        </div>
    );
}

import { getLogin } from '4-features/AuthByUserName/model/selectors/getLogin/getLogin';
import { loginActions } from '4-features/AuthByUserName/model/slices/loginSlice';
import { classNames } from '6-shared/lib/classNames/classNames';
import { Button } from '6-shared/ui/Button';
import { Input } from '6-shared/ui/Input';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import s from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation('Sign in');
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLogin);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Input
                placeholder="Введите имя"
                autoFocus
                className={s.input}
                value={username}
                onChange={onChangeUserName}
            />
            <Input
                placeholder="Введите пароль"
                className={s.input}
                value={password}
                onChange={onChangePassword}
            />
            <Button className={s.btnForm}>{t('Войти')}</Button>
        </div>
    );
}

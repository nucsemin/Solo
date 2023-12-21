import { Modal } from '3-widgets/Modal';
import { classNames } from '6-shared/lib/classNames/classNames';
import { Button } from '6-shared/ui/Button';
import { ThemeButton } from '6-shared/ui/Button/ui/Button';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.scss';

interface NavbarProps {
  className?: string;
}

// компоненты которые не требуют асинхронного чанка экспортировать не по дефолту, а именованным образом
export function Navbar({ className }: NavbarProps) {
    const { t, i18n } = useTranslation('navbar');
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={s.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthOpen}
                onClose={onToggleModal}
            >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar.'
            </Modal>
        </div>
    );
}

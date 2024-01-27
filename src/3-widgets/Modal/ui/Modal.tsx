import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from '6-shared/lib/classNames/classNames';
import { Portal } from '6-shared/ui/Portal';
import s from './styles.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        lazy,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    // управление модалкой и автофокусом
    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    // Новые ссылки при ререндере, поэтому положил в useCallback.
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // Новые ссылки при ререндере, поэтому положил в useCallback.
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => () => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        console.log('useEffect');
        clearTimeout(timerRef.current);
        window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(s.Modal, mods, [className])}
            >
                <div className={s.overlay} onClick={closeHandler}>
                    <div className={s.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

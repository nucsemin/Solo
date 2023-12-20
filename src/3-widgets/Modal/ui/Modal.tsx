import React, {
    FC, ReactNode, useRef, useState,
} from 'react';
import { classNames } from '6-shared/lib/classNames/classNames';
import s from './styles.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.isClosing]: isClosing,
    };

    return (
        <div
            className={classNames(s.Modal, mods, [className])}
        >
            <div className={s.overlay} onClick={closeHandler}>
                <div className={s.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};

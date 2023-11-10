/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames, Mods } from '6-shared/lib/classNames/classNames';
import s from './styles.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        ...otherProps
    } = props;

    const mods: Mods = {
        [s[theme]]: true,
        [s.square]: square,
    };

    return (
        <button
            className={classNames(s.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

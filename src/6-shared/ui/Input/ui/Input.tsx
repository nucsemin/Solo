/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, FC, InputHTMLAttributes } from 'react';
import { classNames, Mods } from '6-shared/lib/classNames/classNames';
import s from './Input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'input' | 'onChange'> {
  className?: string;
  type: 'text';
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className, type, value, onChange, ...otherProps
    } = props;

    return (
        <input type={type} />
    );
};

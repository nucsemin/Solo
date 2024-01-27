/* eslint-disable react/button-has-type */
import React, {
    ButtonHTMLAttributes, FC, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from '6-shared/lib/classNames/classNames';
import s from './Input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'input' | 'onChange'> {
  className?: string;
  type?: 'text';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className, type, placeholder, value, autoFocus, onChange, ...otherProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocused = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart);
    };

    return (
        <div className={classNames(s.InputWrapper, {}, [])}>
            {placeholder && (
                <span className={s.placeholder}>{`${placeholder} >`}</span>
            )}
            <div className={s.caretkaWrapper}>
                <input
                    ref={inputRef}
                    className={s.input}
                    value={value}
                    type={type}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocused}
                    {...otherProps}
                />
                {isFocused && <span className={s.caretka} style={{ left: `${caretPosition * 9}px` }} />}
            </div>
        </div>
    );
};

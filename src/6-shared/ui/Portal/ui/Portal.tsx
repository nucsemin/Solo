import React, { FC } from 'react';
import { createPortal } from 'react-dom';

interface ButtonProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<ButtonProps> = (props) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};

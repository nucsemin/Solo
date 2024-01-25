import { Modal } from '3-widgets/Modal';
import { classNames } from '6-shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import s from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
}

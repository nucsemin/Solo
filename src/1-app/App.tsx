import { classNames } from '6-shared/lib/classNames/classNames';
import { Navbar } from '3-widgets/Navbar';
import { Sidebar } from '3-widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from '3-widgets/Modal';
import { useTranslation } from 'react-i18next';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';
/* eslint-disable react/button-has-type */

export function App() {
    const { t, i18n } = useTranslation();
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => setIsOpen(true)}>{t('toogle')}</button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standar.')}
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;

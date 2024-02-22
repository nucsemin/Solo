import { BugButton } from '3-widgets/BugButton';
import { Counter } from '5-entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t, i18n } = useTranslation('main');
    const [value, setValue] = useState('');
    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <BugButton />
        </div>
    );
}

export default MainPage;

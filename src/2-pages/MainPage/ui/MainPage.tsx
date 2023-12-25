import { BugButton } from '3-widgets/BugButton';
import { Counter } from '5-entities/Counter';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t, i18n } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <BugButton />
        </div>
    );
}

export default MainPage;

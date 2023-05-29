import { BugButton } from '3-widgets/BugButton';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t, i18n } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
        </div>
    );
}

export default MainPage;

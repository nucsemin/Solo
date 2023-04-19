import { useTranslation } from "react-i18next";

function MainPage() {
  const { t, i18n } = useTranslation('about');

  return (
    <div>
      {t('Главная страница')}
    </div>
  );
}

export default MainPage;

import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {t('О сайте')}
    </div>
  );
}

export default AboutPage;

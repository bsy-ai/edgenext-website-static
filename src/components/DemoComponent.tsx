import React from 'react';
import { useTranslation } from 'react-i18next';

const DemoComponent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <h1>{t('welcome.title')}</h1>
      <p>{t('common.loading')}</p>
      <button>{t('common.confirm')}</button>
      <span>{t('common.error')}</span>
      <div>{t('common.retry')}</div>
      <input placeholder={t('form.name')} />
      <img alt={t('common.logo')} src="/logo.png" />
    </div>
  );
};

export default DemoComponent;

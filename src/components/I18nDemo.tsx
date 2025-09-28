import React from 'react';
import { useTranslation } from 'react-i18next';

const I18nDemo: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {t('common.loading')} - i18n Demo
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            Current Language: {i18n.language}
          </h2>
          <p className="text-blue-700">
            This page demonstrates the internationalization features.
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            Translation Examples
          </h2>
          <ul className="space-y-2 text-green-700">
            <li>• {t('common.loading')}</li>
            <li>• {t('common.error')}</li>
            <li>• {t('common.retry')}</li>
            <li>• {t('common.cancel')}</li>
            <li>• {t('common.confirm')}</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          How to use translations in your components:
        </h3>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <p>{t('common.description')}</p>
    </div>
  );
};`}
        </pre>
      </div>
    </div>
  );
};

export default I18nDemo;

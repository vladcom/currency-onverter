import './scss/style.scss';
import './i18n';

import { Card, Typography } from '@mui/material';

import { Converter } from './view/components/Converter/Converter';
import CurrencyContextProvider from './context/CurrencyContext/CurrencyProvider'
import { Header } from './view/components/Header/Header';
import { PreferencesContainer } from './view/components/PreferencesContainer/PreferencesContainer';
import PreferencesProvider from './context/PeferencesContext/PreferencesProvider';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <PreferencesProvider>
      <CurrencyContextProvider>
        <PreferencesContainer />
        <Typography variant='h5' gutterBottom>{t('currency_converter')}</Typography>
        <Card sx={{ maxWidth: 345, width: 345 }}>
          <Header />
          <Converter />
        </Card>
      </CurrencyContextProvider>
    </PreferencesProvider>
  );
}

export default App;

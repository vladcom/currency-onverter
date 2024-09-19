import { Card } from '@mui/material';
import './scss/style.scss';
import { Header } from './view/components/Header/Header';
import { Converter } from './view/components/Converter/Converter';
import CurrencyContextProvider from './context/CurrencyContext/CurrencyProvider'

function App() {
  return (
    <CurrencyContextProvider>
      <Card sx={{ maxWidth: 345, width: 345 }}>
        <Header />
        <Converter />
      </Card>
    </CurrencyContextProvider>
  );
}

export default App;
 
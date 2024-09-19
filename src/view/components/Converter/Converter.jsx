import './style.scss';

import { IconButton } from '@mui/material';
import { InputField } from '../InputField/InputField';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export const Converter = () => {
  const { t } = useTranslation();
  const [pairOne, setPairOne] = useState({ amount: 0.00, cur: 'UAH'});
  const [pairTwo, setPairTwo] = useState({ amount: 0.00, cur: 'USD' });

  const switchStates = () => {
    const temp = pairOne;
    setPairOne(pairTwo);
    setPairTwo(temp);
  };

  return (
    <div className="converter">
      <InputField value={pairOne} pairTwo={pairTwo} second={false} setPairOne={setPairOne} setPairTwo={setPairTwo} label={t('giving')} />
      <div className="converter_change">
        <IconButton onClick={() => switchStates()}>
          <SyncAltIcon />
        </IconButton>
      </div>
      <InputField value={pairTwo} pairOne={pairOne} second setPairOne={setPairOne} setPairTwo={setPairTwo} label={t('receiving')} />
    </div>
  );
};
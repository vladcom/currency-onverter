import { useState } from "react";
import { InputField } from '../InputField/InputField';
import { IconButton } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import './style.scss';

export const Converter = () => {
  const [pairOne, setPairOne] = useState({ amount: 0.00, cur: 'UAH'});
  const [pairTwo, setPairTwo] = useState({ amount: 0.00, cur: 'USD' });

  const switchStates = () => {
    const temp = pairOne;
    setPairOne(pairTwo);
    setPairTwo(temp);
  };

  return (
    <div className="converter">
      <InputField value={pairOne} pairTwo={pairTwo} second={false} setPairOne={setPairOne} setPairTwo={setPairTwo} label="Віддаю" />
      <div className="converter_change">
        <IconButton onClick={() => switchStates()}>
          <SyncAltIcon />
        </IconButton>
      </div>
      <InputField value={pairTwo} pairOne={pairOne} second setPairOne={setPairOne} setPairTwo={setPairTwo} label="Отримую" />
    </div>
  );
};
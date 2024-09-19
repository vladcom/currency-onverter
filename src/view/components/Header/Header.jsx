import { useContext, useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import { CurrencyContext } from "../../../context/CurrencyContext/currencyContext";
import { isNull } from "../../../utils/isNull";
import { rateConverter } from "../../../utils/rateConverter";
import './style.scss';

export const Header = () => {
  const { currency, isCurrencyLoading } = useContext(CurrencyContext);
  const [usd, setUsd] = useState(null);
  const [eur, setEur] = useState(null);
  const isLoading = isCurrencyLoading || !currency.length || isNull(usd) || isNull(eur);

  useEffect(() => {
    if (isNull(usd) && isNull(eur) && currency.length) {
      const tempUsd = currency.find(cur => cur.name === 'USD');
      const tempEur = currency.find(cur => cur.name === 'EUR');
      setUsd(tempUsd);
      setEur(tempEur);
    }
  }, [usd, eur, currency]);

  if (isLoading) {
    return <Skeleton variant="rectangular" width={345} height={45} />;
  }

  return (
    <div className="header">
      <div className="header_item">
        <span>{usd.name}:</span>
        <span>{rateConverter(usd.rate)}</span>
      </div>
      <div className="header_item">
        <span>{eur.name}:</span>
        <span>{rateConverter(eur.rate)}</span>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { CurrencyContext } from "./currencyContext";

const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState([]);
  const [isCurrencyLoading, setIsCurrencyLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsCurrencyLoading(true);
      const url = 'https://v6.exchangerate-api.com/v6/59c22aa15c1b756917e7a3f0/latest/UAH';
      const response = await fetch(url);
      const json = await response.json();
      if (json.conversion_rates) {
        const rates = json.conversion_rates;
        const transformedArr = Object.keys(rates).map((key, index) => {
          return { name: key, id: index + 1, rate: Number(rates[key]) };
        })
        setCurrency(transformedArr);
      }
      setIsCurrencyLoading(false);
    } catch (e) {
      console.log(e);
      setIsCurrencyLoading(false);
    }
  };

  const fetchConverter = async ({ cur1, cur2, amount }) => {
    try {
      const url = `https://v6.exchangerate-api.com/v6/59c22aa15c1b756917e7a3f0/pair/${cur1}/${cur2}/${amount}`;
      const response = await fetch(url);
      const json = await response.json();
      if (json.conversion_result) {
        const result = json.conversion_result;
        return { result };
      } else {
        return { result: 0 };
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (currency && !currency.length) {
      fetchData();
    }
  }, [currency]);

  const values = {
    currency,
    fetchConverter,
    isCurrencyLoading
  };

  if (children instanceof Function) {
    return children;
  }

  return (
    <CurrencyContext.Provider value={values}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
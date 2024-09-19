import { MenuItem, Select, Skeleton, TextField } from "@mui/material";
import { useCallback, useContext } from "react";

import { CurrencyContext } from "../../../context/CurrencyContext/currencyContext";

export const InputField = ({ second, value, label, setPairOne, setPairTwo, pairOne, pairTwo}) => {
  const { currency,  fetchConverter, isCurrencyLoading } = useContext(CurrencyContext);
  const { amount, cur } = value;

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    const number = Number(value);

    if (second) {
      if (name === 'number') {
        setPairTwo({ amount: number, cur });
        fetchConverter({ cur1: cur, cur2: pairOne.cur, amount: number }).then(({ result }) => setPairOne({ cur: pairOne.cur, amount: result.toFixed(2) }));
      } else {
        setPairTwo({ amount, cur: value });
        fetchConverter({ cur1: value, cur2: pairOne.cur, amount }).then(({ result }) => setPairOne({ cur: pairOne.cur, amount: result.toFixed(2) }));
      }
    } else {
      if (name === 'number') {
        setPairOne({ cur, amount: number });
        fetchConverter({ cur1: cur, cur2: pairTwo.cur, amount: number }).then(({ result }) => setPairTwo({ cur: pairTwo.cur, amount: result.toFixed(2) }));
        
      } else {
        setPairOne({ amount, cur: value });
        fetchConverter({ cur1: value, cur2: pairTwo.cur, amount }).then(({ result }) => setPairTwo({ cur: pairTwo.cur, amount: result.toFixed(2) }));
      
      }
    }
  }, [amount, cur, pairOne, pairTwo, second, setPairOne, setPairTwo, fetchConverter]);

  if (isCurrencyLoading) {
    return <Skeleton variant="rectangular" width={325} height={59} />;
  }

  return (
    <TextField 
      fullWidth
      label={label}
      value={value.amount}
      name="number"
      defaultValue={0}
      onChange={onChange}
      type="number"
      placeholder={label}
      slotProps={{
        input: {
          min: 0,
          endAdornment: (
            <Select 
              placeholder="1"
              value={value.cur}
              defaultValue={second ? 'USD' : 'UAH'}
              disableUnderline={true}
              name="currency"
              onChange={onChange}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
                }}
            >
              {currency && 
                currency.map((item) => (
                  <MenuItem key={item.id} value={item.name} name={item.name}>{item.name}</MenuItem>
                ))
              }
            </Select>
          )
        }
      }}
    />
  );
};
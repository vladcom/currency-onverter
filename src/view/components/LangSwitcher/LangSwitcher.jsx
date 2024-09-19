import './style.scss';

import { MenuItem, Select } from '@mui/material';

import en from '../../../assets/en.svg';
import pl from '../../../assets/pl.svg';
import ua from '../../../assets/ua.svg';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
  };

  const renderValue = (selected) => {
    if (!selected) {
      return '';
    }

    const iconMap = {
      en: <img src={en} alt="English" />,
      ua: <img src={ua} alt="Ukrainian" />,
      pl: <img src={pl} alt="Polish" />,
    }; 

    return (
      <div className="langSwitch_item" display="flex" alignItems="center">
        {iconMap[selected]}
        <span>{selected.toUpperCase()}</span>
      </div>
    );
  };

  return (
    <div>
      <Select
        fullWidth
        label="language switcher"
        size="small"
        className='langSwitch'
        defaultValue={i18n.language}
        onChange={changeLanguage}
        value={i18n.language}
        renderValue={renderValue}
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
      >
        <MenuItem value='en'>
          <img src={en} alt="English" className='langSwitch_selectItem' />
          <span className='langSwitch_selectLabel'>EN</span>
        </MenuItem>
        <MenuItem value='ua'>
          <img src={ua} alt="Ukrainian" className='langSwitch_selectItem' />
          <span className='langSwitch_selectLabel'>UA</span>
        </MenuItem>
        <MenuItem value='pl'>
          <img src={pl} alt="Polish" className='langSwitch_selectItem' />
          <span className='langSwitch_selectLabel'>PL</span>
        </MenuItem>
      </Select>
    </div>
  );
}

export default LangSwitcher;

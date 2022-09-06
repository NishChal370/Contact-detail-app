import { NepalIcon, UKIcon } from "../assets";
import LabelWithIcon from "../component/Modal/LabelWithIcon";

type languageOption = {
      label: JSX.Element,
      key: string,
      value: string,
}

export const LANGUAGE_OPTIONS: languageOption[] = [
      {  
            label: <LabelWithIcon icon={UKIcon} text='English'/>,
            key: 'en', 
            value:'en',
      },
      { 
            label: <LabelWithIcon icon={NepalIcon} text='Nepali'/>, 
            key: 'np',
            value:'np', 
      },
];

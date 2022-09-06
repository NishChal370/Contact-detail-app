import { useState } from "react";
import i18next from "i18next";
import { nanoid } from "nanoid";
import { Checkbox, Modal } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { LANGUAGE_OPTIONS } from "../../language/constant";


export interface ILanguageSelector  { 
      children: JSX.Element;
}

function LanguageSelector({children}: ILanguageSelector ) {
      const [isModalOpen, setIsModalOpen] = useState<boolean>(localStorage.getItem("showLngSelector") === null);

      const onChange = ({target}: CheckboxChangeEvent) => {

            i18next.changeLanguage(target.value);

            setIsModalOpen(false);
            localStorage.setItem('showLngSelector', 'true');
      };

      if(isModalOpen) return (
            <Modal title="Select yours' language" visible={isModalOpen} footer={null} closable={false} width={300}>
                  {LANGUAGE_OPTIONS.map((language) => {
                        return (
                              <div className="col-sm-12 px-3 py-2" key={nanoid()}>
                                    <Checkbox
                                          key={language.value}
                                          onChange={onChange}
                                          value={language.key}  
                                    >
                                          {language.label}
                                    </Checkbox>
                              </div>
                        );
                  }) }
            </Modal>
      )

      return <>{children}</>
}

export default LanguageSelector
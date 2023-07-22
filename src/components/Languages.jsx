import { useState } from "react";
import { languagesIcon, close } from "../assets";
import { slideIn } from "../utils/motion";
import { languages } from "../constants";
import { motion } from 'framer-motion';
import i18next from "i18next";
import { useTranslation } from "react-i18next";


const LanguagesMenu = () => {
    const { t } = useTranslation();
    var languageCode = i18next.language;
    var languageStart

    if(languageCode == "en"){
      languageStart = "English";
    }
    else if(languageCode == "fr"){
      languageStart = "French";
    }
    else{
      languageStart = "Japanese";
    }
    const [language, setLanguage] = useState(false);
    const [languageSelected, setLanguageSelected] = useState(languageStart);
    const switchMode = () => {
        setLanguage(!language);
    };

    return (
        <div className="z-20"
        onClick={switchMode}
        >
            <img
                src= {language ? close : languagesIcon}
                className = {`${language ? " " : "invert "} w-7 h-7 object-contain transition-all duration-150 ease-in-out cursor-pointer hover:scale-110`}
                alt="logo-languages"
            />

            <div className={`${!language ? 'hidden'
            : 'flex'} p-6 bg-tertiary absolute top-11 sm:-right-[90px] -mx-4 my-2 min-w-[190px] z-10 rounded-lg border border-[#a5b4fc] dark:border-white right-[0px]`}>
              <ul className='list-none flex justify-end items-center flex-col gap-4'>
                {languages.map((languageSelection, index) => (
                  <motion.div
                    key={languageSelection.language}
                    variants={
                    slideIn("up", "tween", (index)*0.2, 0.2)
                    }
                  >
                    <li
                      className={`${
                        languageSelection.language == languageSelected
                          ? "text-white"
                          : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px]
                       transition-all duration-200 ease-in-out hover:scale-110 hover:text-white flex gap-5 items-center`}
                       onClick={() => {
                        setLanguageSelected(languageSelection.language);
                        i18next.changeLanguage(languageSelection.code, (err, t) => {
                          if (err) return console.log('something went wrong loading', err);
                         t('key');
                        });
                       }}
                      >
                      <img src={languageSelection.icon} className="w-[25%] h-[25%]"/>
                      <a className={
                        languageSelection.language == languageSelected
                          ? "scale-110"
                          : ""
                      }>{t(`languages.${index}.language`)}</a>
                    </li>
                  </motion.div>
                ))}
              </ul>
            </div>
        </div>
    )
}

export default LanguagesMenu;

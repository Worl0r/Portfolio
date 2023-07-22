import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

import { me } from '../assets/index';

const ServiceCard = ({ index, title, icon }) => {
  const { t } = useTranslation();

  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("left", "spring", index * 0.5, 0.75)}
        className='w-[110%] green-pink-gradient p-[2px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-inputBackground dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col'
        >
          <a href='../constants/cv/CV_CONVERS_Brice_EN.pdf' download="CV_CONVERS_BRICE" className=' flex justify-evenly items-center flex-col gap-5'>
            <img
              src={icon}
              alt='web-development'
              className='w-16 h-16 object-contain'
            />

            <h3 className='text-white text-[20px] font-bold text-center'>
              {t("service.cv")}
            </h3>
          </a>

        </div>
      </motion.div>
    </Tilt>
  )
};



const About = () => {
  const { t } = useTranslation();

  return (
    <div className='xl-flex flex-col justify-start rounded-xl bg-primaryLight p-10 dark:bg-transparent shadow-2xl'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mx-10`}>{t("about.introduction")}</p>
        <h2 className={`${styles.sectionHeadText} mx-10 `}>{t("about.overview")}</h2>
      </motion.div>

      <div className=' flex flex-col lg:flex-row  justify-start align-middle items-center'>
        <div className='flex-1'>
          <motion.p
            variants={textVariant()}
            className={`${styles.colorText} mt-5 text-[17px] max-w-lg leading-[23px] items-center mx-10 pb-[40px]`}
          >
            <p className=''>
              {t("about.description")}
            </p>
          </motion.p>

          <motion.p
            variants={fadeIn("right", "spring", 0.2, 1)}
          >
            <div className='gap-11 xl:mt-[70px] flex flex-col lg:flex lg:flex-row justify-center items-center p-[40px] rounded-2xl '>
              <div className='justify-center right-[400px]'>
                {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
              ))}
              </div>
              <div className={`${styles.colorTextSecondary}mt-[35px] xl:mt-0 ml-5 text-[28px] flex items-center`}>
                {t("about.try")}
              </div>
            </div>
          </motion.p>
        </div>

        <motion.p
            variants={fadeIn("left", "spring", 0.1 +0.5, 1)}
        >
          <div className='lg:w-[350px] lg:h-[350px] xl:w-[550px] xl:h-[550px] xl:-mt-[100px] ml-0 rounded-full p-[20px] bg-inputBackground dark:bg-tertiary border-2 border-tertiary dark:border-black'>
            <img src={me} alt='me-photo' className='shadow-card rounded-full object-center'/>
          </div>
        </motion.p>
      </div>
  </div>
  )
}

export default SectionWrapper(About, "about")

import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { styles } from '../styles';
import { aboutEN, services } from '../constants';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';
import { me } from '../assets/index';

const ServiceCard = ({ index, CV, icon }) => {
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
          <a href={CV} download="CV_CONVERS_BRICE" className=' flex justify-evenly items-center flex-col gap-5'>
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
    <div className='xl-flex flex-col justify-start rounded-xl bg-primaryLight dark:bg-transparent shadow-2xl sm:p-10 -m-4 p-4'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("about.introduction")}</p>
        <h2 className={`${styles.sectionHeadText}`}>
          {t("about.overview")}
          </h2>
      </motion.div>

      <motion.p
            variants={textVariant()}
            className={`${styles.colorText} mt-5 text-[17px] max-w-lg leading-[23px] items-center pb-[0px]`}
          >
            {t("about.description")}
      </motion.p>

      <div className=' flex flex-col lg:flex-row  justify-start align-middle items-center'>
        <div className='flex-1'>
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 1)}
          >
            <div className='gap-11 xl:mt-[70px] flex flex-col lg:flex lg:flex-row justify-center items-center p-[40px] rounded-2xl '>
              <div className='justify-center right-[400px]'>
                {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} CV={aboutEN[0].cvEN} {...service} />
              ))}
              </div>
              <div className={`${styles.colorTextSecondary}mt-[35px] xl:mt-0 ml-5 text-[28px] flex items-center`}>
                {t("about.try")}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
            variants={fadeIn("left", "spring", 0.1 +0.5, 1)}
        >
          <div className='lg:w-[350px] lg:h-[350px] xl:w-[550px] xl:h-[550px] xl:-mt-[210px] lg:-mt-[210px] ml-0 rounded-full p-[20px] bg-inputBackground dark:bg-tertiary border-2 border-tertiary dark:border-black'>
            <img src={me} alt='me-photo' className='shadow-card rounded-full object-center'/>
          </div>
        </motion.div>
      </div>
  </div>
  )
}

export default SectionWrapper(About, "about")

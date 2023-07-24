import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc";
import { technologies, categories } from "../constants";
import { styles } from '../styles';
import { fadeIn, textVariant} from '../utils/motion';
import { useState } from 'react';
import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next";

const SkillCard = ({ index, icon, name, link }) => {

  return(
  <Tilt className='shadow-card w-auto xl:w-[230px]  green-pink-gradient p-[1px] rounded-[20px]'>
      <a href={link} target="_blank">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=' h-full hover:cursor-pointer bg-inputBackground dark:bg-[#1d1a49] rounded-[20px] pt-4 px-5 flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={name} className='justify-self-auto w-[65px] h-[65px] lg:w-[95px] lg:h-[95px] transition-all duration-200 ease-in-out'/>
          <span className='m-4 flex justify-center cursor-text text-white'>{name}</span>
        </div>
      </a>
  </Tilt>)
};

const Skills = () => {
  const [active, setActive] = useState(categories[0].name);
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={`${styles.padding} bg-tertiaryLight shadow-2xl rounded-xl dark:bg-transparent sm:p-10 -m-4 p-4`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("skills.titles.subHead")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("skills.titles.head")}</h2>
      </motion.div>

      <motion.div
      variants={fadeIn("left", "spring", 0.5, 0.75)}
      >
        <div className='flex flex-col gap-5 lg:flex-row w-full mt-8 items-center lg:items-start'>
          <div className='flex-row relative h-full max-h-[575px] ms:flex-col lg:flex-1 lg:flex-col justify-center items-center rounded-lg lg:mt-11'>
            {categories.map(
              (category, index) => (
                <motion.div
                variants={fadeIn("right", "spring", 0.75 + index * 0.2, 0.5)}
                key={category.name}
                >
                <div className={`${active == category.name ? "bg-inputBackground dark:bg-indigo-950 text-white-100" : "bg-indigo-950 dark:bg-tertiary"} text-secondary hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out border border-black z-[3] w-[280px] lg:-mr-[40px] rounded-lg whitespace-nowrap text-lg  py-[20px] text-center `}
                  onClick={() => {
                    setActive(category.name)
                    setToggle(!toggle)
                  }}
                >
                  <p>
                    {t(`skills.categories.${index}`)}
                  </p>
                </div>
                </motion.div>
              )
            )}
          </div>

          <div className=' w-[320px] lg:w-full min-h-[530px] rounded-2xl p-[70px] flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 bg-primaryLight dark:bg-tertiary gap-10 xl:gap-x-10 xl:gap-y-5 dark:border-b-2'>
            {technologies.map(
              (technology, index) => (
                <div key={`${technology.category}-${index}`} className={`${active == technology.category ? "": "hidden transition-all ease-in-out duration-200"}`}>
                  <motion.div
                    variants={fadeIn("up", "spring", 1.75, 0.6)}
                  >
                    <a className="bg-white-100 rounded-full hidden">
                      <img src={technology.icon} alt={technology.name} className='justify-self-auto w-[95px] h-[95px] hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out'/>
                      <span className='m-4 flex justify-center'>{technology.name}</span>
                    </a>
                    <SkillCard key={technology.name} index={index} icon={technology.icon} name={technology.name} link={technology.link} />
                  </motion.div>
                </div>
              )
            )
            }
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Skills, "skills");

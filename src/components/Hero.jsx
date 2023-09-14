import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { staggerContainer } from "../utils/motion";
import { useTranslation } from "react-i18next";
import '../index.css'
import { styles } from '../styles';
import { DiverCanvas, StarsCanvas } from './canvas';
import { hero } from '../constants';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='relative w-scren h-screen mx-auto bg-black bg-opacity-25 dark:bg-transparent'>
      <StarsCanvas />
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        >
        <div className={`${styles.paddingX} absolute inset-0 md:top-[120px] top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5 `}>

        <motion.div
          variants={
            fadeIn("right", "spring", 1+0.5, 2)
          }
        >
          <div className='flex flex-col justify-center items-center mt-7'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 blue-gradient' />
          </div>
        </motion.div>

        <div className='z-10'>
          <motion.div
            variants={
            fadeIn("right", "spring", 1, 2)
            }
          >
            <p className={`${styles.heroSubText} mt-[17px] text-secondary dark:text-indigo-100 `}>
             {t("hero.hi")}
            </p>
          </motion.div>

          <motion.div
          variants={
          fadeIn("right", "spring", 1+0.2+0.5, 2)
          }
          className='flex-[1]'
          >
            <h1 className={`${styles.heroHeadText} leading-normal`}>
              {t("hero.name")}
            </h1>
          </motion.div>

          <motion.div
            variants={
              fadeIn("right", "spring", 1+0.7+0.5, 2)
            }
            className='flex-[1] max-w-3xl'
          >
            <p className={`${styles.heroSubText} rounded-xl text-white`}>
              {t("hero.purpose.0")}
                <a href={hero[0].schoolLink} target='_blank' rel="noreferrer">
                  <span className='hover:underline underline-offset-4 group-hover:transition-all ease-in-out duration-200 font-bold '>
                    {t("hero.purpose.1")}
                  </span>
                </a>
              <br className='sm:block hidden'/>
              {t("hero.purpose.2")} <span className='font-bold'>{t("hero.purpose.3")}</span> {t("hero.purpose.4")} <span className='font-bold'>{t("hero.purpose.5")}</span>
            </p>
          </motion.div>
        </div>

        <motion.div
            variants={
              fadeIn("left", "spring", 1+0.2, 1.75)
            }
            className={`absolute hidden md:flex -top-10 h-full right-10 mx-4 my-60 min-w-[500px] min-h-[550px] md:z-0 z-[-1] rounded-full `}
          >
            <DiverCanvas/>
        </motion.div>

        <motion.div
            variants={
              fadeIn("up", "spring", 1+0.7+0.5+0.5, 2)
            }
            className={`absolute bottom-20 sm:bottom-12 lg:bottom-0 flex justify-left items-center ${styles.heroSubText}
          dark:text-white text-secondary
          `}
        >
          <div className='flex gap-5 justify-center items-center'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 blue-gradient' />
          </div>

          <div className=' bg-blue max-w-xl m-auto rounded-xl xl:bg-transparent dark:xl:bg-transparent md:bg-inputBackground dark:md:bg-black p-2 opacity-90 bg-transparent dark:bg-transparent'>
              {t("hero.dive")}
          </div>

          <div className=' flex-row justify-left items-center mr-10 p-6 rounded-full z-20 xl:bg-transparent dark:xl:bg-transparent md:bg-inputBackground dark:md:bg-black opacity-90 bg-transparent dark:bg-transparent'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] border-4 border-white dark:border-secondary flex justify-center items-start p-2 rounded-full hover:scale-110 transition-all ease-in-out duration-200'>
                <motion.div
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration:1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='w-3 h-3 rounded-full bg-white dark:bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
      </motion.section>
    </section>
  )
}

export default Hero;

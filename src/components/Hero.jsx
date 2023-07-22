import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { staggerContainer } from "../utils/motion";
import { useTranslation } from "react-i18next";
import '../index.css'
import { styles } from '../styles';
import { DiverCanvas, StarsCanvas } from './canvas';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='relative w-scren h-screen mx-auto bg-black bg-opacity-25 dark:bg-transparent'>
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <StarsCanvas />
        <motion.div
          variants={
            fadeIn("right", "spring", 1+0.5, 2)
          }
        >
          <div className='flex flex-col justify-center items-center mt-5'>
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
            <p className={`${styles.heroSubText} mt-2 text-white dark:text-indigo-100`}>
             {t("hero.hi")}
            </p>
          </motion.div>

          <motion.div
          variants={
          fadeIn("right", "spring", 1+0.2+0.5, 2)
          }
          className='flex-[1]'
          >
            <h1 className={`${styles.heroHeadText}
            `}>
              <span className='text-white'>
              {t("hero.name")}
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={
              fadeIn("right", "spring", 1+0.7+0.5, 2)
            }
            className='flex-[1] max-w-3xl'
          >
            <p className={`${styles.heroSubText} text-white`}>
              {t("hero.purpose.0")}
              <br className='sm:block hidden'/>
              {t("hero.purpose.1")}<span className='font-bold'>{t("hero.purpose.2")}</span> {t("hero.purpose.3")} <span className='font-bold'>{t("hero.purpose.4")}</span>
            </p>
          </motion.div>
        </div>

        <motion.div
            variants={
              fadeIn("left", "spring", 1+0.2, 1.75)
            }
            className={`absolute hidden md:flex -top-10 h-full right-10 mx-4 my-60 min-w-[500px] min-h-[500px] md:z-0 z-[-1] rounded-full `}
          >
            <DiverCanvas/>
        </motion.div>

        <motion.div
            variants={
              fadeIn("up", "spring", 1+0.7+0.5+0.5, 2)
            }
            className={`absolute bottom-32 flex justify-left items-center ${styles.heroSubText}
          dark:text-white text-secondary
          `}
        >
          <div className='w-5 h-5 ml-0 rounded-full bg-[#915eff]' />
          <div className='ml-10 bg-blue max-w-xl'>
            {t("hero.dive")}
          </div>

          <div className='absolute left-[700px] flex justify-left items-center'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] border-4 border-white dark:border-secondary flex justify-center items-start p-2 rounded-full hover:scale-110 transition-all ease-in-out duration-200'>
                <motion.dev
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

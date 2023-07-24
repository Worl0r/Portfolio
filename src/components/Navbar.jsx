import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { staggerContainer } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { DarkMode, LanguagesMenu } from "./"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <nav>
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}

          className={`
          ${styles.paddingX}
          w-full flex items-center py-5 fixed top-0 z-20  bg-primaryLight dark:bg-primary`}
        >
          <div className='w-full flex justify-between items-center max-w-7x1 mx-auto gap-10'>

          <motion.div
            variants={
              slideIn("up", "tween", 0, 0.2)
            }
            className="text-white"
          >
            <Link
              to="/"
              className='flex items-center gap-2'
              onClick={
                () => {
                  setActive("");
                  window.scrollTo(0, 0);
                }
              }
            >
              <img src={logo} alt="logo" className='w-9 h-9 object-contain rounded-lg hover:scale-110 transition-transform ease-in-out duration-200'/>
              <p className='hidden colorText text-[18px] cursor-pointer sm:flex'>&nbsp;
                <span >
                  Brice Convers&nbsp;
                </span>
              <span>|</span>
              <span className="sm:block hidden font-bold">&nbsp;{t("navBar.role")}</span></p>
            </Link>
          </motion.div>

          <motion.div
            variants={
              slideIn("up", "tween", 0.2, 0.4)
            }
          >
            <DarkMode />
          </motion.div>

          <motion.div
            variants={
              slideIn("up", "tween", 0.4, 0.4)
            }
          >
            <LanguagesMenu />
          </motion.div>

          <ul className='list-none hidden xl:flex flex-row gap-10'>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                variants={
                slideIn("up", "tween", (index+2)*0.4, 0.2)
              }
              >
                <li
                  key={link.id}
                  className={`${
                    active == link.title
                      ? styles.colorTextNavBarSelected
                      : styles.colorTextNavBar
                  } ${styles.colorTextNavBarHover} transition-all duration-200 ease-in-out hover:scale-110 text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                  >
                  <a href={`#${link.id}`}>{t(`navLinks.${index}.title`)}</a>
                </li>
              </motion.div>
            ))}
          </ul>

          <div className='xl:hidden flex justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`${toggle ? " " : "scale-[80%] "} w-[80px] h-[28px] object-contain cursor-pointer`}
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden'
            : 'flex'} p-6 bg-tertiary border border-[#a5b4fc] dark:border-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    variants={
                    slideIn("up", "tween", (index+2)*0.4, 0.2)
                    }
                  >
                    <li
                      className={`${
                        active == link.title
                          ? styles.colorTextNavBarSelected
                          : styles.colorTextNavBar
                      } ${styles.colorTextNavBarHover} font-poppins font-medium cursor-pointer text-[16px]
                       transition-all duration-200 ease-in-out hover:scale-110`}
                      onClick={() => {
                        setActive(link.title)
                        setToggle(!toggle)
                      }}
                      >
                      <a href={`#${link.id}`}>{t(`navLinks.${index}.title`)}</a>
                    </li>
                  </motion.div>
                ))}
              </ul>
            </div>
          </div>

        </div>
        </motion.section>
    </nav>

  )
}

export default Navbar;

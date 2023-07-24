import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { useState } from 'react';


const ExperienceCard = ({experience, index}) => {
  const { t } = useTranslation();

  return(
      <VerticalTimelineElement
        contentStyle={{
          background: '#1d1836',
          color: '#fff'
        }}
        contentArrowStyle={{borderRight: '7px solid #232631'}}
        date={t(`experiences.${index}.date`)}
        iconStyle={{
          background: 'experience.iconBg'
        }}
        icon={
          <a href={experience.link} target="_blank" className='cursor-pointer flex overflow-visible rounded-full justify-center items-center w-full h-full bg-white transition-all duration-200 ease-in-out hover:scale-[140%] '>
            <img
              src={experience.icon}
              alt={t(`experiences.${index}.company_name`)}
              className='w-[90%] h-[90%] object-contain rounded-full'
            />
          </a>
        }
      >
        <div>
          <h3 className='text-white text-[28px] font-bold'>
          {t(`experiences.${index}.title`)}
          </h3>
          <p className='text-secondary text-[16px] font-semibold'
            style={{margin: 0}}
          >
            {t(`experiences.${index}.company_name`)}
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, subIndex) => (
            <li
              key={`experience-point-${subIndex}`}
              className='text-white-100 text-[16px] pl-1 tracking-wider'
            >
            {t(`experiences.${index}.points.${subIndex}`)}
            </li>
          ))}
        </ul>
        <p className='text-secondary font-medium text-[16px]'>
            <span className='red-text-gradient'>📌 &nbsp;</span> {t(`experiences.${index}.location`)}
        </p>

      </VerticalTimelineElement>
  )
}

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className='rounded-xl bg-primaryLight dark:bg-transparent shadow-2xl sm:py-10 sm:p-10 -m-4 p-4'>

        <p className={`${styles.sectionSubText} md:mx-10 w-full`}>
          {t("experiences.titles.subHead")}
        </p>
        <h2 className={`${styles.sectionHeadText} md:mx-10 w-full`} >
          {t("experiences.titles.head")}
        </h2>


      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key ={index} experience={experience} index={index} />
            ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "work");

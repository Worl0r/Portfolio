import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { educations } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const EducationCard = ({education, index}) => {
  const { t } = useTranslation();
  return(
      <VerticalTimelineElement
        contentStyle={{
          background: '#1d1836',
          color: '#fff'
        }}
        contentArrowStyle={{borderRight: '7px solid #232631'}}
        date={t(`educations.content.${index}.date`)}
        iconStyle={{
          background: 'experience.iconBg'
        }}
        icon={
            <a href={education.link} target="_blank" className='cursor-pointer flex overflow-visible rounded-full justify-center items-center w-full h-full bg-white transition-all duration-200 ease-in-out hover:scale-[140%] '>
              <img
                src={education.icon}
                alt={t(`educations.content.${index}.school_name`)}
                className='w-[90%] h-[90%] object-contain rounded-full'
              />
            </a>
        }
      >
        <div>
          <h3 className='text-white text-[28px] font-bold'>
          {t(`educations.content.${index}.title`)}
          </h3>
          <p className='text-secondary text-[16px] font-semibold'
            style={{margin: 0}}
          >
            {t(`educations.content.${index}.school_name`)}
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {education.points.map((point, subIndex) => (
            <li
              key={`education-point-${subIndex}`}
              className='text-white-100 text-[16px] pl-1 tracking-wider'
            >
            {t(`educations.content.${index}.points.${subIndex}`)}
            </li>
          ))}
        </ul>
        <p className='text-secondary font-medium text-[16px]'>
            <span className='red-text-gradient'>📌 &nbsp;</span> {t(`educations.content.${index}.location`)}
        </p>
      </VerticalTimelineElement>
  )
}

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className='rounded-xl bg-primaryLight p-10 dark:bg-transparent shadow-2xl'>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}z-0`}>{t("educations.titles.subHead")}</p>
        <h2 className={`${styles.sectionHeadText} `}>{t("educations.titles.head")}</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educations.map((education, index) => (
              <EducationCard key ={index} education={education} index={index} />
            ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Education, "education");

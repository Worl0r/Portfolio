import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const EventCard = ({
  index,
  linkLogo,
  secondImage,
  link,
}) => {
  const { t } = useTranslation();
  return(
    <motion.div
      variants={fadeIn("", "spring", index * 0.5+ 0.5, 0.75)}
      className='bg-inputBackground dark:bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full min-h-[360px] shadow-card'
    >
      <div className="flex justify-center items-center gap-5 mb-5">
        <a href={link} target="_blank">
          <img src={linkLogo} alt={`${index}-logo`} className="h-[90px] w-[90px] bg-white-100 rounded-2xl transition-all ease-in-out duration-200 hover:scale-105"/>
        </a>
        <img src={secondImage} alt={`${index}-image`} className="h-[90px] w-[90px]"/>
      </div>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{t(`highlights.${index}.testimonial`)}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='red-text-gradient'>📌 &nbsp;</span> {t(`highlights.${index}.name`)}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {t(`highlights.${index}.designation`)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const Highlights = () => {
  const { t } = useTranslation();

  return (
    <div className={`mt-12 bg-tertiaryLight dark:bg-black-100 rounded-[20px] shadow-2xl`}>
      <div
        className={`bg-primaryLight dark:bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("highlights.titles.subHead")}</p>
          <h2 className={styles.sectionHeadText}>{t("highlights.titles.head")}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 items-center justify-center`}>
        {testimonials.map((testimonial, index) => (
          <EventCard key={testimonial.name} index={index} {...testimonial} linkLogo={testimonial.linkLogo} secondImage={testimonial.secondImage} link={testimonial.link}/>
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Highlights, "");

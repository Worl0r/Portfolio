import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, play } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";


const ProjectCard = ({
  index,
  name,
  tags,
  image,
  source_code_link,
  demo_code_link,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-inputBackground dark:bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[520px] shadow-card'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl object-top'
          />

          <div className='absolute inset-0 flex gap-[5px] justify-end m-3 card-img_hover'>

            {source_code_link ? (
              <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out duration-200 border border-secondary'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            ) : (<div></div>)}

            {demo_code_link ? (
            <div
              onClick={() => window.open(demo_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out duration-200 border border-secondary'
            >
              <img
                  src={play}
                  alt='demo code'
                  className='w-3/4 h-3/4 object-contain invert'
                />
            </div>) : (<div></div>)}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{t(`projects.${index}.name`)}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{t(`projects.${index}.description`)}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 bottom-0'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} bottom-0`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primaryLight dark:bg-transparent rounded-xl z-[-1] sm:p-10 -m-4 p-4">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t("projects.titles.subHead")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("projects.titles.head")}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t("projects.description")}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-col items-center justify-center gap-[30px] lg:flex-row flex-wrap'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");

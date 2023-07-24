import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";
import { styles } from  '../styles';
import { EarthCanvas, ContactSocialNetworks } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      message: "",
    }
  )
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_gp3t37j",
      "template_wj6ov4s",
        {
          form_name: form.name,
          to_name: "Brice",
          from_email: form.email,
          to_email: "convers.brice@gmail.com",
          message: form.message,
        },
      "xYtO0J1MdErVgjok9"
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm(
        {
          name: "",
          email: "",
          message: "",
        }
      )
    }, (error) => {
      setLoading(false);

      console.log(error);

      alert('something went wrong');
    })
  }

  return (
    <div className='rounded-xl xl:mt-0 xl:flex-row flex-col flex gap-10 overflow-hidden'>
      <motion.div
        variants={
          slideIn("left", "tween", 0.2, 1)
        }
        className='flex-[1] bg-primaryLight dark:bg-black-100 p-8 rounded-xl shadow-xl'
      >
        <p className={styles.sectionSubText}>
          {t("contact.titles.subHead")}
        </p>
        <h3 className={styles.sectionHeadText}>
        {t("contact.titles.head")}
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contact.input.name.outside")}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.input.name.inside")}
              className='bg-inputBackground dark:bg-tertiary py-4 px-6 placeholder:text-secondary hover:bg-indigo-900 hover:dark:bg-indigo-950 text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contact.input.email.outside")}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.input.email.inside")}
              className='bg-inputBackground dark:bg-tertiary py-4 px-6 placeholder:text-secondary hover:bg-indigo-900 hover:dark:bg-indigo-950 text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t("contact.input.message.outside")}</span>
            <textarea
              rows="2"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.input.message.inside")}
              className='bg-inputBackground dark:bg-tertiary py-4 px-6 placeholder:text-secondary hover:bg-indigo-900 hover:dark:bg-indigo-950 text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className= 'bg-inputBackground dark:bg-tertiary py-3 px-8 outline-none w-fit text-white transition-transform ease-in-out hover:scale-110 hover:bg-indigo-900 hover:dark:bg-indigo-950 font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? t("contact.button.sending") : t("contact.button.send")}
          </button>

        </form>
      </motion.div>

      <div className=" flex xl:flex-col flex-col-reverse">
        <motion.div
          variants={
            slideIn("right", "tween", 0.2, 1)
          }
          className='xl:flex-1 xl:h-auto xl:w-[500px] xl:m-0 lg:mx-80 md:h-[550px] md:mx-40 sm:mx-[90px] mx-0 sm:h-[450px] sm:z-0 z-[-1]'
        >
          <EarthCanvas />
        </motion.div>

        <motion.div
          variants={
            slideIn("down", "tween", 0.2, 1)
          }
          className='shaddow-xl'
        >
            <div className="xs:mt-10 bottom-0 text-white flex justify-center dark:text-white font-black text-[35px]">
              {t("contact.more")}
            </div>
            <ContactSocialNetworks />
         </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");

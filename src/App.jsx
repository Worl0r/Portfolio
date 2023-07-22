import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Education, Highlights, Works, Hero, Navbar, Skills, StarsCanvas, Footer } from './components';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'jp'],
    fallbackLng: "en",
    detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false
    },
  });


const App = () => {
  {
    if (localStorage.getItem("darkMode") == null) {
      document.body.parentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    }
    document.body.parentElement.classList.add(localStorage.getItem("darkMode") !== "true" ? "light" : "dark")
  }

  return (
   <BrowserRouter>
    <div className='overflow-hidden relative z-0 bg-[#2f2b6b] dark:bg-primary'>
      <div className='bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      <div className='relative'>
        <About />
        <Experience />
        <Skills />
        <Works />
        <Education />
        <Highlights />

        <div className='relative mr-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App

import { Typography } from "@material-tailwind/react";
import { logo } from "../assets";
import { useTranslation } from "react-i18next";
import { styles } from '../styles';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-primaryLight dark:bg-primary p-8">
            <hr className="my-8 border-blue-gray-50 opacity-70" />
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-3 gap-x-12 primaryLight dark:bg-primary text-center md:justify-between">
                <img src={logo} alt="logo-ct" className="w-10 opacity-50 rounded-lg" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                    as="a"
                    href="#"
                    className={`${styles.colorTextNavBarHover} text-secondary font-normal transition-colors`}
                    >
                    {t("footer.aboutus")}
                    </Typography>
                </li>
                <li>
                    <Typography
                    as="a"
                    href=""
                    className={`${styles.colorTextNavBarHover} text-secondary font-normal transition-colors`}
                    >
                    {t("footer.github")}
                    </Typography>
                </li>
                <li>
                    <Typography
                    as="a"
                    href="#"
                    className={`${styles.colorTextNavBarHover} text-secondary font-normal transition-colors`}
                    >
                    {t("footer.license")}
                    </Typography>
                </li>
                <li>
                    <Typography
                    as="a"
                    href={`#contact`}
                    className={`${styles.colorTextNavBarHover} text-secondary font-normal transition-colors`}
                    >
                    {t("footer.contactus")}
                    </Typography>
                </li>
                </ul>
            </div>
            <hr className="my-8 mx-80 border-blue-gray-50 opacity-25" />
            <Typography className="text-secondary text-center font-normal">
                &copy; 2023 Convers Brice
            </Typography>
        </footer>
    )
}

export default Footer;

import { useEffect, useState } from "react";
import { Moon, Sun } from "."


const DarkMode = () => {

    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    const switchMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode){
            localStorage.setItem("darkMode", "true");
            window.document.documentElement.classList.add("dark");
            window.document.documentElement.classList.remove("light");

        }
        else if (darkMode === false) {
            localStorage.setItem("darkMode", "false");
            window.document.documentElement.classList.remove("dark");
            window.document.documentElement.classList.add("light");

        }
        else {
            setDarkMode(localStorage.getItem("darkMode") === "true");
        }
    }, [darkMode]);

    return (
        <div className="transition-all duration-150 ease-in-out cursor-pointer hover:scale-110 z-20"
        onClick={switchMode}
        >
            {!darkMode ? (
                <Moon />
            ) : (
                <Sun />
            )}
        </div>
    )
}

export default DarkMode;

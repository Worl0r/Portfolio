import { lightMode } from "../../assets";

const Sun = () => {
    return(
        <img
            src= {lightMode}
            className= {`object-contain w-9 h-9 dark:invert`}
            alt="logo night mode"
        />
    )
}

export default Sun;

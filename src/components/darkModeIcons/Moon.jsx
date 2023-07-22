import { nightMode } from "../../assets";

const Moon = () => {
    return(
        <img
            src= {nightMode}
            className = {`w-7 h-7 object-contain invert`}
            alt="logo"
        />
    )
}

export default Moon;

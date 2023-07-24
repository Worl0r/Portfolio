import { socialNetworks } from "../../constants";
import { linkedin } from "../../assets";

const ContactSocialNetworks = () => {

    return(
        <div className="m-10 bottom-0 flex justify-center gap-10 cursor-pointer">
            {socialNetworks.map((SocialNetwork, index) => {
                    return(
                        <div key={index} className="overflow-hidden flex-row w-[100px] p-[25px] rounded-lg bg-primaryLight dark:bg-tertiary drop-shadow-lg transition-all hover:w-[200px] hover:bg-inputBackground hover:dark:bg-indigo-950 ease-in-out duration-500 hover:ease-in-out">
                            <a href = {SocialNetwork.link} className="flex gap-4" >
                                <img src = {SocialNetwork.image} className = "rounded-lg w-[50px] h-[50px]" alt={SocialNetwork.socialNetwork}/>
                                <div className = "ml-3 pt-3 text-white" >{SocialNetwork.socialNetwork}</div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactSocialNetworks;

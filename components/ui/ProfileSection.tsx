import Image from "next/image";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

const ProfileSection = (props: { title: String; subtitle: String; }) => {
    const selectedOption = useAppSelector((state) => state.menuBar.selOption);
    const dispatch = useAppDispatch();

    // For flexible customization in the future
    const title = props.title;
    const subtitle = props.subtitle;

    const colors = (selectedOption == "home") ? "bg-light-blue border-light-blue dark:bg-dark-blue dark:border-dark-blue" : "bg-light-item-bg border-light-item-border dark:bg-dark-item-bg dark:border-dark-item-border"
    const titleTextColor = (selectedOption == "home") ? "text-light-primary dark:text-dark-white" : "text-light-black dark:text-dark-white"
    const subtitleTextColor = (selectedOption == "home") ? "text-light-primary/75 dark:text-dark-white/75" : "text-light-black/75 dark:text-dark-primary/75"

    const profileClicked = () => {
        console.log("Profile clicked");
        dispatch({type: "menuBar/setSelOption", payload: "home"});
    }

    return (
        <Link href={"/"} onClick={profileClicked}>
            <div
                id=""
                className={"border-[1px] rounded flex mb-4 content-center py-1 px-3 w-full h-16 group " + colors}>
                <div className="grid grid-cols-[48px_auto] gap-2 md:gap-3 content-center w-full">
                    <Image
                        alt="Picture of Francisco Casiano"
                        src="https://images.unsplash.com/photo-1670506686973-d55fd6e34821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        className="max-w-[48px] max-h-[48px] rounded-full object-cover"
                        width={128}
                        height={128}
                    />
                    <div className="place-self-start self-center">
                        <p className={"capitalize text-xs " + titleTextColor + " font-semibold"}>
                            {title}
                        </p>
                        <p className={"capitalize text-xs font-light " + subtitleTextColor}>
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProfileSection;

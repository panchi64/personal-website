import {EnvelopeIcon} from '@heroicons/react/24/solid';
import {Chip} from '@nextui-org/react';
import {MoonIcon} from "@heroicons/react/24/outline";

const MenuFooter = () => {
    return (
        <>
            <Chip variant={"dot"} classNames={{
                base: "border-mac-light-item-border bg-mac-light-item-bg border-sm  rounded-lg",
                content: "text-mac-light-black",
                dot: "bg-mac-light-black",
            }}>
                <a href='https://github.com/panchi64'>
                    GitHub
                </a>
            </Chip>
            <Chip variant={"dot"} classNames={{
                base: "border-mac-light-item-border bg-mac-light-item-bg border-sm rounded-lg",
                content: "text-mac-light-black",
                dot: "bg-mac-light-blue",
            }}>
                <a href='https://linkedin.com/in/francisco-a-casiano-rosado'>
                    LinkedIn
                </a>
            </Chip>
            <Chip><EnvelopeIcon/></Chip>
            <Chip><MoonIcon/></Chip>
        </>
    );
};

export default MenuFooter;

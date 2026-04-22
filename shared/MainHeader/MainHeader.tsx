import Image from "next/image";

import image from "@/images/logo.png"

export default function MainHeader(){
    return(
        <header className="w-full flex items-center justify-between py-4 px-6 bg-surface backdrop-blur-sm bg-opacity-30 border-b border-on-surface-variant/20">
            <div className="w-full">
                <Image src={image} alt="Aurora Todo Logo" className="w-25" />
            </div>
        </header>
    )
}
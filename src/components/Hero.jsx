// Desc: Hero component
import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Hero = () => {
    return (
        <>
            <div className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-10 bg-primary`}>
                <img className="w-full" src="/banner.png" alt="Pugdemic Logo" />
            </div>
            <div className="w-full flex justify-center items-center py-5 bg-primary">
                <h1 className="text-5xl">Pugdemic</h1>
            </div>
        </>
    )
}

export default Hero
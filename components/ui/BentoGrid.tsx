"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    spareImg,
    titleClassName
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    spareImg?: string;
    titleClassName?: string;
}) => {
    const rightList = ['HTML', 'TailwindCSS', 'THREE.js']
    const lefttList = ['React.js', 'Next.js', 'Typescript']

    const [copied, setCopied] = useState(false)
    const handleCopy = () => {

        console.log('copied!')
        navigator.clipboard.writeText(`amine.benchouche@gmail.com`)
        setTimeout(() => {
            setCopied(false)
        }, 2000);
        setCopied(true)
    };

    // // const handleCopy2 =  async (copied: boolean) => {
    // //     "use server";
    // //     await navigator.clipboard.writeText(`amine.benchouche@gmail.com`)
    // //     setCopied(copied)

    // // }

    return (
        <div
            className={cn(
                "row-span-1  relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white[0.1]",
                className
            )}
            style={{
                background: 'rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(59,59,68,1) 26%, rgba(12,14,35,1) 100%)'
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} mb-2 h-full`}>
                <div className="w-full h-full absolute">
                    {img && (<img className={cn(imgClassName, 'object-cover object-center')} src={img} alt={img} />)}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (<img src={spareImg} alt={spareImg} className="object-cover object-center w-full h-full" />)}
                </div>

                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/* <div className="absolute z-50 flex justify-center items-center font-bold px-4 text-white">
                        </div> */}
                    </BackgroundGradientAnimation>)}

                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>

                    {id === 2 && <GlobeDemo />}
                    {id === 3 && (
                        <div className="flex gap-2 items-center justify-start lg:gap-4 w-fit h-full absolute sm:right-10 right-2 lg:right-2">
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {lefttList.map((item) => (
                                    <span key={item} className="py-4 lg:py-4 lg:px-2
                                     px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                ))}
                                <span className="px-3 py-4 rounded-lg text-center bg-[#10132E]" />
                            </div>
                            <div className="flex flex-col md:gap-3 lg:gap-8">
                                <span className="py-4 px-3 rounded-lg text-center text-base bg-[#10132E]" />
                                {rightList.map((item) => (
                                    <span key={item} className="py-4 lg:py-4 lg:px-2 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                ))}
                            </div>

                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-10 ">
                            <div className={`absolute bottom-2 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    }
                                }}
                                />
                                <button onClick={handleCopy} className="p-2  border rounded-md border-white ">{copied ? "Email copied" : "Copy my email"}</button>
                            </div>
                            {/* <MagicButton title={copied ? "Email copied" : "Copy my email"} icon={<IoCopyOutline />} position='left' otherClasses="!bg-[#161a31]"  */}
                            {/* /> */}
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

import Image from "next/image";
import { ReactNode } from "react";

interface BarProps{
    bgColor: string | 'bg-red-100' | 'bg-blue-100' | 'bg-green-100' | 'bg-yellow-100';
    textColor: string | 'text-red-400' | 'text-blue-400' | 'text-green-400' | 'text-yellow-400';
    title: string;
    progress: number;
    icon:ReactNode;
}

export const Bar = ({bgColor,title,progress,textColor,icon}:BarProps) => {
    return(
        <div className={`${bgColor} w-full p-3 mt-4 rounded-xl flex items-center`}>
            {icon}
            <div className="pl-3 w-full">
                <div className="flex items-center justify-between">
                    <p className={`focus:outline-none text-base leading-3 cursor-pointer ${textColor}`}>{title}</p>
                    <div className="flex font-black">
                        <p className="pr-2 text-dark-gray-blue">{progress}</p>
                        <p className=" text-slate-400">/ 100</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
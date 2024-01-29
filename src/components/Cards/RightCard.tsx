import { Bar } from "../Bar/Bar"
import data from "@assets/data.json"
import Image from 'next/image'

export const RightCard = () => {
    return(
        <div className="w-1/2 mobile:w-full rounded-3xl justify-center text-black px-8">
            <p className="text-lg text-start sm:text-xl font-semibold text-light-lavender pt-8 pb-3">
                Summary
            </p>
            <div className="flex flex-col">
                {data.map((data, index) => (
                    <Bar icon={<Image src={`./${data.icon}`} alt="icon" width={28} height={28}/>} key={data.category} bgColor={data.bg} title={data.category} progress={data.score} textColor={data.color}/>
                ))}
            </div>
            <div className="flex flex-col mt-10 mx-auto">
                <button type="button" className="py-2.5 px-5 text-base bg-darkGrayBlue hover:bg-gradient-to-t from-lightRoyalBlue to-lightSlateBlue text-white font-medium focus:outline-none rounded-3xl focus:z-10 focus:ring-4">Continue</button>
            </div>
        </div>
    )
}

export const LeftCard = () => {
    return(
        <div className="w-1/2 mobile:w-full desktop:rounded-3xl mobile:rounded-br-3xl mobile:rounded-bl-3xl bg-gradient-to-t from-lightRoyalBlue to-lightSlateBlue justify-center px-8">
            <p className="text-lightLavender text-lg sm:text-xl font-semibold text-center py-8">
                Your Result
            </p>
            <div className="relative flex flex-col mx-auto rounded-full w-44 h-44 items-center text-center justify-center bg-gradient-to-b from-violetBlue to-persianBlue mb-4 sm:mb-8">
                <p className="text-6xl font-bold text-center text-white py-4">
                    76
                </p>
                <p className="font-semibold text-center text-lightLavender text-base">
                    of 100
                </p>
            </div>
            <p className="font-medium text-center text-2xl sm:text-3xl pb-2 sm:pb-6">
                Great
            </p>
            <p className="font-medium text-center px-5 pb-10 text-light-lavender">
                You scored higher than 65% of the people who have taken these tests.
            </p>
        </div>
    )
}
import { Card } from "./components/card"

export const UserPostsModule = () => {
    return(
        <div className="border-2 border-[#7D7FCF] w-full h-full rounded-[5px] flex flex-col gap-[10px] p-[10px] pr-[30px]">
            <h1 className="text-white text-[28px] font-Karantina">user posts:</h1>
            <div className="flex flex-col pt-[20px]">
                <Card />
            </div>
        </div>
    )
}
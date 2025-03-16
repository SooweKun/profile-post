import { ProfileModule } from "@/modules/profile/Module"

export const Profile =() => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[850px] flex justify-start">
                <h1 className="font-Karantina text-[60px]">Profile</h1>
            </div>
            <ProfileModule />
        </div>
    )
}
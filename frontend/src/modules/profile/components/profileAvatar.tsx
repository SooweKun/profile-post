import { ImageSkeletonPost } from "@/assets/skeletonImagePost"

export const ProfileAvatar = () => {
    return(
        <div className="w-[95px] h-[95px] rounded-[6px] relative bg-white flex justify-center items-center">
            <ImageSkeletonPost />
            <span className="w-[45px] h-[1px] bg-black absolute bottom-[4px]"></span>
        </div>
    )
}
import { ImageSkeletonPost } from "@/assets/skeletonImagePost";
import ChangeBg from '@/assets/changeBg.svg'

export const ProfileBg = () => {
  return (
    <div className="w-full h-[141px] bg-[#D9D9D9] rounded-[10px] flex justify-center items-center p-[6px] relative">
      <ImageSkeletonPost />
      <button className="w-[23px] h-[23px] bg-white rounded-full flex justify-center items-center absolute right-[6px] top-[6px] hover:bg-[#7a7a7c]">
        <img src={ChangeBg} alt="" />
      </button>
    </div>
  );
};

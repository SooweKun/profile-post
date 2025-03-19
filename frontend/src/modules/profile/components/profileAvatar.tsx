import { ImageSkeletonPost } from "@/assets/skeletonImagePost";
import { Plus } from "@/assets/plus.tsx";

export const ProfileAvatar = () => {
  return (
    <div className="w-[95px] h-[95px] rounded-[6px] relative bg-white flex justify-center items-center">
      <ImageSkeletonPost />
      <span className="w-[45px] h-[1px] bg-black absolute bottom-[4px]"></span>
      <div className="w-full h-full absolute top-0 left-0 bg-black/80 rounded-[6px] opacity-0 hover:opacity-100 flex flex-col items-center justify-center gap-[10px]">
        <Plus />
        <p className="text-[10px]">обновить аватар</p>
      </div>
    </div>
  );
};

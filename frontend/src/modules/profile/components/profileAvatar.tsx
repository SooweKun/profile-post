import { ImageSkeletonPost } from "@/assets/skeletonImagePost";
import { Plus } from "@/assets/plus.tsx";
import { ChangeEvent } from "react";
import { useAvatar } from "../hooks/useAvatar";
import { useForm } from "react-hook-form";
import { useProfile } from "../hooks/useProfile";

export const ProfileAvatar = () => {
  const { mutate } = useAvatar();
  const { register } = useForm();
  const { data } = useProfile();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const file = e.target.files?.[0];
    if (file) {
      formData.append("image", file);
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      mutate(formData);
    }
  };

  return (
    <div className="w-[95px] h-[95px] rounded-[6px] relative bg-white flex justify-center items-center group">
      {data?.profile_image ? (
        <img
          src={data.profile_image}
          alt="Profile avatar"
          className="w-full h-full object-cover rounded-[6px]"
        />
      ) : (
        <ImageSkeletonPost />
      )}
      <div className="w-full h-full absolute top-0 left-0 bg-black/85 rounded-[6px] opacity-0 hover:opacity-100 flex flex-col items-center justify-center gap-[10px] duration-500">
        <Plus />
        <p className="text-[10px]">обновить аватар</p>
        <input
          type="file"
          className="absolute top-0 left-0 w-full h-full opacity-0"
          {...register("image", { onChange: handleFile })}
        />
      </div>
      <span className="w-[45px] h-[1px] bg-black absolute bottom-[4px] group-hover:bg-white"></span>
    </div>
  );
};

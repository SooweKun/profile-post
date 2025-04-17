/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageSkeletonPost } from "@/assets/skeletonImagePost";
import ChangeBg from "@/assets/changeBg.svg";
import { useBg } from "../hooks/useBg";
import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { useProfile } from "../hooks/useProfile";

export const ProfileBg = () => {
  const { mutate } = useBg();
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
    <div className="w-full h-[141px] bg-[#D9D9D9] rounded-[10px] flex justify-center items-center relative">
      {data?.profile_banner ? (
        <img
          src={data.profile_banner}
          alt="Profile banner"
          className="w-full h-full object-cover rounded-[10px]"
        />
      ) : (
        <ImageSkeletonPost />
      )}
      <div className="absolute right-[6px] top-[6px] w-[23px] h-[23px] bg-white rounded-full flex justify-center items-center hover:bg-[#7a7a7c]">
        <img src={ChangeBg} alt="" />
        <input
          type="file"
          className="absolute right-[6px] top-[6px] w-[23px] h-[23px] opacity-0"
          {...register("image", { onChange: handleFile })}
        />
      </div>
    </div>
  );
};

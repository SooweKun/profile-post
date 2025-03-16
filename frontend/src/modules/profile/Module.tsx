import { Arrow } from "@/assets/arrow";
import { ProfileAvatar } from "./components/profileAvatar";
import { ProfileBg } from "./components/profileBg";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const ProfileModule = () => {
  return (
    <div className="border-2 border-white w-[850px] h-[550px] rounded-[10px] p-[5px]">
      <div className="w-full h-[177px] relative">
        <ProfileBg />
        <div className="absolute bottom-0 left-[4%]">
          <ProfileAvatar />
        </div>
      </div>
      <div className="w-full flex flex-col items-start px-[32px] mt-[10px] font-Karantina">
        <h1 className="text-white text-[40px] w-max">Name</h1>
        <p className="text-[24px] text-[#535353] flex flex-grow">
          description
        </p>
      </div>
      <div className="flex gap-[10px] px-[32px] mt-[55px]">
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            variant={"ghost"}
            className="bg-white text-black text-[24px] w-[144px] h-[54px] rounded-[10px] font-Karantina"
          >
            edit profile
          </Button>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            variant={"ghost"}
            className="bg-transparent border-[1.5px] border-white text-white text-[24px] w-[144px] h-[54px] rounded-[10px] font-Karantina"
          >
            settings
          </Button>
        </motion.div>
      </div>
      <motion.div whileTap={{ scale: 0.9 }}>
        <Button
          variant={"ghost"}
          className="bg-white text-black text-[20px] w-[186px] h-[77px] rounded-[10px] font-Karantina ml-[32px] mt-[58px] p-[10px] px-[20px] flex justify-start items-start relative"
        >
          Share post
          <Arrow className="absolute right-[5px] bottom-[15px]" />
        </Button>
      </motion.div>
    </div>
  );
};

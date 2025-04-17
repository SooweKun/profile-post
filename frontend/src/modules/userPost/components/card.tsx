import { Heart } from "@/assets/heart";
import { ImageSkeletonPost } from "@/assets/skeletonImagePost";
import { motion } from "motion/react";
import { FC, useState } from "react";
import { CardType } from "../Module";

export const Card: FC<CardType> = ({
  image,
  description,
  title,
  user_name,
}) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="min-w-[300px] w-full max-w-[820px] h-[220px] border-2 bg-[#18181B] rounded-[10px] p-[10px] pr-[20px] flex gap-[20px] font-Karantina">
      <div className="bg-[#5C5C5C] min-w-[150px] w-full max-w-[200px] h-[190px] rounded-[5px] flex justify-center items-center relative">
        {image ? (
          <img
            src={image}
            alt="Card image"
            className="w-full h-full rounded-[5px]"
          />
        ) : (
          <ImageSkeletonPost />
        )}
        <motion.button
          onClick={handleActive}
          whileTap={{ scale: 0.9 }}
          className={`w-[60px] h-[40px] flex gap-[8px] justify-center items-center rounded-[8px] ${
            active
              ? "bg-[#CF7173] hover:bg-[#CF7173]"
              : "bg-[#bdbaba] hover:bg-purple-400"
          } absolute bottom-[-5px] right-[-35px]`}
        >
          <Heart active={active} />
          <p
            className={`font-Karantina text-[25px] ${active ? "text-white" : "text-black"}`}
          >
            0
          </p>
        </motion.button>
      </div>
      <div className="flex flex-col gap-[4px] flex-grow max-w-[550px] w-full min-w-[300px] leading-tight">
        <h1 className="text-[32px] tracking-wider">{title}</h1>
        <p className="text text-[20px]">{description}</p>
      </div>
      <div className="flex justify-end items-end">
        <p className="text-[22px]">{user_name}</p>
      </div>
    </div>
  );
};

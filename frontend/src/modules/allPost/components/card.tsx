import { Heart } from "@/assets/heart";
import { ImageSkeletonPost } from "@/assets/skeletonImagePost";
import { motion } from "motion/react";
import { FC, useState } from "react";
import { TiltEffect } from "@/components/tiltEffect/tiltEffect";

interface Props {
  image: string;
  description: string;
  title: string;
  user_name: string;
}

export const Card: FC<Props> = ({ image, description, title, user_name }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="min-w-[300px] w-full max-w-[820px] h-[400px]  border-2 bg-[#18181B] rounded-[10px] p-[10px] pr-[20px] flex gap-[20px] font-Karantina">
      <TiltEffect>
        {image ? (
          <img
            src={image}
            alt="Card image"
            className="min-w-[190px] w-full max-w-[250px] h-[200px] rounded-[5px]"
          />
        ) : (
          <div className="bg-[#5C5C5C] min-w-[190px] w-full max-w-[250px] min-h-[170px] h-full max-h-[250px] rounded-[5px] flex justify-center items-center">
            <ImageSkeletonPost />
          </div>
        )}
      </TiltEffect>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[4px] flex-grow max-w-[500px] w-full min-w-[300px] h-max leading-tight">
          <h1 className="text-[32px] tracking-wider w-full">{title}</h1>
          <p className="text text-[20px]">{description}</p>
        </div>
        <motion.button
          onClick={handleActive}
          whileTap={{ scale: 0.9 }}
          className={`w-[60px] h-[40px] flex gap-[8px] justify-center items-center rounded-[8px] ${
            active
              ? "bg-[#CF7173] hover:bg-[#CF7173]"
              : "bg-[#bdbaba] hover:bg-purple-400"
          }`}
        >
          <Heart active={active} />

          <p
            className={`font-Karantina text-[25px] ${active ? "text-white" : "text-black"}`}
          >
            0
          </p>
        </motion.button>
      </div>
      <div className="flex justify-end items-end flex-grow">
        <p className="text-[22px]">{user_name}</p>
      </div>
    </div>
  );
};

import { Heart } from "@/assets/heart";
import { ImageSkeletonPost } from "@/assets/skeletonImagePost";
import { animate, motion, stagger } from "motion/react";
import { splitText } from "motion-plus";
import { memo, useEffect, useRef, useState } from "react";

export const Card = memo(() => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Показывает текст только после прогрузки стр
    containerRef.current.style.visibility = "visible";

    animate(
      splitText(containerRef.current.querySelector(".text")!).words,
      {
        opacity: [0, 1],
        y: [10, 0],
      },
      {
        type: "spring",
        duration: 2,
        bounce: 0,
        delay: stagger(0.03),
      }
    );
  }, []);

  return (
    <div className="min-w-[300px] w-full max-w-[820px] h-max min-h-[100px] border-2 bg-[#18181B] rounded-[10px] p-[10px] pr-[20px] flex gap-[20px] font-Karantina">
      <div className="bg-[#5C5C5C] min-w-[190px] w-full max-w-[250px] min-h-[170px] h-full max-h-[250px] rounded-[5px] flex justify-center items-center">
        <ImageSkeletonPost />
      </div>
      <div className="flex flex-col gap-[20px]">
        <div
          className="flex flex-col gap-[4px] flex-grow max-w-[500px] w-full min-w-[300px] h-max leading-tight"
          ref={containerRef}
        >
          <h1 className="text-[32px] tracking-wider">Name</h1>
          <p className="text text-[20px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            eligendi nobis voluptates eaque, minus laboriosam enim voluptatibus
            voluptatem. Reprehenderit quidem dolore voluptatum? Architecto
            ipsam, soluta laudantium facilis id recusandae officiis!
          </p>
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
      <div className="flex justify-end items-end">
        <p className="text-[22px]">name</p>
      </div>
    </div>
  );
});

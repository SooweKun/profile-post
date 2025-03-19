import { Contact } from "./components/contact";
import { Pinterest } from "@/assets/pinterest";
import { Youtube } from "@/assets/youtube";
import { Telegram } from "@/assets/telegram";
import { Codepan } from "@/assets/codepan";
import { Reddit } from "@/assets/reddit";
import { motion } from "motion/react";
import { ChartComponent } from "./components/chartComponent";
import { Logo } from "./components/logo";

const items = [Pinterest, Youtube, Telegram, Codepan, Reddit];

export const AboutModule = () => {
  return (
    <div className="border-2 border-white min-w-[400px] w-full max-w-[900px] h-[600px] rounded-[10px] p-[10px]">
      <div className="w-full flex justify-center">
        <div className="min-w[350px] w-full max-w-[850px] h-[220px] bg-[#18181B] rounded-[10px]"></div>
      </div>
      <div className="flex gap-[25px] mt-[20px] px-[40px] justify-between items-center">
        <div className="flex flex-col gap-[30px] w-[550px]">
          <div className="flex gap-[17px] justify-center w-full">
            {items.map((Item, index) => {
              return (
                <motion.div whileTap={{ scale: 0.9 }} className="group">
                  <Contact
                    key={index}
                    icon={
                      <Item className="group-hover:fill-white fill-black group-hover:srtoke-whit" />
                    }
                  />
                </motion.div>
              );
            })}
          </div>
          <div className="flex items-end">
            <ChartComponent />
          </div>
        </div>
        <Logo />
      </div>
    </div>
  );
};

import profileImg from "@/assets/profile-img.svg";
import notification from "@/assets/notification.svg";
import group from "@/assets/group.svg";
import exit from "@/assets/exit.svg";
import { Link } from "@tanstack/react-router";

export const DropContent = () => {
  return (
    <div className="w-[160px] h-[223px] bg-[#18181B] border-[1px] border-white rounded-[5px] shadow-all flex flex-col items-center">
      <div className="flex gap-[6px] w-full h-[42px] pt-[5px] pb-[8px] justify-center items-center">
        <img src={profileImg} alt="" className="w-[29px] h-[29px]" />
        <div className="flex flex-col">
          <p className="text-[12px]">example</p>
          <p className=" text-[10px]">example@mail.com</p>
        </div>
      </div>
      <div className="w-[120px] h-[0.3px] bg-[#C2C2C2]"></div>
      <div className="flex flex-col gap-[12px] mt-[12px] text-[13px] w-full h-full items-left px-[5px]">
        <div className="flex gap-[8px] w-full h-[25px] rounded-[4px] items-center hover:bg-[#C2C2C2] hover:text-black px-[15px]">
          <img src={group} alt="" />
          <p>Create a group</p>
        </div>
        <div className="flex gap-[8px] w-full h-[25px] rounded-[4px] items-center hover:bg-[#C2C2C2] hover:text-black px-[15px]">
          <img src={notification} alt="" />
          <p>Notification</p>
        </div>
        <div className="flex gap-[8px] w-full h-[25px] rounded-[4px] items-center hover:bg-[#C2C2C2] hover:text-black px-[15px]">
          <img src={profileImg} alt="" className="w-[12.75px] h-[12.75px]" />
          <Link to="/profile">Account</Link>
        </div>
      </div>
      <div className="w-[120px] h-[0.3px] bg-[#C2C2C2]"></div>
      <div className="w-full h-[40px] py-[4px] px-[5px]">
        <div className="w-full h-[30px] flex items-center text-[10px] justify-between hover:bg-[#C2C2C2] hover:text-black px-[10px] rounded-[4px]">
          <p>Exit</p>
          <img src={exit} alt="" className="h-[10px] w-[5px]" />
        </div>
      </div>
    </div>
  );
};

import notification from "@/assets/notification.svg";
import group from "@/assets/group.svg";
import exit from "@/assets/exit.svg";
import { Link } from "@tanstack/react-router";
import { useDropContent } from "./hooks/useDropContent";
import { Profile } from "@/assets/profile";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";

export const DropContent = () => {
  const { data } = useDropContent();
  const { toast } = useToast();

  return (
    <div className="w-[160px] h-[223px] bg-[#18181B] border-[1px] border-white rounded-[5px] shadow-all flex flex-col items-center">
      <div className="flex gap-[15px] w-full h-[42px] pt-[5px] pb-[8px] justify-center items-center">
        {data?.profile_image ? (
          <img src={data.profile_image} alt="" className="w-[29px] h-[29px]" />
        ) : (
          <Profile />
        )}
        {data?.login || data?.email ? (
          <div className="flex flex-col">
            <p className="text-[12px]">{data?.login}</p>
            <p className=" text-[10px]">{data?.email}</p>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="text-[12px]">expampleName</p>
            <p className=" text-[10px]">example@mail.com</p>
          </div>
        )}
      </div>
      <div className="w-[120px] h-[0.3px] bg-[#C2C2C2]"></div>
      <div className="flex flex-col gap-[4px] mt-[12px] text-[13px] w-full h-full items-left px-[5px]">
        <Button
          variant="outline"
          className="bg-transparent outline-none border-none w-full h-[30px] flex justify-start"
        >
          <img src={group} alt="" />
          <p>Create a group</p>
        </Button>
        <Button
          variant="outline"
          className="bg-transparent outline-none border-none w-full h-[30px] flex justify-start"
          onClick={() => {
            toast({
              title: "Sowe",
              description: "I love you, dear friend ❤️",
            });
          }}
        >
          <img src={notification} alt="" />
          <p>Notifications</p>
        </Button>
        <Button
          variant="outline"
          className="bg-transparent outline-none border-none w-full h-[30px] flex justify-start"
        >
          <Profile />
          <Link to="/profile">Account</Link>
        </Button>
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

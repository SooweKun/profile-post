import { AllPostsModule } from "@/modules/allPost/Module";
import { UserPostsModule } from "@/modules/userPost/Module";

export const MainPage = () => {

  return (
    <div className="border-2 border-white w-full h-full rounded-[10px] p-[20px] flex gap-[60px]">
        <UserPostsModule />
        <div className="w-[4px] h-[100%] bg-white rounded-[10px]"></div>
        <AllPostsModule />
    </div>
  );
};

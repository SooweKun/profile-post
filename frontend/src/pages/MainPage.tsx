import { UserPostsModule } from "@/modules/userPost/Module";

export const MainPage = () => {

  return (
    <div className="w-full h-full rounded-[10px] p-[20px] flex gap-[60px] justify-center items-center">
        <UserPostsModule />
    </div>
  );
};

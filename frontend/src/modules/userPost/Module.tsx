import { Card } from "./components/card";

export const UserPostsModule = () => {
  return (
    <div className="border-2 border-[#7D7FCF] min-w-[400px] w-full max-w-[1200px] min-h-[200px] h-full max-h-[800px] rounded-[5px] flex px-[40px] pt-[20px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-white text-[35px] font-Karantina">user posts:</h1>
        <div className="flex flex-col pt-[20px]">
          <Card />
        </div>
      </div>
    </div>
  );
};

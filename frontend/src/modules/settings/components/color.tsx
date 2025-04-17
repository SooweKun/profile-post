import { useColorStore } from "@/store/useColorStore";
import { HexColorPicker } from "react-colorful";

export const Color = () => {
  const { fill, setFill } = useColorStore();

  return (
    <div className="flex gap-[40px] w-full h-full p-[50px] justify-between">
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-white">How do it work ?</h1>
        <div
          className="w-[150px] h-[150px] text-white rounded-md flex justify-center items-center font-Karantina border-white border-[1px]"
          style={{
            backgroundColor: fill,
          }}
        >
          like this
        </div>
      </div>
      <HexColorPicker
        color={fill}
        onChange={setFill}
        style={{
          width: "400px",
          height: "400px",
          border: "2px solid white",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

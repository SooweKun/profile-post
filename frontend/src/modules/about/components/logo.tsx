import br from "@/assets/br.png";
import bl from "@/assets/bl.png";
import tr from "@/assets/tr.png";
import tl from "@/assets/tl.png";

export const Logo = () => {
  return (
    <div className="min-w-[50px] w-full max-w-[250px] h-[250px] bg-[#18181B] rounded-[10px] flex flex-wrap gap-[3.75px] justify-center items-center py-[20px]">
      <img src={tl} alt="" className="hover:hue-rotate-60" />
      <img src={tr} alt="" className="hover:-hue-rotate-90" />
      <img src={bl} alt="" className="hover:saturate-[10]" />
      <img src={br} alt="" className="hover:invert" />
    </div>
  );
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Foto from "@/assets/foto.png";
import First from "@/assets/ferst.jpg";
import Second from "@/assets/second.jpg";
import Third from "@/assets/threed.jpg";
import Four from "@/assets/four.jpg";

const Arr = [
  {
    image: Foto,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint aspernatur aperiam sunt optio velit recusandae quis ullam. Natus impedit quaerat ipsum error eligendi? Harum expedita provident et quos sunt.",
    title: "test",
  },
  {
    image: First,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint aspernatur aperiam sunt optio velit recusandae quis ullam. Natus impedit quaerat ipsum error eligendi? Harum expedita provident et quos sunt.",
    title: "test",
  },
  {
    image: Second,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint aspernatur aperiam sunt optio velit recusandae quis ullam. Natus impedit quaerat ipsum error eligendi? Harum expedita provident et quos sunt.",
    title: "test",
  },
  {
    image: Third,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint aspernatur aperiam sunt optio velit recusandae quis ullam. Natus impedit quaerat ipsum error eligendi? Harum expedita provident et quos sunt.",
    title: "test",
  },
  {
    image: Four,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint aspernatur aperiam sunt optio velit recusandae quis ullam. Natus impedit quaerat ipsum error eligendi? Harum expedita provident et quos sunt.",
    title: "test",
  },
];

export const Slider = () => {
  return (
    <Carousel className="w-full h-full relative">
      <CarouselContent>
        {Arr.map((item, index) => (
          <CarouselItem key={index} className="w-full h-full flex gap-[10px]">
            <div className="h-full">
              <img
                src={item.image}
                alt=""
                className="w-[180px] h-[180px] rounded-[7px] mr-[60px]"
              />
            </div>
            <div className="w-[2px] h-[180px] bg-white"></div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[25px] font-mono select-none">
                {item.title}
              </h1>
              <p className="text-[18px] font-extralight w-[400px] h-[150px] select-none">
                {item.text}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[-27px]" />
      <CarouselNext className="absolute right-[-27px]" />
    </Carousel>
  );
};

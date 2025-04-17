import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Profile } from "./components/profile";
import { Color } from "./components/color";
import { Variant } from "./components/variant";
import { Oferta } from "./components/Oferta";
import { Beta } from "./components/beta";
import { Support } from "./components/support";
import { Help } from "./components/help";
import { About } from "./components/about";
import { useState } from "react";
// import { TiltEffect } from "@/components/tiltEffect/tiltEffect";

interface Arrtype {
  title: string;
  content: React.ReactNode;
}

const Arr: Arrtype[] = [
  { title: "Profile", content: <Profile /> },
  { title: "Color", content: <Color /> },
  { title: "Variant", content: <Variant /> },
  { title: "Oferta", content: <Oferta /> },
  { title: "Beta-test", content: <Beta /> },
  { title: "Support", content: <Support /> },
  { title: "Help", content: <Help /> },
  { title: "About", content: <About /> },
];

export const SettingsModule = () => {
  const [mass, setMass] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setMass(index);
  };

  return (
    <div className="w-full h-full flex gap-[20px] p-[40px">
      <div className="flex flex-col">
        <div className="flex flex-col gap-[4px] h-72 w-[270px] rounded-md border p-4">
          <h1>Settings:</h1>
          <ScrollArea className="flex flex-col gap-[5px] pr-[2px]">
            {Arr.map((item, index) => (
              <Button
                variant={"ghost"}
                className="w-[220px] flex justify-start"
                key={index}
                onClick={() => handleClick(index)}
              >
                {item.title}
              </Button>
            ))}
          </ScrollArea>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full h-full flex items-end justify-center"
        >
          <AccordionItem value="item-1" className="w-full">
            <AccordionTrigger>Is it developing?</AccordionTrigger>
            <AccordionContent>Yes. If u donate me for work).</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="border-[1px] border-white rounded-[10px] h-full w-full">
        <h1 className="text-[24px] text-white text-center">
          {mass !== null ? Arr[mass].content : Arr[0].content}
        </h1>
      </div>
    </div>
  );
};

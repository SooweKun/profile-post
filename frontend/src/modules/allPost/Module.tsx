import { Card } from "./components/card";
import { useCard } from "./hooks/useCard";

interface Card {
  id: string;
  image: string;
  description: string;
  title: string;
  user_name: string;
}

export const ChartModule = () => {
  const { data } = useCard();
  console.log(data);

  return (
    <div className="border-2 border-[#7D7FCF] min-w-[400px] w-full max-w-[1200px] min-h-[200px] h-full max-h-[800px] rounded-[5px] flex px-[40px] pt-[20px]">
      <div className="flex flex-col gap-[10px] w-full">
        <h1 className="text-[35px] font-Karantina">Chart posts:</h1>
        <div className="flex flex-col pt-[20px] gap-[20px] h-[700px] overflow-y-auto w-full custom-scrollbar">
          {data &&
            data.cards.map(
              ({ id, image, description, title, user_name }: Card) => {
                return (
                  <Card
                    key={id}
                    image={image}
                    description={description}
                    title={title}
                    user_name={user_name}
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};

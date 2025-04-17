import { useProfile } from "@/modules/profile/hooks/useProfile";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCard = () => {
  const { data: dataId } = useProfile();

  return useQuery({
    queryKey: ["userCard"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/cards/user/${dataId?.id}?page=1&limit=4`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
      return data;
    },
    enabled: !!dataId?.id, // незнал раньше что можно вот так сделать
    staleTime: 5 * 60 * 1000,
  });
};
// import { useProfile } from "@/modules/profile/hooks/useProfile";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export const useCard = () => {
//   const { data: dataId } = useProfile();

//   return useQuery({
//     queryKey: ["card"],
//     queryFn: async () => {
//       const response = await axios.get(
//         `http://localhost:3000/api/cards/user/${dataId?.id}?page=1&limit=4`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       console.log(response.data);
//       return response.data;
//     },
//     enabled: !!dataId?.id,
//     staleTime: 5 * 60 * 1000,
//   });
// };

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCard = () => {
  return useQuery({
    queryKey: ["allCard"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/cards?page=1&limit=4`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(data);
      return data;
    },
  });
};

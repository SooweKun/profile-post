import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useDropContent = () => {
  return useQuery({
    queryKey: ["dropContent"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return data;
    },
  });
};

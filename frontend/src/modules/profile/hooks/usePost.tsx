import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const usePost = () => {
  return useMutation({
    mutationKey: ["post"],
    mutationFn: async (formData: FormData) => {
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      const { data } = await axios.post(
        "http://localhost:3000/api/cards",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      return data;
    },
  });
};

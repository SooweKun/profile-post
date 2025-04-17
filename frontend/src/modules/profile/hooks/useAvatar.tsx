import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useAvatar = () => {
  return useMutation({
    mutationKey: ["avatar"],
    mutationFn: async (formData: FormData) => {
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      const { data } = await axios.post(
        "http://localhost:3000/api/profile/image",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data, "useAvatar");
    },
  });
};

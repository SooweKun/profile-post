/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useEdit = () => {
  return useMutation({
    mutationKey: ["edit"],
    mutationFn: async (data: any) => {
      const { data: resdata } = await axios.put(
        "http://localhost:3000/api/profile",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return resdata;
    },
  });
};

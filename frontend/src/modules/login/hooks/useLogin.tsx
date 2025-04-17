/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";
import { UserForm } from "../components/loginForm";
import { useRouter } from "@tanstack/react-router";

const UserLoginResponse = z.object({
  email: z.string(),
  password: z.string(),
});

export type UserloginResponse = z.infer<typeof UserLoginResponse>;

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: UserForm) => {
      console.log("UseLogin");
      const { data: resdata } = await axios.post<UserloginResponse>(
        "http://localhost:3000/api/auth/login",
        data
      );
      return resdata;
    },
    onSuccess: (resdata) => {
      console.log("Успешный вход:", resdata);
      router.navigate({ to: "/" });
    },
  });
};

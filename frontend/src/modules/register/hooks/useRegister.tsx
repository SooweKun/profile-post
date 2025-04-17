import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { UserForm } from "../components/registerForm";
import axios from "axios";
import { useRouter } from "@tanstack/react-router";

const UserRegisterResponse = z.object({
  token: z.string(),
  user: z.object({
    login: z.string(),
    email: z.string(),
    password: z.string(),
  }),
});

export type UserRegisterResponse = z.infer<typeof UserRegisterResponse>;

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: UserForm) => {
      const {
        data: datares,
      } = await axios.post<UserRegisterResponse>(
        "http://localhost:3000/api/auth/register",
        data
      );

      return datares;
    },
    onSuccess: (datares) => {
      console.log(datares.token, "gfg");
      localStorage.setItem("token", datares.token);
      router.navigate({ to: "/login" });
    },
  });
};

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "@/modules/login/hooks/useLogin";

const UserFormSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z
    .string()
    .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
    .min(8, "Пароль должен содержать минимум 8 символов")
});

export type UserForm = z.infer<typeof UserFormSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutate } = useLogin();
  // console.log(data, "form");
 
  const onSubmit = (data: UserForm) => {
    mutate(data);
    console.log(data, "mutate");
  };

  return (
    <div className="w-full h-full flex justify-center items-center overflow-x-hidden relative">
      <div className="w-[370px] h-[470px] rounded-[15px] border-1 shadow-all border-white flex flex-col items-center py-[10px] px-[25px]">
        <p className="text-[#7D7FCF]">login</p>
        <div className="w-[320px] h-[0.3px] bg-[#C2C2C2] mt-[10px]"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col gap-[19px] mt-[90px] items-center"
        >
          <div className="w-full h-max flex flex-col gap-[19px]">
            <div className="h-[50px] flex gap-[4px] flex-col">
              <Input placeholder="Email" {...register("email")} />
              {errors.email?.message && (
                <p className="text-[#7D7FCF] text-[10px]">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="h-[50px] flex gap-[4px] flex-col">
              <Input placeholder="Password" {...register("password")} />
              {errors.password?.message && (
                <p className="text-[#7D7FCF] text-[10px]">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              type="submit"
              variant={"ghost"}
              className="border-[1px] border-white w-max px-[30px] mt-[65px]"
            >
              Войти
            </Button>
          </motion.div>
        </form>
        <div className="w-[320px] h-[0.3px] bg-[#C2C2C2] mt-[10px]"></div>
        <div className="flex gap-[10px] mt-[10px]">
          <p>no account?</p>
          <Link to="/register" className="text-[#7D7FCF]">
            registration...
          </Link>
        </div>
      </div>
    </div>
  );
};

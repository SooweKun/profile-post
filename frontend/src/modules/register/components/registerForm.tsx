import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/useRegister";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const UserFormSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z
    .string()
    .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
    .min(8, "Пароль должен содержать минимум 8 символов"),
  login: z.string().min(1, "Имя обязательно для заполнения"),
});

export type UserForm = z.infer<typeof UserFormSchema>;

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      login: "",
      email: "",
      password: "",
    },
  });

  const { mutate, data } = useRegister();
  console.log(data, "form");

  const onSubmit = (data: UserForm) => {
    mutate(data);
    console.log(data, "mutate");
  };

  return (
    <div className="w-full h-full flex justify-center items-center overflow-x-hidden relative">
      <div className="w-[370px] h-[470px] rounded-[15px] border-1 shadow-all border-white flex flex-col items-center py-[10px] px-[25px]">
        <p className="text-[#7D7FCF]">registration</p>
        <div className="w-[320px] h-[0.3px] bg-[#C2C2C2] mt-[10px]"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col gap-[19px] mt-[58px] items-center"
        >
          <div className="w-full h-max flex flex-col gap-[19px]">
            <div className="h-[50px] flex gap-[4px] flex-col">
              <Input placeholder="Name" {...register("login")} />
              {errors.login?.message && (
                <p className="text-[#7D7FCF] text-[10px]">
                  {errors.login.message}
                </p>
              )}
            </div>
            <div className="h-[50px] flex gap-[4px] flex-col">
              <Input placeholder="Email" {...register("email")} />
              {errors.email?.message && (
                <p className="text-[#7D7FCF] text-[10px]">
                  {errors.email.message.toString()}
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
              Создать
            </Button>
          </motion.div>
        </form>
        <div className="w-[320px] h-[0.3px] bg-[#C2C2C2] mt-[10px]"></div>
        <div className="flex gap-[10px] mt-[10px]">
          <p>do you have an account?</p>
          <Link to="/login" className="text-[#7D7FCF]">
            login...
          </Link>
        </div>
      </div>
    </div>
  );
};

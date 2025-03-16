/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";

export const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
            <Input
              placeholder="Name"
              {...register("name", { required: "заполните поле" })}
            />
            <Input
              placeholder="Email"
              {...register("email", { required: "заполните поле" })}
            />
            <Input
              placeholder="Password"
              {...register("password", { required: "заполните поле" })}
            />
          </div>
          <motion.div  whileTap={{ scale: 0.9 }}>
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

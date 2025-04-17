/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { FC } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { usePost } from "../hooks/usePost";

interface Props {
  Open: boolean;
  handleOpen: () => void;
}

export const SharePost: FC<Props> = ({ Open, handleOpen }) => {
  const { register, handleSubmit } = useForm();
  const { mutate } = usePost();

  const onSubmit = (data: any) => {
    const formData = new FormData();
    if (data) {
      formData.append("image", data.image[0]);
      formData.append("description", data.description);
      formData.append("title", data.title);
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      console.log(data);
      mutate(formData);
    }
    handleOpen();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleOpen();
    }
  };

  return (
    Open &&
    document.querySelector("body") &&
    ReactDOM.createPortal(
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={handleOverlayClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="w-[370px] h-[470px] rounded-[15px] border-1 shadow-all border-white flex flex-col items-center py-[10px] px-[25px] z-10 absolute top-[25%] left-[45%]"
        >
          <div className="w-[320px] h-[0.3px] bg-[#C2C2C2] mt-[10px]"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col gap-[19px] mt-[90px] items-center"
          >
            <div className="w-full h-max flex flex-col gap-[19px]">
              <Input
                type="file"
                {...register("image", { required: "заполните поле" })}
              />
              <Input
                placeholder="Title"
                {...register("title", { required: "заполните поле" })}
              />
              <Input
                placeholder="Description"
                {...register("description", { required: "заполните поле" })}
              />
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
        </motion.div>
      </div>,
      document.querySelector("body")!
    )
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { FC } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useEdit } from "../hooks/useEdit";

interface Props {
  Edit: boolean;
  handleEdit: () => void;
}

export const EditProfile: FC<Props> = ({ Edit, handleEdit }) => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useEdit();

  const onSubmit = (data: any) => {
    console.log(data);
    mutate(data);
    handleEdit();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleEdit();
    }
  };

  return (
    Edit &&
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
          className="w-[490px] h-max rounded-[15px] border-1 shadow-all border-white flex flex-col gap-[10px] px-[30px] pt-[20px] pb-[10px]"
        >
          <h1>edit your description</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex gap-[19px] items-center"
          >
            <Input
              placeholder="description"
              {...register("description", { required: "заполните поле" })}
            />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                type="submit"
                variant={"ghost"}
                className="border-[1px] border-white w-max px-[30px]"
              >
                Создать
              </Button>
            </motion.div>
          </form>
          <div className="w-full h-full flex justify-center items-end mt-[8px]">
            <div className="w-[245px] h-[1px] bg-[#C2C2C2]"></div>
          </div>
        </motion.div>
      </div>,
      document.querySelector("body")!
    )
  );
};

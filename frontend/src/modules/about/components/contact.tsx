import { FC, ReactNode} from "react";

interface Props {
    icon: ReactNode;
}

export const Contact:FC<Props> = ({icon}) => {
    return(
        <div className="w-[56px] h-[56px] rounded-[6px] bg-white flex justify-center items-center relative hover:bg-[#7D7FCF]"
        >
            {icon}
            <span className="w-[30px] h-[1px] bg-black absolute bottom-[4px] group-hover:bg-white"></span>
        </div>
    )
}
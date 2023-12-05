import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function RemoveFolder () {
    return (
        <div className="w-[36px] h-[31px] bg-primary rounded-r-lg flex justify-center py-1 -my-1 cursor-pointer">
            <RiDeleteBin6Line size='24px' color="red"/>
        </div>
    )
}

export default RemoveFolder
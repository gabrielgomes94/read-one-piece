import React from "react";
import arrowRight from "../../../../../icons/arrow-right.svg"
import arrowLeft from "../../../../../icons/arrow-left.svg"

export const PageButton = ({onClick, type}) => (
    <div className={
        "hover:bg-slate-400 " +
        "flex items-center rounded " +
        "p-1 m-1 md:p-4 md:m-4 "
    }
         onClick={onClick}
    >
        <img src={type === 'next' ? arrowRight : arrowLeft}/>
    </div>
)

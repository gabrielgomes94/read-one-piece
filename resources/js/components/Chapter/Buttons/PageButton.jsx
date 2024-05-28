import React from "react";
import {ArrowRight} from "../../Icons/ArrowRight.jsx";
import {ArrowLeft} from "../../Icons/ArrowLeft.jsx";

export const PageButton = ({onClick, type}) => (
    <div className={
        "hover:bg-red-100 " +
        "flex items-center rounded " +
        "p-1 m-1 md:p-4 md:m-4 "
    }
         onClick={onClick}
    >
        {
            type === 'next'
                ? <ArrowRight />
                : <ArrowLeft />
        }
    </div>
)

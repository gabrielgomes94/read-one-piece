import React from "react";
import {ArrowRight} from "../Icons/ArrowRight.jsx";
import {ArrowLeft} from "../Icons/ArrowLeft.jsx";

export const PageButton = ({onClick, type}) => (
    <div className={"right min-h-max hover:bg-gray-300 hover:text-white flex items-center p-8 m-8"}
         onClick={onClick}
    >
        {
            type === 'next'
                ? <ArrowRight />
                : <ArrowLeft />
        }
    </div>
)

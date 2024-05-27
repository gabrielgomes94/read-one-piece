import React from "react";
import {DoubleArrowRight} from "../Icons/DoubleArrowRight.jsx";
import {DoubleArrowLeft} from "../Icons/DoubleArrowLeft.jsx";

export const ChapterButton = ({onClick, type}) => (
    <div
        onClick={onClick}
        className="hover:bg-red-100 flex items-center rounded p-1 m-1 md:p-4 md:m-4"
    >
        {
            type === 'next' ? <DoubleArrowRight/> : <DoubleArrowLeft/>
        }
    </div>
)

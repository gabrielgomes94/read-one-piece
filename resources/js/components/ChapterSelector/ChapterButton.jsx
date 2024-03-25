import React from "react";
import {DoubleArrowRight} from "../Icons/DoubleArrowRight.jsx";
import {DoubleArrowLeft} from "../Icons/DoubleArrowLeft.jsx";

export const ChapterButton = ({onClick, type}) => (
    <div
        onClick={onClick}
        className="hover:bg-gray-300 flex items-center rounded p-4 m-4"
    >
        {
            type === 'next' ? <DoubleArrowRight/> : <DoubleArrowLeft/>
        }
    </div>
)

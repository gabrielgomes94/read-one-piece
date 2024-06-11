import React from "react";
import doubleArrowRight from "../../../../../icons/next-chapter-arrow.svg"
import doubleArrowLeft from "../../../../../icons/prev-chapter-arrow.svg"

export const ChapterButton = ({onClick, type}) => (
    <div
        onClick={onClick}
        className="hover:bg-slate-400 flex items-center rounded p-1 m-1 md:p-4 md:m-4"
    >
        <img src={type === 'next' ? doubleArrowRight : doubleArrowLeft} />
    </div>
)

import React from "react";

export const NextPageButton = ({onClick}) => (
    <div className="right min-h-max hover:bg-gray-300 hover:text-white
        flex items-center rounded-r-lg p-8 m-8"
         onClick={onClick}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
        >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/>
        </svg>
    </div>
)

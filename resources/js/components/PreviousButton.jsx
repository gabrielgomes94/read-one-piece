import React from "react";

export const PreviousButton = (props) => (
    <div className="left
    min-h-max
    hover:bg-gray-300
    flex items-center
    rounded-l-lg p-8 m-8"
         onClick={props.onClick}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
        >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/>
        </svg>
    </div>
)

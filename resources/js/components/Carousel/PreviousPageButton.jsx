import React from "react";
import {Small} from "../Utils/Buttons/Small.jsx";
import {DoubleArrowLeft} from "../Utils/Icons/DoubleArrowLeft.jsx";
import {Large} from "../Utils/Buttons/Large.jsx";
import {ArrowLeft} from "../Utils/Icons/ArrowLeft.jsx";

export const PreviousPageButton = (props) => (
    // <div className="left
    // min-h-max
    // hover:bg-gray-300
    // flex items-center
    // rounded-l-lg p-8 m-8"
    //      onClick={props.onClick}>
    //     <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         height="40"
    //         viewBox="0 96 960 960"
    //         width="40"
    //     >
    //         <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/>
    //     </svg>
    // </div>

<div
    onClick={props.onClick}
    className="left min-h-max"
>
    <Large>
        <ArrowLeft/>
    </Large>
</div>
)

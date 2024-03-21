import React from "react";
import {Small} from "../Utils/Buttons/Small.jsx";
import {DoubleArrowRight} from "../Utils/Icons/DoubleArrowRight.jsx";

export const NextChapterButton = ({onClick}) => (
    <div
        onClick={onClick}
        className="right"
    >
        <Small>
            <DoubleArrowRight/>
        </Small>
    </div>
)

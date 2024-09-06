import {ChangeColors} from "../Buttons/ChangeColors.jsx";
import {Share} from "../Buttons/Share.jsx";
import {Download} from "../Buttons/Download.jsx";
import React from "react";

export default function HorizontalToolset(
    {
        chapterId,
        currentPage
    }
) {
    return (
        <div className="flex justify-between space-x-1">
            <div className="">
                <ChangeColors chapterId={chapterId}/>
            </div>

            <div className="">
                <Share
                    chapterId={chapterId}
                    currentPage={currentPage}
                />
            </div>

            <div className="">
                <Download
                    chapterId={chapterId}
                />
            </div>
        </div>
    )
}

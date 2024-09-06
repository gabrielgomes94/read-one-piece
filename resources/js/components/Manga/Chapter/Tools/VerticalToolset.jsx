import {ChangeColors} from "../Buttons/ChangeColors.jsx";
import {Share} from "../Buttons/Share.jsx";
import {Download} from "../Buttons/Download.jsx";
import React from "react";

export default function VerticalToolset(
    {
        chapterId,
        currentPage
    }
) {
    return (
        <div className="flex flex-col justify-between space-y-2">
            <div>
                <ChangeColors chapterId={chapterId}/>
            </div>

            <div>
                <Share
                    chapterId={chapterId}
                    currentPage={currentPage}
                />
            </div>

            <div>
                <Download
                    chapterId={chapterId}
                />
            </div>
        </div>
    )
}

import {ChangeColors} from "../Buttons/ChangeColors.jsx";
import {Share} from "../Buttons/Share.jsx";
import {Download} from "../Buttons/Download.jsx";
import React from "react";

export default function HorizontalToolset(
    chapterId,
    currentPage
) {
    return (
        <>
            <div className="mx-2">
                <ChangeColors chapterId={chapterId}/>
            </div>

            <div className="mx-2">
                <Share
                    chapterId={chapterId}
                    currentPage={currentPage}
                />
            </div>

            <div className="mx-2">
                <Download
                    chapterId={chapterId}
                />
            </div>
        </>
    )
}

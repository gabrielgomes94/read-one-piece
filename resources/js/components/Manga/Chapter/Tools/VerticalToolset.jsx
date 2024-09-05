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
    console.log(chapterId)

    return (
        <>
            <div className="mt-2">
                <ChangeColors chapterId={chapterId}/>
            </div>

            <div className="my-2">
                <Share
                    chapterId={chapterId}
                    currentPage={currentPage}
                />
            </div>

            <div className="mt-2">
                <Download
                    chapterId={chapterId}
                />
            </div>
        </>
    )
}

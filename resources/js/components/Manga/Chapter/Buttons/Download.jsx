import React from "react";
import downloadIcon from "../../../../../icons/download.svg";

export function Download(
    {
        chapterId
    }
) {
    return (
        <div className="flex">
            <a href={"download?chapter=" + chapterId}
               className="bg-blue-800 p-2 rounded text-white"
               title="Baixar capítulo"
            >
                <img src={downloadIcon}/>
            </a>
        </div>
    )
}

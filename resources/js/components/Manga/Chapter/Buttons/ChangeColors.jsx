import React from "react";
import colorIcon from "../../../../../icons/color.svg";

export function ChangeColors(
    chapterId
) {
    const currentMangaIsColored = () => {
        if (window.document.location.pathname === "/manga") {
            return false
        }

        return true
    }

    const link = () => {
        if(currentMangaIsColored()) {
            return "/manga"
        }

        return "/manga-colorido"
    }

    return (
            <div className="flex">
                <a href={link() + "?chapter=" + chapterId['chapterId']}
                   className="bg-blue-800 p-2 rounded text-white"
                   title={currentMangaIsColored ? "Trocar para preto e branco" : "Trocar para Colorido"}
                >
                    <img src={colorIcon}/>
                </a>
            </div>
    )
}

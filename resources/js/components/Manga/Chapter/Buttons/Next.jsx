import React from "react";
import {ChapterButton} from "../../ChapterSelector/Buttons/ChapterButton.jsx";
import {PageButton} from "./PageButton.jsx";

export function Next(
    {
        currentPage,
        images,
        handleNextPage
    }
) {
    return currentPage + 1 === images.length
        ? <ChapterButton onClick={handleNextPage} type={'next'} />
        : <PageButton onClick={handleNextPage} type={'next'} />
}

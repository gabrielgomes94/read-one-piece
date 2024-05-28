import React from "react";
import {ChapterButton} from "../../ChapterSelector/ChapterButton.jsx";
import {PageButton} from "./PageButton.jsx";

export function Previous(
    {
        currentPage,
        handlePreviousPage
    }
) {
    return currentPage === 0
        ? <ChapterButton onClick={handlePreviousPage} type={'prev'} />
        : <PageButton onClick={handlePreviousPage} type={'prev'} />
}

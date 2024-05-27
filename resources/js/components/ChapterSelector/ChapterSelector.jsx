import React from "react"
import Select from 'react-select';
import {ChapterButton} from "./ChapterButton.jsx";

export const ChapterSelector = (
    {
        options,
        selectedChapter,
        handleNextChapter,
        handlePreviousChapter,
        changeChapter,
    }
) => {
    return (
        <>
            <ChapterButton onClick={handlePreviousChapter} type={'prev'} />

            <Select options={options}
                    isSearchable={true}
                    className="w-full"
                    onChange={changeChapter}
                    value={selectedChapter}
            />

            <ChapterButton onClick={handleNextChapter} type={'next'} />
        </>
    )
}

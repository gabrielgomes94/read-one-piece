import React from "react"
import Select from 'react-select';
import {ChapterButton} from "./Buttons/ChapterButton.jsx";

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
        <div className="flex flex-row items-center form-control w-full bg-slate-200 shadow-2xl">
            <ChapterButton onClick={handlePreviousChapter} type={'prev'}/>

            <Select options={options}
                    isSearchable={true}
                    className="w-full"
                    onChange={changeChapter}
                    value={selectedChapter}
            />

            <ChapterButton onClick={handleNextChapter} type={'next'}/>
        </div>
    )
}

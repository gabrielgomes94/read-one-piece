import React, {useState} from "react"
import Select from 'react-select';
import {PreviousChapterButton} from "./PreviousChapterButton.jsx";
import {NextChapterButton} from "./NextChapterButton.jsx";

export const ChapterSelector = (
    {
        onChange,
        options,
        selectedChapter,
        handleNextChapter,
        handlePreviousChapter
    }) => {
    const [selectedItem, setSelectedItem] = useState()

    const handle = (selectedOption) => {
        setSelectedItem(selectedOption)
    }

    return (
        <>
            <PreviousChapterButton onClick={handlePreviousChapter} />

            <Select options={options}
                    isSearchable={true}
                    className="w-full"
                    onChange={onChange}
                    value={selectedChapter}
            />

            <NextChapterButton onClick={handleNextChapter} />
        </>
    )
}

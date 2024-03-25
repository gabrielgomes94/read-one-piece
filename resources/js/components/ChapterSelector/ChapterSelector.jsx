import React, {useState} from "react"
import Select from 'react-select';
import {ChapterButton} from "./ChapterButton.jsx";

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
            <ChapterButton onClick={handlePreviousChapter} type={'prev'} />

            <Select options={options}
                    isSearchable={true}
                    className="w-full"
                    onChange={onChange}
                    value={selectedChapter}
            />

            <ChapterButton onClick={handleNextChapter} type={'next'} />
        </>
    )
}

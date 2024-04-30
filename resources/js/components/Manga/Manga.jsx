import React, {useEffect, useState} from "react";
import axios from "axios";
import {ChapterSelector} from "../ChapterSelector/ChapterSelector.jsx";
import Carousel from "../Carousel/Carousel.jsx";

export function Manga(
    {
        listChaptersURI,
        chapterId = null
    }
) {
    const [images, setImages] = useState([])
    const [chapters, setChapters] = useState([])
    const [selectedChapter, setSelectedChapter] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        axios.get(window.location.origin + '/api/' + listChaptersURI)
            .then(function (response) {
                setChapters(response.data.chapters)

                const firstChapter = response.data.chapters[chapterId ?? 1] // Chapter 0 is not the first one
                handleChapterSelection(
                    {
                        value: firstChapter.value,
                        label: firstChapter.label
                    }
                )
            })
            .catch();
    }, []);

    const handleChapterSelection = (selectedOption) => {
        const data = chapters.filter(chapter => chapter['value'] === selectedOption.value)[0]
        resetChapter()
        setSelectedChapter(data ? data : selectedOption)

        const uri =  '/api/' + listChaptersURI + '/' + selectedOption.value
        axios.get(window.location.origin + uri)
            .then(function (response) {
                setImages(response.data.images)
            })
            .catch(function (error) {
            });
    }

    const padChapter = (value) => {
        return value.toString().padStart(4, '0')
    }

    const goToNextChapter = () => {
        resetChapter()

        const value = parseInt(selectedChapter.value) + 1
        handleChapterSelection({value: padChapter(value)})
    }

    const goToPreviousChapter = () => {
        resetChapter()

        const value = parseInt(selectedChapter.value) - 1
        handleChapterSelection({value: padChapter(value)})
    }

    const goToNextPage = () => {
        currentPage + 1 === images.length
            ? goToNextChapter()
            : setCurrentPage((currentPage) => currentPage + 1)
    }
    const goToPreviousPage = () => {
        currentPage - 1 < 0
            ? goToPreviousChapter()
            : setCurrentPage((currentPage) => currentPage - 1)
    }

    const resetChapter = () => setCurrentPage(0)

    return (
        <div className="w-full flex items-center h-max" >
            <div className="flex flex-col items-center justify-between w-full">
                <div className="flex flex-row items-center form-control w-full">
                    <ChapterSelector
                        onChange={handleChapterSelection}
                        options={chapters}
                        selectedChapter={selectedChapter}
                        handleNextChapter={goToNextChapter}
                        handlePreviousChapter={goToPreviousChapter}
                    />
                </div>

                <Carousel
                    images={images}
                    handleNextChapter={goToNextChapter}
                    handlePreviousChapter={goToPreviousChapter}
                    currentPage={currentPage}
                    handlePreviousPage={goToPreviousPage}
                    handleNextPage={goToNextPage}
                />
            </div>
        </div>
    )
}

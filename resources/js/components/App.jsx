import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Carousel from "./Carousel/Carousel.jsx";
import axios from 'axios';
import {ChapterSelector} from "./ChapterSelector/ChapterSelector.jsx";
import {PreviousChapterButton} from "./ChapterSelector/PreviousChapterButton.jsx";
import {NextChapterButton} from "./ChapterSelector/NextChapterButton.jsx";

export function App() {
    const [images, setImages] = useState([])
    const [chapters, setChapters] = useState([])
    const [selectedChapter, setSelectedChapter] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        handleChapterSelection({value: "0001", label: "Capítulo 01 - Romance Dawn"})

        axios.get(window.location.origin + '/api/chapters')
            .then(function (response) {
                setChapters(response.data.chapters)
            })
            .catch();
    }, []);

    const handleChapterSelection = (selectedOption) => {
        const data = chapters.filter(chapter => chapter['value'] === selectedOption.value)[0]
        setSelectedChapter(data ? data : selectedOption)

        axios.get(window.location.origin + '/api/cap/' + selectedOption.value)
            .then(function (response) {
                setImages(response.data.images)
            })
            .catch(function (error) {
            });
    }

    const padChapter = (value) => {
        return value.toString().padStart(4, '0')
    }

    const handleNextChapter = () => {
        setCurrentPage(0)

        const value = parseInt(selectedChapter.value) + 1
        handleChapterSelection({value: padChapter(value)})
    }

    const handlePreviousChapter = () => {
        setCurrentPage(0)

        const value = parseInt(selectedChapter.value) - 1
        handleChapterSelection({value: padChapter(value)})
    }

    const handleNextPage = () => {
        currentPage + 1 === images.length
            ? handleNextChapter()
            : setCurrentPage((currentPage) => currentPage + 1)
    }
    const handlePreviousPage = () => {
        currentPage - 1 < 0
            ? handlePreviousChapter()
            : setCurrentPage((currentPage) => currentPage - 1)
    }

    return (
        <div className="w-full flex items-center h-max" >
            <div className="flex flex-col items-center justify-between w-full">
                <div className="flex flex-row items-center m-4 form-control w-full">
                    <ChapterSelector
                        onChange={handleChapterSelection}
                        options={chapters}
                        selectedChapter={selectedChapter}
                        handleNextChapter={handleNextChapter}
                        handlePreviousChapter={handlePreviousChapter}
                    />
                </div>

                <Carousel
                    images={images}
                    handleNextChapter={handleNextChapter}
                    handlePreviousChapter={handlePreviousChapter}
                    currentPage={currentPage}
                    handlePreviousPage={handlePreviousPage}
                    handleNextPage={handleNextPage}
                />
            </div>
        </div>
    )
}

if (document.getElementById('manga')) {
    const container = document.getElementById('manga');
    const root = createRoot(container);

    root.render(<App />);
}

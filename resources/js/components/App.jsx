import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Carousel from "./Carousel.jsx";
import axios from 'axios';
import {ChapterSelector} from "./ChapterSelector.jsx";
import {PreviousChapterButton} from "./PreviousChapterButton.jsx";
import {NextChapterButton} from "./NextChapterButton.jsx";

export function App() {
    const [images, setImages] = useState([])
    const [chapters, setChapters] = useState([])
    const [selectedChapter, setSelectedChapter] = useState([])

    useEffect(() => {
        handleChapterSelection({value: "0001", label: "Capítulo 01 - Romance Dawn"})

        axios.get('http://localhost/api/chapters')
            .then(function (response) {
                setChapters(response.data.chapters)
            })
            .catch();

    }, []);

    const handleChapterSelection = (selectedOption) => {
        const data = chapters.filter(chapter => chapter['value'] === selectedOption.value)[0]
        setSelectedChapter(data ? data : selectedOption)

        axios.get('http://localhost/api/cap/' + selectedOption.value)
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
        const value = parseInt(selectedChapter.value) + 1

        handleChapterSelection({value: padChapter(value)})
    }

    const handlePreviousChapter = () => {
        const value = parseInt(selectedChapter.value) - 1

        handleChapterSelection({value: padChapter(value)})
    }

    return (
        <div className="w-full flex items-center bg-gray-100" >
            <div className="flex flex-col items-center justify-between w-full">
                <div className="flex flex-row items-center m-4 form-control w-full">
                    <PreviousChapterButton onClick={handlePreviousChapter} />

                    <ChapterSelector
                        onChange={handleChapterSelection}
                        options={chapters}
                        selectedChapter={selectedChapter}
                    />

                    <NextChapterButton onClick={handleNextChapter} />
                </div>

                <
                    Carousel images={images}
                          nextChapterButton={handleNextChapter}
                          previousChapterButton={handlePreviousChapter}
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

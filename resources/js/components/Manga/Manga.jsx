import React, {useState} from "react";
import axios from "axios";
import {ChapterSelector} from "../ChapterSelector/ChapterSelector.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import useFetchChaptersList from "../../hooks/useFetchChaptersList.js";
import useInitialChapter from "../../hooks/useInitialChapter.js";
import useChaptersFallback from "../../hooks/useChaptersFallback.js";

export function Manga(
    {
        listChaptersURI,
        chapterId = 1,
        page = 0,
        setCookie
    }
) {
    const [images, setImages] = useState([])
    const [chapters, setChapters] = useState([])
    const [selectedChapter, setSelectedChapter] = useState([])
    const [currentPage, setCurrentPage] = useState(parseInt(page))

    const handleChapterSelection = (chapterValue) => {
        if (!chapterValue) {
            return;
        }

        chapterValue = padChapter(chapterValue)
        const data = chapters.filter(chapter => chapter['value'] === chapterValue)[0]

        if (data.length === 0) {
            return
        }

        setSelectedChapter(data)
        setChapterCookie(chapterValue)
        fetchChapterImages(chapterValue)
    }

    const handleChapterChange = (selectedOption) => {
        handleChapterSelection(selectedOption.value)
        resetChapter()
    }

    const padChapter = (value) => {
        return value.toString().padStart(4, '0')
    }

    const goToNextChapter = () => {
        const value = parseInt(selectedChapter.value) + 1
        handleChapterSelection(padChapter(value))
        resetChapter()
    }

    const goToPreviousChapter = () => {
        const value = parseInt(selectedChapter.value) - 1
        handleChapterSelection(padChapter(value))
        resetChapter()
    }

    const goToNextPage = () => {
        if (currentPage + 1 === images.length) {
            goToNextChapter()
        } else {
            setCurrentPage((currentPage) => currentPage + 1)
            setPageCookie()
        }
    }
    const goToPreviousPage = () => {
        if (currentPage - 1 < 0) {
            goToPreviousChapter()
        } else {
            setCurrentPage((currentPage) => currentPage - 1)
            setPageCookie()
        }
    }

    const resetChapter = () => {
        setCurrentPage(0)
        setPageCookie()
    }

    const setPageCookie = () => { setCookie('page', currentPage, {path: '/'}) }
    const setChapterCookie = (chapter) => { setCookie('chapter', parseInt(chapter), {path: '/'}) }

    const fetchChapterImages = (chapter) => {
        const urlGetChapterApi = window.location.origin + `/api/${listChaptersURI}/${chapter}`

        axios.get(urlGetChapterApi)
            .then(
                function (response) {
                    setImages(response.data.images)
                }
            ).catch(
                function (error) {}
            );
    }

    useFetchChaptersList(listChaptersURI, setChapters)
    useInitialChapter(chapters,  chapterId, handleChapterSelection)
    useChaptersFallback(chapterId, chapters, currentPage, images, resetChapter)

    return (
        <div className="w-full flex items-center h-max" >
            <div className="flex flex-col items-center justify-between w-full">
                <div className="flex flex-row items-center form-control w-full">
                    <ChapterSelector
                        options={chapters}
                        selectedChapter={selectedChapter}
                        handleNextChapter={goToNextChapter}
                        handlePreviousChapter={goToPreviousChapter}
                        changeChapter={handleChapterChange}
                    />
                </div>

                <div className="flex flex-col justify-between object-fill h-svh">
                    <Carousel
                        images={images}
                        chapterId={chapterId}
                        currentPage={currentPage}
                        handlePreviousPage={goToPreviousPage}
                        handleNextPage={goToNextPage}
                    />

                </div>
            </div>
        </div>
    )
}

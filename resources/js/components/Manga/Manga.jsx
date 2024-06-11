import React, {useState} from "react";
import axios from "axios";
import {ChapterSelector} from "./ChapterSelector/ChapterSelector.jsx";
import Chapter from "./Chapter/Chapter.jsx";
import useFetchChaptersList from "../../hooks/useFetchChaptersList.js";
import useInitialChapter from "../../hooks/useInitialChapter.js";
import useChaptersFallback from "../../hooks/useChaptersFallback.js";
import {padChapter} from "../../utils/padding.js";

export function Manga(
    {
        listChaptersURI,
        chapterId,
        page,
        setCookie
    }
) {
    const [images, setImages] = useState([])
    const [chapters, setChapters] = useState([])
    const [currentChapter, setCurrentChapter] = useState([])
    const [currentPage, setCurrentPage] = useState(page)

    const handleChapterSelection = (chapterValue) => {
        if (!chapterValue) {
            return;
        }

        chapterValue = padChapter(chapterValue)
        const data = chapters.filter(chapter => chapter['value'] === chapterValue)[0]

        if (data.length === 0) {
            return
        }

        setCurrentChapter(data)
        setChapterCookie(chapterValue)
        fetchChapterImages(chapterValue)
    }

    const handleChapterChange = (selectedOption) => {
        handleChapterSelection(selectedOption.value)
        resetChapter()
    }

    const goToNextChapter = () => {
        const value = parseInt(currentChapter.value) + 1
        handleChapterSelection(padChapter(value))
        resetChapter()
    }

    const goToPreviousChapter = () => {
        const value = parseInt(currentChapter.value) - 1
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

    const getChapterId = () => {
        return parseInt(currentChapter['value'] ?? 1)
    }

    useFetchChaptersList(listChaptersURI, setChapters)
    useInitialChapter(chapters,  chapterId, handleChapterSelection)
    useChaptersFallback(chapterId, chapters, currentPage, images, resetChapter)

    return (
        <div className="w-full flex flex-col items-center">
            <ChapterSelector
                options={chapters}
                selectedChapter={currentChapter}
                handleNextChapter={goToNextChapter}
                handlePreviousChapter={goToPreviousChapter}
                changeChapter={handleChapterChange}
            />

            <Chapter
                images={images}
                chapterId={getChapterId()}
                currentPage={currentPage}
                handlePreviousPage={goToPreviousPage}
                handleNextPage={goToNextPage}
            />
        </div>
    )
}

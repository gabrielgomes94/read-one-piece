import React, {useEffect, useState} from "react";
import axios from "axios";
import {ChapterSelector} from "../ChapterSelector/ChapterSelector.jsx";
import Carousel from "../Carousel/Carousel.jsx";

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

    /**
     * List chapters
     */
    useEffect(() => {
        let ignore = false

        axios.get(urlListChapterApi())
            .then(
                function (response) {
                    if (!ignore) {
                        const data = response.data.chapters
                        setChapters(data)
                    }
                }
            )
            .catch();

        return () => {
            ignore = true
        }
    }, []);

    /**
     * Set initial chapter
     */
    useEffect(() => {
        if (!chapters[chapterId]) {
            return
        }

        handleChapterSelection(chapters[chapterId].value)
    }, [chapters])

    const handleChapterSelection = (chapterValue) => {
        if (!chapterValue) {
            return;
        }

        const selectedChapterValue = padChapter(chapterValue)
        const data = chapters.filter(chapter => chapter['value'] === selectedChapterValue)[0]

        if (data.length === 0) {
            return
        }

        setSelectedChapter(data)
        setChapterCookie(selectedChapterValue)

        axios.get(
            urlGetChapterApi(selectedChapterValue)
        ).then(
            function (response) {
                setImages(response.data.images)
            }
        ).catch(function (error) {});
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
    const urlGetChapterApi = (chapter) => window.location.origin + `/api/${listChaptersURI}/${chapter}`
    const urlListChapterApi = () => window.location.origin + `/api/${listChaptersURI}`

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

                <Carousel
                    images={images}
                    currentPage={currentPage}
                    handlePreviousPage={goToPreviousPage}
                    handleNextPage={goToNextPage}
                />
            </div>
        </div>
    )
}

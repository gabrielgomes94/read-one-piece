import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {ChapterSelector} from "../ChapterSelector/ChapterSelector.jsx";
import Carousel from "../Carousel/Carousel.jsx";

export function Manga(
    {
        listChaptersURI,
        chapterId = null,
        page = null,
        setCookie
    }
) {
    const [images, setImages] = useState([])
    const [chapters, setChapters] = useState([])
    const [selectedChapter, setSelectedChapter] = useState([])
    const [currentPage, setCurrentPage] = useState(page ?? 0)

    useEffect(() => {
        axios.get(window.location.origin + '/api/' + listChaptersURI)
            .then(function (response) {
                let data = response.data.chapters
                const firstChapter = data[chapterId ?? 1] // Chapter 0 is not the first one

                setChapters(data)
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
        const uri =  '/api/' + listChaptersURI + '/' + selectedOption.value

        setSelectedChapter(data ? data : selectedOption)
        setChapterCookie(selectedOption.value)

        axios.get(window.location.origin + uri)
            .then(function (response) {
                setImages(response.data.images)
            })
            .catch(function (error) {
            });
    }

    const handleChapterChange = (selectedOption) => {
        handleChapterSelection(selectedOption)
        resetChapter()
    }

    const handleSwipe = useCallback(({ deltaX, deltaY }) => {
        if (Math.abs(deltaX) <= Math.abs(deltaY)) {
            return
        }

        deltaX > 0
            ? goToPreviousPage()
            : goToNextPage()
    }, [currentPage])


    const padChapter = (value) => {
        return value.toString().padStart(4, '0')
    }

    const goToNextChapter = () => {
        const value = parseInt(selectedChapter.value) + 1
        handleChapterSelection({value: padChapter(value)})
        resetChapter()
    }

    const goToPreviousChapter = () => {
        const value = parseInt(selectedChapter.value) - 1
        handleChapterSelection({value: padChapter(value)})
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

    const setPageCookie = () => { setCookie('page', currentPage) }
    const setChapterCookie = (chapter) => { setCookie('chapter', parseInt(chapter)) }

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
                    onSwipe={handleSwipe}
                />
            </div>
        </div>
    )
}

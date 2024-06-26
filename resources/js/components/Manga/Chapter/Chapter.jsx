import React from "react";
import Page from "./Page/Page.jsx";
import useKeyboardInput from "../../../hooks/useKeyboardInput.js"
import ChapterNavigation from "./Navigation/ChapterNavigation.jsx";
import VerticalToolset from "./Tools/VerticalToolset.jsx";
import HorizontalToolset from "./Tools/HorizontalToolset.jsx";

export default function Chapter(
    {
        images,
        chapterId,
        currentPage,
        handleNextPage,
        handlePreviousPage,
        setCurrentPage
    }
) {
    useKeyboardInput(currentPage, handleNextPage, handlePreviousPage)

    return (
        <div className="carousel flex flex-col w-full">
            <ChapterNavigation
                currentPage={currentPage}
                images={images}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                setCurrentPage={setCurrentPage}
            />

            <div className="m-auto flex">
                <div onClick={handleNextPage}>
                    <Page
                        currentPage={currentPage}
                        source={images[currentPage]}
                        chapterId={chapterId}
                    />
                </div>

                <div className="md:flex md:flex-col sm:hidden
                                justify-end items-end
                                mb-4 mr-4"
                >
                    <VerticalToolset
                        chapterId={chapterId}
                        currentPage={currentPage}
                    />
                </div>
            </div>

            <div className="md:flex md:flex-col sm:hidden">
                <ChapterNavigation
                    currentPage={currentPage}
                    images={images}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            <div className="md:hidden sm:flex sm:flex-row
                            justify-end items-end
                            m-auto
            ">
                <HorizontalToolset
                    chapterId={chapterId}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}

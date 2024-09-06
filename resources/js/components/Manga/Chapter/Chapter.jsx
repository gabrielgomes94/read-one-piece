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

                <div className="lg:flex lg:flex-col hidden
                                justify-end items-end
                                mb-4 mr-4"
                >
                    <VerticalToolset
                        chapterId={chapterId}
                        currentPage={currentPage}
                    />
                </div>
            </div>

            <div className="sm:flex sm:flex-col hidden">
                <ChapterNavigation
                    currentPage={currentPage}
                    images={images}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            <div className="lg:hidden md:flex md:flex-row
                            justify-end items-end
                            m-auto
                            w-100
            ">
                <HorizontalToolset
                    chapterId={chapterId}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
}

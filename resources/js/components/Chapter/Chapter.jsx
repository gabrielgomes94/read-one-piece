import React from "react";
import Page from "./Page.jsx";
import useKeyboardInput from "../../hooks/useKeyboardInput.js"
import {Share} from "./Buttons/Share.jsx";
import ChapterNavigation from "./Navigation/ChapterNavigation.jsx";

export default function Chapter(
    {
        images,
        chapterId,
        currentPage,
        handleNextPage,
        handlePreviousPage
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
            />

            <div className="m-auto flex">
                <div onClick={handleNextPage}>
                    <Page
                        currentPage={currentPage}
                        source={images[currentPage]}
                        chapterId={chapterId}

                    />
                </div>

                <div className="flex items-end mb-4 mr-4">
                    <Share
                        chapterId={chapterId}
                        currentPage={currentPage}
                    />
                </div>
            </div>

            <ChapterNavigation
                currentPage={currentPage}
                images={images}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
            />
        </div>
    );
}

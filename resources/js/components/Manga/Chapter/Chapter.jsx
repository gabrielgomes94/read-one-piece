import React from "react";
import Page from "./Page/Page.jsx";
import useKeyboardInput from "../../../hooks/useKeyboardInput.js"
import {Share} from "./Buttons/Share.jsx";
import ChapterNavigation from "./Navigation/ChapterNavigation.jsx";
import {Download} from "./Buttons/Download.jsx";

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

                <div className="flex flex-col justify-end items-end mb-4 mr-4">
                    <div className="my-2">
                        <Share
                            chapterId={chapterId}
                            currentPage={currentPage}
                        />
                    </div>

                    <div className="mt-2">
                        <Download
                            chapterId={chapterId}
                        />
                    </div>
                </div>
            </div>

            <ChapterNavigation
                currentPage={currentPage}
                images={images}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

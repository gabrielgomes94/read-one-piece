import React from "react";
import Image from "./Image.jsx";
import useKeyboardInput from "../../hooks/useKeyboardInput.js"
import {Share} from "../Manga/Share.jsx";
import ChapterNavigation from "./Navigation/ChapterNavigation.jsx";

export default function Carousel(
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
        <div className="flex flex-col items-center justify-between w-full">
            <div className="carousel flex flex-col justify-between h-svh w-full object-fill">
                <ChapterNavigation
                    currentPage={currentPage}
                    images={images}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                />

                <div className="m-auto" onClick={handleNextPage}>
                    <Image currentPage={currentPage} source={images[currentPage]}/>
                </div>

                <ChapterNavigation
                    currentPage={currentPage}
                    images={images}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                />

                <div className="flex justify-around items-center m-auto">
                    <Share
                        chapterId={chapterId}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
}

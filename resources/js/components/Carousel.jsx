import React, {useEffect} from "react";
import {PreviousButton} from "./PreviousButton.jsx";
import {NextButton} from "./NextButton.jsx";
import {NextChapterButton} from "./NextChapterButton.jsx";
import {PreviousChapterButton} from "./PreviousChapterButton.jsx";

export default function Carousel(
    {
        images,
        handleNextChapter,
        handlePreviousChapter,
        currentPage,
        handleNextPage,
        handlePreviousPage
    }
    ) {
    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'ArrowRight') {
                handleNextPage()
            }

            if (event.key === 'ArrowLeft') {
                handlePreviousPage()
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [currentPage]);

    const nextButton = currentPage + 1 === images.length
        ? <NextChapterButton onClick={handleNextChapter} />
        : <NextButton onClick={handleNextPage} />

    const previousButton = currentPage === 0
        ? <PreviousChapterButton onClick={handlePreviousChapter} />
        : <PreviousButton onClick={handlePreviousPage} />

    return (
        <div className="flex flex-col items-center justify-between w-full">
            <div className="carousel flex flex-row justify-between m-8 py-10 h-svh w-full">
                {previousButton}

                <div className="mb-10">
                    <img
                        className="size-fit"
                        key={currentPage}
                        src={images[currentPage]}
                    />
                </div>

                {nextButton}
            </div>
        </div>
    );
}

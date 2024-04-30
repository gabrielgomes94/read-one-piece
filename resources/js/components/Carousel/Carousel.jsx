import React, {useEffect} from "react";
import {PageButton} from "./PageButton.jsx";
import {ChapterButton} from "../ChapterSelector/ChapterButton.jsx";
import Swiper from "../Mobile/Swiper.jsx";

export default function Carousel(
    {
        images,
        handleNextChapter,
        handlePreviousChapter,
        currentPage,
        handleNextPage,
        handlePreviousPage,
        onSwipe
    }
    ) {
    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'ArrowRight' || event.key === 'd') {
                handleNextPage()
            }

            if (event.key === 'ArrowLeft' || event.key === 'a') {
                handlePreviousPage()
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [currentPage]);

    const nextButton = currentPage + 1 === images.length
        ? <ChapterButton onClick={handleNextChapter} type={'next'} />
        : <PageButton onClick={handleNextPage} type={'next'} />

    const previousButton = currentPage === 0
        ? <ChapterButton onClick={handlePreviousChapter} type={'prev'} />
        : <PageButton onClick={handlePreviousPage} type={'prev'} />

    return (
        <div className="flex flex-col items-center justify-between w-full">
            <div className="carousel flex flex-row justify-between h-svh w-full object-fill">

                <div className="flex flex-row hidden lg:block">
                    <div className="flex h-svh">
                        {previousButton}
                    </div>
                </div>



                    <div className="m-auto" onClick={handleNextPage}>
                        <Swiper onSwipe={onSwipe}>
                            <img
                                className="object-cover max-w-full max-h-full shadow-2xl mb-16"
                                key={currentPage}
                                src={images[currentPage]}
                            />
                        </Swiper>
                    </div>



                <div className="flex hidden lg:block">
                    <div className="flex h-svh">
                        {nextButton}
                    </div>
                </div>
            </div>
        </div>
    );
}

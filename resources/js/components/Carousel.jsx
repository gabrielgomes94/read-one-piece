import React, {useState, useEffect} from "react";
import {ChapterSelector} from "./ChapterSelector.jsx";
import {PreviousButton} from "./PreviousButton.jsx";
import {NextButton} from "./NextButton.jsx";

export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        )
    }
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        )
    }
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    }

    const handleKeyDown = (event) => {
        console.log(event)
        if (event.key === 'Arrow Right'){
            handleNext()
        }
    }

    return (
        <div className="flex flex-col items-center justify-between w-full">
            <div className="carousel flex flex-row justify-between m-8 py-10 h-svh w-full">
                <PreviousButton onClick={handlePrevious}  />

                <div className="mb-10">
                    <img
                        className="size-fit"
                        key={currentIndex}
                        src={images[currentIndex]}
                    />
                </div>


                <NextButton onClick={handleNext} />
            </div>
        </div>
    );
}



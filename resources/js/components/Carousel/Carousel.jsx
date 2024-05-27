import React from "react";
import Image from "./Image.jsx";
import useKeyboardInput from "../../hooks/useKeyboardInput.js"
import {Next as NextButton} from "./Buttons/Next.jsx";
import {Previous as PreviousButton} from "./Buttons/Previous.jsx";
import PageMarker from "./PageMarker.jsx";

export default function Carousel(
    {
        images,
        currentPage,
        handleNextPage,
        handlePreviousPage
    }
) {
    useKeyboardInput(currentPage, handleNextPage, handlePreviousPage)

    return (
        <div className="flex flex-col items-center justify-between w-full">
            <div className="carousel flex flex-col justify-between h-svh w-full object-fill">
                <div className="m-auto" onClick={handleNextPage}>
                    <Image currentPage={currentPage} source={images[currentPage]}/>
                </div>

                <div className="flex justify-around items-center m-auto mb-8">
                    <PreviousButton
                        currentPage={currentPage}
                        handlePreviousPage={handlePreviousPage}
                    />

                    <PageMarker currentPage={currentPage} images={images}/>

                    <NextButton
                        currentPage={currentPage}
                        images={images}
                        handleNextPage={handleNextPage}
                    />
                </div>
            </div>
        </div>
    );
}

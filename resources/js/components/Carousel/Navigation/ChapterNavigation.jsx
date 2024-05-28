import {Previous as PreviousButton} from "../Buttons/Previous.jsx";
import PageMarker from "../PageMarker.jsx";
import {Next as NextButton} from "../Buttons/Next.jsx";
import React from "react";

export default function ChapterNavigation(
    {
        images,
        currentPage,
        handleNextPage,
        handlePreviousPage
    }
) {
    return (
        <div className="flex justify-around items-center m-auto mb-2">
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
    )
}

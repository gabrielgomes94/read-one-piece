import React from "react";
import Swiper from "../Mobile/Swiper.jsx";
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
        handlePreviousPage,
        onSwipe
    }
) {
    useKeyboardInput(currentPage, handleNextPage, handlePreviousPage)

    return (
        <div className="flex flex-col items-center justify-between w-full">
            <div className="carousel flex flex-row justify-between h-svh w-full object-fill">
                <div className="flex flex-row hidden lg:block">
                    <div className="flex h-svh">
                        <PreviousButton
                            currentPage={currentPage}
                            handlePreviousPage={handlePreviousPage}
                        />
                    </div>
                </div>

                <div className="m-auto"  onClick={handleNextPage}>
                    <Swiper onSwipe={onSwipe}>
                        <Image currentPage={currentPage} source={images[currentPage]} />
                    </Swiper>

                    <div className="flex justify-end mb-8">
                        <PageMarker currentPage={currentPage} images={images} />
                    </div>
                </div>

                <div className="flex hidden lg:block">
                    <div className="flex h-svh">
                        <NextButton
                            currentPage={currentPage}
                            images={images}
                            handleNextPage={handleNextPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

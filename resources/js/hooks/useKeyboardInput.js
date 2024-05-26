import {useEffect} from "react";

export default function useKeyboardInput(
    currentPage,
    handleNextPage,
    handlePreviousPage,
) {
    useEffect(
        () => {
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
        },
        [currentPage]
    );
}

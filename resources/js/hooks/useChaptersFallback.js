import {useEffect} from "react";

/**
 * Set initial chapter
 */
export default function useChaptersFallback(
    chapterId,
    chapters,
    currentPage,
    images,
    resetChapter
) {
    /**
     * Reset current page when it is greater than images length
     */
    useEffect(() => {
        if (images.length === 0) {
            return
        }

        if (currentPage > images.length || currentPage <= 0) {
            resetChapter()
        }

    }, [images, currentPage]);

    /**
     * Reset app when chapterId is greater than chapters quantity
     */
    useEffect(() => {
        if (chapters.length === 0) {
            return
        }

        if (parseInt(chapterId) > chapters.length) {
            window.location.pathname = 'manga'
        }

    }, [chapters]);
}

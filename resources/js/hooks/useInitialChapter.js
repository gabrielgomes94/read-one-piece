import {useEffect} from "react";

/**
 * Set initial chapter
 */
export default function useInitialChapter(
    chapters,
    chapterId,
    handleChapterSelection
) {
    useEffect(() => {
        if (!chapters[chapterId]) {
            return
        }

        handleChapterSelection(chapters[chapterId].value)
    }, [chapters])
}

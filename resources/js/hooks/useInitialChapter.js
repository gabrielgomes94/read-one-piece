import {useEffect} from "react";
import {padChapter} from "../utils/padding.js";
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

        const chapter = chapters.filter(
            (chapter) => chapter.value === padChapter(chapterId)
        )

        handleChapterSelection(chapter[0].value)
    }, [chapters])
}

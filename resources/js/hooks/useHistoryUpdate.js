import {useEffect} from "react";

/**
 * Updates history on chapter or page changes
 */
export default function useHistoryUpdate(chapterId, currentPage) {
    useEffect(
        () => {
            history.replaceState(
                null,
                null,
                'manga?capitulo=' + chapterId + '&pagina=' + currentPage
            )
        },
        [chapterId, currentPage]
    )
}

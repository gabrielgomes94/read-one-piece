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
                window.location.pathname + '?capitulo=' + chapterId + '&pagina=' + (currentPage + 1)
            )
        },
        [chapterId, currentPage]
    )
}

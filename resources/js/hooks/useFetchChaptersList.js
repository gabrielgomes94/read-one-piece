import {useEffect} from "react";
import axios from "axios";

/**
 * List chapters
 */
export default function useFetchChaptersList(
    listChaptersURI,
    setChapters
) {
    useEffect(() => {
        let ignore = false
        fetchChaptersList(ignore)

        return () => {
            ignore = true
        }
    }, []);

    const fetchChaptersList = (ignore) => {
        axios.get(urlListChapterApi)
            .then(
                function (response) {
                    if (!ignore) {
                        const data = response.data.chapters
                        setChapters(data)
                    }
                }
            )
            .catch();
    }

    const urlListChapterApi = window.location.origin + `/api/${listChaptersURI}`
}

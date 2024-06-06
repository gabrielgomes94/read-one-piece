import React, {useEffect, useState} from "react";
import Loading from "./Loading.jsx";
import useHistoryUpdate from "../../hooks/useHistoryUpdate.js";

export default function Page(
    {
        currentPage,
        source,
        chapterId
    }
) {
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            setLoading(true);
        },
        [currentPage]
    )

    useHistoryUpdate(chapterId, currentPage)

    const imageLoaded = () => {
        setTimeout(
            () => {
                setLoading(false)
            },
            50
        )
    }

    return <>
        <Loading isLoading={loading} />

        <img
            className="object-cover max-w-full max-h-full shadow-2xl mb-4"
            key={currentPage}
            src={source}
            onLoad={imageLoaded}
            style={{display: loading ? "none" : "block"}}
        />
    </>
}

import React, {useEffect, useRef, useState} from "react";
import Loading from "./Loading.jsx";
import useHistoryUpdate from "../../../../hooks/useHistoryUpdate.js";

export default function Page(
    {
        currentPage,
        source,
        chapterId
    }
) {
    const [loading, setLoading] = useState(true)

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

    return (
        <div className="flex flex-col justify-between object-fill my-4 mx-4">
            <Loading isLoading={loading}/>

            <img
                className="object-cover shadow-2xl"
                id="current-page"
                key={currentPage}
                src={source}
                onLoad={imageLoaded}
                style={{display: loading ? "none" : "block"}}
            />
        </div>
    )
}

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

    return (
        <div className="flex flex-col justify-between object-fill h-svh my-4 mx-16">
            <Loading isLoading={loading}/>

            <img
                className="object-cover max-w-full max-h-full shadow-2xl"
                key={currentPage}
                src={source}
                onLoad={imageLoaded}
                style={{display: loading ? "none" : "block"}}
            />
        </div>
    )
}

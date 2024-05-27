import React, {useEffect, useState} from "react";
import Loading from "./Loading.jsx";

export default function Image(
    {
        currentPage,
        source
    }
) {
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            setLoading(true);
        },
        [currentPage]
    )

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
            className="object-cover max-w-full max-h-full shadow-2xl mb-12"
            key={currentPage}
            src={source}
            onLoad={imageLoaded}
            style={{display: loading ? "none" : "block"}}
        />
    </>
}

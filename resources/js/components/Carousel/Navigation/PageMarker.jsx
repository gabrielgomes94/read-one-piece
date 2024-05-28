import React from "react";

export default function PageMarker(
    {
        currentPage,
        images
    }
) {
    return <span className="font-sans font-semibold tabular-nums tracking-wide">
        {currentPage + 1}/{images.length}
    </span>
}

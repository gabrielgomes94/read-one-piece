import React, {useEffect, useRef, useState} from "react";

export default function PageMarker(
    {
        currentPage,
        images,
        setCurrentPage
    }
) {
    function changePage(e) {
        const value = e.target.value - 1

        if (Number.isInteger(value)) {
            setCurrentPage(value)
        } else {
            e.target.value = ''
        }
    }

    return (
        <div>
            <input
                value={currentPage + 1}
                className="w-10 text-center rounded bg-slate-200 p-1"
                onChange={changePage}
                onFocus={e => e.target.value = ''}
            />

            <span className="font-sans font-semibold tabular-nums tracking-wide ml-2">
                / {images.length}
            </span>
        </div>
    )
}

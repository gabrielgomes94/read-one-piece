import React, { useCallback, useEffect, useState, useRef } from "react"

export default function Swiper({ children, onSwipe }) {
    const wrapperRef = useRef(null)
    const [startX, setStartX] = useState(0)

    const handleTouchStart = useCallback((e) => {
        if (!wrapperRef.current.contains(e.target)) {
            return
        }

        e.preventDefault()

        setStartX(e.touches[0].clientX)
    }, [])

    const handleTouchEnd = useCallback(
        (e) => {
            if (!wrapperRef.current.contains(e.target)) {
                return
            }

            e.preventDefault()

            const endX = e.changedTouches[0].clientX
            const deltaX = endX - startX

            onSwipe({ deltaX })
        }, [startX, onSwipe])

    useEffect(() => {
        window.addEventListener("touchstart", handleTouchStart)
        window.addEventListener("touchend", handleTouchEnd)

        return () => {
            window.removeEventListener("touchstart", handleTouchStart)
            window.removeEventListener("touchend", handleTouchEnd)
        }
    }, [handleTouchStart, handleTouchEnd])

    return <div ref={wrapperRef}>{children}</div>
}

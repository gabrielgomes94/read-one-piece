import React from "react";
import Lottie from "lottie-react";
import animationData from "../../lotties/loading.json"

export default function Loading({isLoading}) {

    return <div style={{display: isLoading ? "block" : "none"}}>
        <Lottie
            animationData={animationData}
        />
    </div>
}

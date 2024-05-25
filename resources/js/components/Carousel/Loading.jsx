import React from "react";

import {Loading as LoadingIcon} from "../Icons/Loading.jsx";

export default function Loading({isLoading}) {
    return <div style={{display: isLoading ? "block" : "none"}}>
        <LoadingIcon />
    </div>
}

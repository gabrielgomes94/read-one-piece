import React from "react";

export const NextChapterButton = (props) => (
    <div className="right hover:bg-gray-300 flex items-center rounded p-8 m-8"
         onClick={props.onClick}>

        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5L11.7929 11.2929C12.1834 11.6834 12.1834 12.3166 11.7929 12.7071L5.5 19" stroke="#000000"
                  />
            <path d="M13.5 5L19.7929 11.2929C20.1834 11.6834 20.1834 12.3166 19.7929 12.7071L13.5 19" stroke="#000000"
                  />
        </svg>
    </div>
)

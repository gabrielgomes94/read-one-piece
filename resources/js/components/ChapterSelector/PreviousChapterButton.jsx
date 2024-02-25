import React from "react";

export const PreviousChapterButton = (props) => (
    <div className="left
    hover:bg-gray-300
    flex items-center
    rounded p-8 m-8"
         onClick={props.onClick}>
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 19L12.7071 12.7071C12.3166 12.3166 12.3166 11.6834 12.7071 11.2929L19 5" stroke="#000000"
                  />
            <path d="M11 19L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L11 5" stroke="#000000"
                  />
        </svg>
    </div>
)
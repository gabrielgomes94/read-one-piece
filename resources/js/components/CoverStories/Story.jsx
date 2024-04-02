import React, {useEffect, useState} from "react";

export function Story({name, cover}) {
    return (
        <div className={
            "rounded overflow-hidden shadow-lg md:max-w-sm md:min-w-sm my-4 pb-4 bg-white " +
            "flex flex-col justify-between"
        }
        >
            <img
                src={cover}
                className={"w-full"}
            />

            <h1 className={"font-sans text-lg text-pretty px-4 m-1"} >
                { name }
            </h1>
        </div>
    )
}

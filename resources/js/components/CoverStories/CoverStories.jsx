import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import axios from 'axios';
import {Story} from "./Story.jsx";

export function CoverStories() {
    const coverStories = [
        {
            "name": "Buggy's Crew Adventure Chronicles",
            "cover": "https://mugiwarasoficial.com/wp-content/uploads/WP-manga/data/manga_64cbbb5494405/5d871987bfdd4140958432303170868a/01.png",
            "id": 1
        },
        {
            "name": "Diary of Koby-Meppo",
            "cover": "https://mugiwarasoficial.com/wp-content/uploads/WP-manga/data/manga_64cbbb5494405/63de184e09dc5a7af978df1dbe07df4f/01.png",
            "id": 2
        },
        {
            "name": "Jango's Dance Paradise",
            "cover": "https://mugiwarasoficial.com/wp-content/uploads/WP-manga/data/manga_64cbbb5494405/06e40d67ebe3877e00cbac2af6ba810b/01.jpg",
            "id": 3
        },
        {
            "name": "Hatchan's Sea-Floor Stroll",
            "cover": "https://mugiwarasoficial.com/wp-content/uploads/WP-manga/data/manga_64cbbb5494405/e35c17f8a65b0f877f1f7d2630d0b59a/01.png",
            "id": 4
        },
        {
            "name": "Wapol's Omnivorous Hurrah",
            "cover": "https://mugiwarasoficial.com/wp-content/uploads/WP-manga/data/manga_64cbbb5494405/6ba5b2c0f491a39369c89a2bf09b2481/01.png",
            "id": 5
        }
    ]

    return (
        <div>
            <div className={
                "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
            }>
                {
                    coverStories.map(
                        item =>
                            <a href={'/historias-de-capa/' + item.id ?? 1}>
                                <Story name={item.name} cover={item.cover}/>
                            </a>
                    )
                }
            </div>
        </div>
    )
}

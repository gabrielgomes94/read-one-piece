import React from "react";
import {Manga} from "./Manga/Manga.jsx";
import { CookiesProvider, useCookies } from 'react-cookie'

export function App() {
    const [cookies, setCookie] = useCookies(['chapter', 'page'])

    const mangaData = document.getElementById('manga-data');

    const chapter = () => {
        if (mangaData.dataset.chapter) {
            return mangaData.dataset.chapter
        }

        if (cookies.chapter) {
            return cookies.chapter
        }

        // Chapter 0 is not the first one
        return 1
    }

    const page = () => {
        if (mangaData.dataset.page) {
            return parseInt(mangaData.dataset.page)
        }

        if (cookies.page) {
            return parseInt(cookies.page)
        }

        return 0
    }

    return (
        <CookiesProvider>
            <Manga
                listChaptersURI={'chapters'}
                chapterId={chapter()}
                page={page()}
                setCookie={setCookie}
            />
        </CookiesProvider>
    )
}

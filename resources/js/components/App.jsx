import React from "react";
import {Manga} from "./Manga/Manga.jsx";
import { CookiesProvider, useCookies } from 'react-cookie'

export function App() {
    const [cookies, setCookie] = useCookies(['chapter', 'page'])

    const mangaData = document.getElementById('manga-data');

    const chapter = () => {
        if (cookies.chapter) {
            return cookies.chapter
        }

        if (mangaData.dataset.chapter) {
            return mangaData.dataset.chapter
        }

        // Chapter 0 is not the first one
        return 1
    }

    const page = () => {
        console.log('cookie', cookies.page)
        if (cookies.page) {
            return parseInt(cookies.page)
        }

        console.log('oi', mangaData.dataset.page)
        if (mangaData.dataset.page) {
            return parseInt(mangaData.dataset.page)
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

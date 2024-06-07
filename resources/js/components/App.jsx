import React from "react";
import {Manga} from "./Manga/Manga.jsx";
import { CookiesProvider, useCookies } from 'react-cookie'

export function App() {
    const [cookies, setCookie] = useCookies(['chapter', 'page'])

    const mangaData = document.getElementById('manga-data');

    const chapter = () => {
        if (cookies.chapter && window.location.search === '') {
            return cookies.chapter
        }

        if (mangaData.dataset.chapter) {
            return mangaData.dataset.chapter
        }

        // Chapter 0 is not the first one
        return 1
    }

    const page = () => {
        if (cookies.page && window.location.search === '') {
            return parseInt(cookies.page)
        }

        if (mangaData.dataset.page) {
            return parseInt(mangaData.dataset.page)
        }

        return 1
    }

    return (
        <CookiesProvider>
            <Manga
                listChaptersURI={'chapters'}
                chapterId={chapter()}
                page={page() - 1}
                setCookie={setCookie}
            />
        </CookiesProvider>
    )
}

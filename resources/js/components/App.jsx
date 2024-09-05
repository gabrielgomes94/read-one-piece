import React, {useState} from "react";
import {Manga} from "./Manga/Manga.jsx";
import { CookiesProvider, useCookies } from 'react-cookie'
import { getChapterCookie, getPageCookie } from '../utils/cookies.js';

export function App(
    {
        listChaptersURI
    }
) {
    const [uri, setUri] = useState(listChaptersURI)
    const [cookies, setCookie] = useCookies([uri + '_chapter', uri + '_page'])
    const mangaData = document.getElementById('manga-data');

    const chapter = () => {
        if (getChapterCookie(cookies, uri) && window.location.search === '') {
            return getChapterCookie(cookies, uri)
        }

        if (mangaData && mangaData.dataset.chapter) {
            return mangaData.dataset.chapter
        }

        // Chapter 0 is not the first one
        return 1
    }

    const page = () => {
        if (getPageCookie(cookies, uri) && window.location.search === '') {
            return parseInt(getPageCookie(cookies, uri))
        }

        if (mangaData && mangaData.dataset.page) {
            return parseInt(mangaData.dataset.page)
        }

        return 1
    }

    return (
        <CookiesProvider>
            <Manga
                listChaptersURI={listChaptersURI}
                chapterId={chapter()}
                page={page() - 1}
                setCookie={setCookie}
            />
        </CookiesProvider>
    )
}

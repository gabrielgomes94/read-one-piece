import React, {useEffect} from "react";
import {createRoot} from "react-dom/client";
import {CoverStories} from "./CoverStories/CoverStories.jsx";
import {Manga} from "./Manga/Manga.jsx";
import { CookiesProvider, useCookies } from 'react-cookie'

if (document.getElementById('manga')) {
    const container = document.getElementById('manga');
    const root = createRoot(container);

    root.render(
        <CookiesProvider>
            <App />
        </CookiesProvider>
    );
} else if (document.getElementById('cover-stories')) {
    const container = document.getElementById('cover-stories');
    const root = createRoot(container);

    root.render(<CoverStories listChaptersURI={'cover-stories'} />);
} else if (document.getElementById('cover-story')) {
    const container = document.getElementById('cover-story');
    const root = createRoot(container);

    root.render(<Manga listChaptersURI={'cover-stories'} chapterId={document.getElementById('cover-story').dataset.storyId} />);
}

function App() {
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

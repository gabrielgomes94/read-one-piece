import React from "react";
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

    return (
        <CookiesProvider>
            <Manga
                listChaptersURI={'chapters'}
                chapterId={cookies.chapter ?? 1}
                page={cookies.page ?? 0}
                setCookie={setCookie}
            />
        </CookiesProvider>
    )
}

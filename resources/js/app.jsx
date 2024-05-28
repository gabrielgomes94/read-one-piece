import '../css/app.css';
import './components/App.jsx'

import {createRoot} from "react-dom/client";
import {CookiesProvider} from "react-cookie";
import {CoverStories} from "./components/CoverStories/CoverStories.jsx";
import {Manga} from "./components/Manga/Manga.jsx";
import {App} from "./components/App.jsx"
import React from "react";

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

    root.render(
        <Manga listChaptersURI={'cover-stories'}
              chapterId={document.getElementById('cover-story').dataset.storyId}
        />
    );
}

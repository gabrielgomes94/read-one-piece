import '../css/app.css';
import './components/App.jsx'
import {createRoot} from "react-dom/client";
import {CookiesProvider} from "react-cookie";
import {App} from "./components/App.jsx"
import React from "react";

const mangaData = document.getElementById('manga-data');

if (document.getElementById('manga') && !mangaData.dataset.colored) {
    const container = document.getElementById('manga');
    const root = createRoot(container);

    root.render(
        <CookiesProvider>
            <App listChaptersURI='chapters' />
        </CookiesProvider>
    );
} else if (mangaData && mangaData.dataset.colored) {
    const container = document.getElementById('manga');
    const root = createRoot(container);

    root.render(
        <CookiesProvider>
            <App listChaptersURI='colored/chapters' />
        </CookiesProvider>
    );
} else if (document.getElementById('cover-story')) {
    const container = document.getElementById('cover-story');
    const root = createRoot(container);

    root.render(
        <CookiesProvider>
            <App listChaptersURI='cover-stories'/>
        </CookiesProvider>
    );
}

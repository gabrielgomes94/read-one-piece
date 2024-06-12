import '../css/app.css';
import './components/App.jsx'
import {createRoot} from "react-dom/client";
import {CookiesProvider} from "react-cookie";
import {App} from "./components/App.jsx"
import React from "react";

if (document.getElementById('manga')) {
    const container = document.getElementById('manga');
    const root = createRoot(container);

    root.render(
        <CookiesProvider>
            <App listChaptersURI='chapters' />
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

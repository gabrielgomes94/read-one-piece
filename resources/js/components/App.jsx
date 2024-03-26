import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Carousel from "./Carousel/Carousel.jsx";
import axios from 'axios';
import {ChapterSelector} from "./ChapterSelector/ChapterSelector.jsx";
import {CoverStories} from "./CoverStories/CoverStories.jsx";
import {Manga} from "./Manga/Manga.jsx";

if (document.getElementById('manga')) {
    const container = document.getElementById('manga');
    const root = createRoot(container);

    root.render(<Manga listChaptersURI={'chapters'} />);
} else if (document.getElementById('cover-stories')) {
    const container = document.getElementById('cover-stories');
    const root = createRoot(container);

    root.render(<CoverStories listChaptersURI={'cover-stories'} />);
} else if (document.getElementById('cover-story')) {
    const container = document.getElementById('cover-story');
    const root = createRoot(container);

    root.render(<Manga listChaptersURI={'cover-stories'} chapterId={document.getElementById('cover-story').dataset.storyId} />);
}


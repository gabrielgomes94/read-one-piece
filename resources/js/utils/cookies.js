export function chapterCookie(uri){
    return uri + '_chapter'
}

export function pageCookie(uri) {
    return uri + '_page'
}

export function getChapterCookie(cookies, uri) {
    return cookies[chapterCookie(uri)]
}

export function getPageCookie(cookies, uri) {
    return cookies[pageCookie(uri)]
}

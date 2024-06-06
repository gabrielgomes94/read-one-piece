import React, {useEffect, useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import sharePageIcon from "../../../../icons/share-page.svg"
import shareChapterIcon from "../../../../icons/share-chapter.svg"

export function Share(
    {
        chapterId,
        currentPage
    }
) {
    const [shared, setShared] = useState(false)

    useEffect(
        () => {
            setTimeout(() => {
                if (shared) {
                    setShared(false)
                }

            }, 3000)
        },
        [shared]
    )

    return (
        <div className="flex flex-col align-end my-1">
            <div className="flex flex-row justify-end">
                <CopyToClipboard
                    text={window.location.origin + '/manga?capitulo=' + chapterId}
                    onCopy={() => setShared(true)}
                >
                    <div>
                        <button className="bg-blue-800 p-2 mr-2 rounded text-white"
                                title="Compartilhar capítulo"
                        >
                            <img src={shareChapterIcon} />
                        </button>
                    </div>
                </CopyToClipboard>

                <CopyToClipboard
                    text={window.location.origin + '/manga?capitulo=' + chapterId + '&page=' + currentPage}
                    onCopy={() => setShared(true)}
                >
                    <button className="bg-blue-800 p-2 ml-2 rounded text-white"
                            title="Compartilhar página"
                    >
                        <img src={sharePageIcon} />
                    </button>
                </CopyToClipboard>
            </div>

            <div className="flex flex-row justify-end my-2">
                {shared && <span>Link copiado!</span>}
            </div>
        </div>
    )
}

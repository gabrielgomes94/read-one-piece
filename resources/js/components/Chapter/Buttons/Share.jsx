import React, {useEffect, useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import shareChapterIcon from "../../../../icons/share-chapter.svg"
import { Tooltip } from 'react-tooltip'

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

    const sharedLink = () => {
        return window.location.origin + '/manga?capitulo=' + chapterId + '&page=' + currentPage
    }

    return (
        <div className="flex">
            <CopyToClipboard
                text={sharedLink()}
                onCopy={() => setShared(true)}
            >
                <button className="bg-blue-800 p-2 rounded text-white"
                        title="Compartilhar página"
                        data-tooltip-id="share-chapter-button"
                >
                    <img src={shareChapterIcon} />
                </button>
            </CopyToClipboard>

            <Tooltip
                id="share-chapter-button"
                content="Link copiado!"
                openOnClick={true}
            />
        </div>
    )
}

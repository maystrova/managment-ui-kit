import React from 'react'
import { ModalWindow } from '../ModalWindow'
import { StyledShare } from './style'
import { Icon, ICON_SIZE } from '../Icon'
import vk from './vk-logo.png'
import facebook from './facebook-logo.png'
import twitter from './twitter-logo.png'

interface ShareProps {
    isOpen: boolean
    onCancel: () => void
}

interface ShareData {
    url: string
    title: string
    image: string
    text: string
}

const title = 'managment-ui-kit'
const text = 'Hello! This is my first project!'
const url = 'https://managment-ui-kit.vercel.app/'
const image = './hello.png'

const shareVk = (shareData: ShareData): void => {
    let vkUrl = 'http://vk.com/share.php?'
    if (shareData.url) {
        vkUrl += 'url=' + encodeURIComponent(shareData.url)
    }
    if (shareData.title) {
        vkUrl += '&title=' + encodeURIComponent(shareData.title)
    }
    if (shareData.image) {
        vkUrl += '&image=' + encodeURIComponent(shareData.image)
    }
    vkUrl += '&noparse=true'
    popup(vkUrl)
}

const shareFB = (shareData: ShareData): void => {
    let url = 'http://www.fb.com/sharer.php?s=100'
    if (shareData.title) {
        url += '&p[title]=' + encodeURIComponent(shareData.title)
    }
    if (shareData.text) {
        url += '&p[summary]=' + encodeURIComponent(shareData.text)
    }
    if (shareData.url) {
        url += '&p[url]=' + encodeURIComponent(shareData.url)
    }
    if (shareData.image) {
        url += '&p[images][0]=' + encodeURIComponent(shareData.image)
    }
    popup(url)
}

const shareTW = (shareData: ShareData): void => {
    let url = 'https://twitter.com/intent/tweet?',
        MAX_LEN_TW = 140,
        content = shareData.title,
        site_url = shareData.url,
        index = MAX_LEN_TW
    while ((content + site_url).length > MAX_LEN_TW) {
        index = content.lastIndexOf(' ', index - 1)
        if (index !== -1 && index - 4 - site_url.length <= MAX_LEN_TW) {
            content = content.slice(0, index)
            content += '... '
        } else if (index === -1) {
            content = ''
        }
    }
    if (shareData.url) {
        url += 'original_referer=' + encodeURIComponent(shareData.url)
    }
    if (shareData.title) {
        url += '&text=' + encodeURIComponent(content)
    }
    url += '&tw_p=tweetbutton'
    if (shareData.url) {
        url += '&url=' + encodeURIComponent(site_url)
    }
    popup(url)
}

const popup = (url: string): void => {
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436')
}

const Share = ({ isOpen, onCancel }: ShareProps) => {
    return (
        <ModalWindow
            isOpen={isOpen}
            onCancel={onCancel}
            title="Support my project, share with your friends!"
        >
            <StyledShare>
                <button
                    onClick={() =>
                        shareVk({
                            url: url,
                            title: title,
                            image: image,
                            text: text,
                        })
                    }
                >
                    <Icon size={ICON_SIZE.LARGE} src={vk} />
                </button>
                <button
                    onClick={() =>
                        shareFB({
                            url: url,
                            title: title,
                            image: image,
                            text: text,
                        })
                    }
                >
                    <Icon size={ICON_SIZE.LARGE} src={facebook} />
                </button>

                <button
                    onClick={() =>
                        shareTW({
                            url: url,
                            title: title,
                            image: image,
                            text: text,
                        })
                    }
                >
                    <Icon size={ICON_SIZE.LARGE} src={twitter} />
                </button>
            </StyledShare>
        </ModalWindow>
    )
}

export { Share }

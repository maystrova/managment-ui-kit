import React from 'react'
import './style.scss'
import { Icon, ICON_SIZE } from '../Icon'
import googleIcon from '../Layout/pics/google.png'
import facebookIcon from '../Layout/pics/facebook.png'
import youtubeIcon from '../Layout/pics/youtube.png'
import { ModalWindow } from '../ModalWindow'

interface ShareProps {
    isOpen: boolean
    onCancel: () => void
}

const Share = ({ isOpen, onCancel }: ShareProps) => {
    return (
        <ModalWindow
            isOpen={isOpen}
            onCancel={onCancel}
            title={'Share your Project!'}
            footer={
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut cumque distinctio expedita minus nemo nostrum nulla
                    provident quas qui similique. Ab accusamus accusantium alias
                    dolore eaque eos esse expedita fugiat ipsum iure laudantium
                    minima neque nihil nobis numquam, officiis pariatur possimus
                    recusandae reiciendis rem reprehenderit, sed vitae. Illo,
                    sint tempore.
                </p>
            }
        >
            <div className='Share__ModalBody'>
                <a className='Share__google' href='www.google.com'>
                    <Icon src={googleIcon} size={ICON_SIZE.LARGE} />
                </a>
                <a className='Share__fb' href='www.facebook.com'>
                    <Icon size={ICON_SIZE.LARGE} src={facebookIcon} />
                </a>
                <a className='Share__youTube' href='www.youtube.com'>
                    <Icon size={ICON_SIZE.LARGE} src={youtubeIcon} />
                </a>
            </div>
        </ModalWindow>
    )
}

export { Share }

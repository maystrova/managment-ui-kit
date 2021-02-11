import React from "react";
import './style.css'
import {Icon} from "../Icon";
import googleIcon from '../Layout/pics/google.png'
import facebookIcon from '../Layout/pics/facebook.png'
import youtubeIcon from '../Layout/pics/youtube.png'



export interface ShareProps {
    isOpen: boolean
    onCancel: () => void
}

const Share = ({isOpen, onCancel}: ShareProps) => {

    if (!isOpen) return null

    return (
        <div className='Share'>
            <div className="Share__ModalOverlay" onClick={onCancel}></div>
            <div className="Share__ModalWindow">
                <header className="Share__ModalHeader">
                    <div className="Share__ModalHeader-title">Share your Project!</div>
                    <div className="Share__ModalHeader-close" onClick={onCancel}>&#10008;</div>
                </header>
                <div className="Share__ModalBody">
                    <button className='Share__google'><a href="www.google.com"><Icon src={googleIcon} size={"large"}/></a></button>
                    <button className='Share__fb'><a href="www.facebook.com"><Icon size={"large"} src={facebookIcon}/></a></button>
                    <button className='Share__youTube'><a href="www.youtube.com"><Icon size={"large"} src={youtubeIcon}/></a></button>
                </div>
                <footer className="Share__footer"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam beatae cupiditate, earum eum expedita explicabo fugiat hic in iure maxime natus pariatur quo quod rem repellat repellendus sit suscipit vero vitae. A at aut deleniti enim, exercitationem illo laboriosam, molestias natus officiis optio perferendis repellat. Itaque quas sequi voluptatem?</p></footer>
            </div>
        </div>
    )
}


export {Share}
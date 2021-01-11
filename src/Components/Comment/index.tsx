import React from "react";
import './style.css'
import {Avatar} from "../Avatar";
import {DiscussionType} from "../Task/types";

const Comment = ({name, profession, date, text, avatar }: DiscussionType) => {
    return (
        <div className='comment'>
            <div className="commentAvatar">
                <Avatar size={"large"} src={avatar}/>
            </div>
        <div className='comment__header'>
            <span><span className='comment__header-name'>{name}</span>, {profession}</span>
            <span>{date}</span>
        </div>
            <div className="commentContent">
                <p>{text}</p>
            </div>
        </div>
    )
}

export {Comment}
import React from "react";
import './style.css'
import {Avatar} from "../Avatar";
import commentAvatar3 from '../Layout/pics/commentpic2.png'
import commentAvatar2 from '../Layout/pics/commentpic3.png'

interface CommentProps {
    title: string,
    date: string,
    text: string,
    backgroundColor?: string
}

const Comment = ({title, date, text, backgroundColor = '#F7F6F3'}: CommentProps) => {
    return (
        <div className='comment'>
            <div className="commentAvatar">
                <Avatar size={"large"} src={commentAvatar3}/>
            </div>
        <div className='comment__header'>
            <span>{title}</span>
            <span>{date}</span>
        </div>
            <div className="commentContent">
                <p>{text}</p>
            </div>
        </div>
    )
}

export {Comment}
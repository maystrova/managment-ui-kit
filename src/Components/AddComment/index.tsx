import React from "react";
import './style.css'
import {Avatar} from "../Avatar";
import userAvatar1 from '../Layout/pics/userpic1.png'

interface AddCommentProps {
    user: string
}

const AddComment = () => {
    return(
        <div className='addComment'>
            <Avatar size={"large"} src={userAvatar1}/>
            <input type="text" className='addComment-area' placeholder='Add a comment...'/>
        </div>
    )
}

export {AddComment}
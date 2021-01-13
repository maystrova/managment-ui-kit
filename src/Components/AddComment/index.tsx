import React from "react";
import './style.css'
import {Avatar} from "../Avatar";

interface AddCommentProps {
    userpic: string
}

const AddComment = ({userpic}: AddCommentProps) => {
    return(
        <div className='addComment'>
            <Avatar size={"large"} src={userpic}/>
            <input type="text" className='addComment-area' placeholder='Add a comment...'/>
        </div>
    )
}

export {AddComment}
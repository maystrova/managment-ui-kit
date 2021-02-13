import React, { useState } from 'react'
import './style.scss'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { DiscussionType } from '../Task/types'
import vasyaUser from '../Layout/pics/vasya.png'

interface AddCommentProps {
    userpic: string
    onCommentAdded: (comment: DiscussionType) => void
}

const AddComment = ({ userpic, onCommentAdded }: AddCommentProps) => {
    const [comment, setComment] = useState<string>('')

    return (
        <div className='addComment'>
            <Avatar size={AVATAR_SIZE.LARGE} src={userpic} />
            <input
                value={comment}
                onKeyDown={event => {
                    // console.log(event.key)

                    if (event.key === 'Enter') {
                        onCommentAdded({
                            name: 'Vasya',
                            profession: 'Cat',
                            date: 'Today',
                            text: comment,
                            avatar: vasyaUser,
                        })

                        setComment('')
                    }
                }}
                type='text'
                className='addComment-area'
                placeholder='Add a comment...'
                onChange={event => {
                    setComment(event.target.value)
                }}
            />
        </div>
    )
}

export { AddComment }

import React, { useState } from 'react'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { DiscussionType } from '../Task/types'
import vasyaUser from '../Layout/pics/vasya.png'
import { StyledAddComment, StyledCommentAria } from './style'
import { UserInfo } from '../UserInfo'

interface AddCommentProps {
    userpic: string
    onCommentAdded: (comment: DiscussionType) => void
}

const AddComment = ({ userpic, onCommentAdded }: AddCommentProps) => {
    const [comment, setComment] = useState<string>('')

    return (
        <StyledAddComment>
            <Avatar size={AVATAR_SIZE.LARGE} src={userpic} />
            <StyledCommentAria
                value={comment}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        onCommentAdded({
                            name: 'Vasya',
                            profession: 'UserInfo',
                            date: `${Date.now()}`,
                            text: comment,
                            avatar: vasyaUser,
                        })

                        setComment('')
                    }
                }}
                type='text'
                placeholder='Add a comment...'
                onChange={event => {
                    setComment(event.target.value)
                }}
            />
        </StyledAddComment>
    )
}

export { AddComment }

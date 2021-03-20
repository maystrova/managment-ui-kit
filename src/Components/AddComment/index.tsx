import React, { useState } from 'react'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { DiscussionType } from '../Task/types'
import vasyaUser from '../Layout/pics/vasya.png'
import { StyledAddComment, StyledCommentAria } from './style'
import { KEY } from '../../services/keys'
import { User } from 'services/user'

interface AddCommentProps {
    user: User | null
    onCommentAdded: (comment: DiscussionType) => void
}

const AddComment = ({ user, onCommentAdded }: AddCommentProps) => {
    const [comment, setComment] = useState<string>('')

    return (
        <StyledAddComment>
            <Avatar
                size={AVATAR_SIZE.LARGE}
                src={user ? user.avatarUrl : vasyaUser}
            />
            <StyledCommentAria
                value={comment}
                onKeyDown={event => {
                    if (event.key === KEY.ENTER) {
                        onCommentAdded({
                            name: user ? user.fullName : 'User',
                            profession: 'User',
                            date: new Date(Date.now()).toDateString(),
                            text: comment,
                            avatar: user ? user.avatarUrl : vasyaUser,
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

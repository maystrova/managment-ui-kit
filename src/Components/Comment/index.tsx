import React from 'react'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { DiscussionType } from '../Task/types'
import {
    StyledComment,
    StyledCommentAvatar,
    StyledCommentHeader,
    StyledCommentName,
} from './style'

const Comment = ({ name, profession, date, text, avatar }: DiscussionType) => {
    return (
        <StyledComment>
            <StyledCommentAvatar>
                <Avatar size={AVATAR_SIZE.LARGE} src={avatar} />
            </StyledCommentAvatar>
            <StyledCommentHeader>
                <span>
                    <StyledCommentName>{name}</StyledCommentName>
                    {`, ${profession}`}
                </span>
                <span>{date}</span>
            </StyledCommentHeader>
            <div>
                <p>{text}</p>
            </div>
        </StyledComment>
    )
}

export { Comment }

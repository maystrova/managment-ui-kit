import React from 'react'
import { Checkbox } from '../Checkbox'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { Tag } from '../Tag'
import { TaskType } from '../Task/types'
import {
    StyledTaskCard,
    StyledTaskCardCheckbox,
    StyledTaskCardFooter,
    StyledTaskCardHeader,
    StyledTaskCardUser,
    StyledTaskCardDescription,
} from './style'

interface TaskCardProps extends TaskType {
    onClick: () => void
}

const TaskCard = ({
    title,
    user,
    files,
    discussions,
    description,
    assignTo,
    followers,
    tag,
    dueOn,
    createdAt,
    addedBy,
    isChecked,
    onClick,
}: TaskCardProps) => {
    return (
        <StyledTaskCard onClick={onClick}>
            <StyledTaskCardHeader>
                <StyledTaskCardCheckbox>
                    <Checkbox />
                </StyledTaskCardCheckbox>
                <StyledTaskCardDescription>{title}</StyledTaskCardDescription>
            </StyledTaskCardHeader>

            <StyledTaskCardFooter>
                <StyledTaskCardUser>
                    <Avatar src={user.avatar} size={AVATAR_SIZE.X_SMALL} />
                </StyledTaskCardUser>
                <Tag type={tag} text={tag} />
            </StyledTaskCardFooter>
        </StyledTaskCard>
    )
}

export { TaskCard }

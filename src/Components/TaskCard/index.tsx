import React from 'react'
import { Checkbox } from '../Checkbox'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { Tag } from '../Tag'
import { TaskType } from '../Task/types'
import {
    StyledTaskCardWrapper,
    StyledTaskCard,
    StyledTaskCardCheckbox,
    StyledTaskCardFooter,
    StyledTaskCardHeader,
    StyledTaskCardUser,
    StyledTaskCardDescription,
} from './style'

interface TaskCardProps extends TaskType {
    onClick: () => void
    onChecked: (isChecked: boolean) => void
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
    id,
    onChecked,
}: TaskCardProps) => {
    return (
        <StyledTaskCardWrapper>
            <StyledTaskCardCheckbox>
                <Checkbox
                    isChecked={isChecked}
                    onChange={isChecked => {
                        if (id) {
                            onChecked(isChecked)
                        }
                    }}
                />
            </StyledTaskCardCheckbox>

            <StyledTaskCard onClick={onClick}>
                <StyledTaskCardHeader>
                    <StyledTaskCardDescription>
                        {title}
                    </StyledTaskCardDescription>
                </StyledTaskCardHeader>

                <StyledTaskCardFooter>
                    <StyledTaskCardUser>
                        <Avatar src={user.avatar} size={AVATAR_SIZE.X_SMALL} />
                    </StyledTaskCardUser>
                    <Tag type={tag} text={tag} />
                </StyledTaskCardFooter>
            </StyledTaskCard>
        </StyledTaskCardWrapper>
    )
}

export { TaskCard }

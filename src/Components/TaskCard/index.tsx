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
import { User } from 'services/user'

interface TaskCardProps extends TaskType {
    onClick: () => void
    onChecked: (isChecked: boolean) => void
    authorizedUser: User | null
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
    authorizedUser,
}: TaskCardProps) => {
    const avatar: string = authorizedUser
        ? authorizedUser.avatarUrl
        : user.avatar

    return (
        <StyledTaskCardWrapper onClick={onClick}>
            <StyledTaskCard>
                <StyledTaskCardHeader>
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
                    <StyledTaskCardDescription>
                        {title}
                    </StyledTaskCardDescription>
                </StyledTaskCardHeader>

                <StyledTaskCardFooter>
                    <StyledTaskCardUser>
                        <Avatar src={avatar} size={AVATAR_SIZE.X_SMALL} />
                    </StyledTaskCardUser>
                    <Tag type={tag} text={tag} />
                </StyledTaskCardFooter>
            </StyledTaskCard>
        </StyledTaskCardWrapper>
    )
}

export { TaskCard }

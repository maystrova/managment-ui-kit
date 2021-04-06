import React from 'react'
import { Checkbox, CHECKBOX_STYLE } from '../Checkbox'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import { Tag } from '../Tag'
import { TaskType } from '../Task/types'
import {
    StyledTaskCard,
    StyledTaskCardCheckbox,
    StyledTaskCardDescription,
    StyledTaskCardFooter,
    StyledTaskCardHeader,
    StyledTaskCardUser,
    StyledTaskCardWrapper,
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
                            styleType={CHECKBOX_STYLE.ON_CARD}
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

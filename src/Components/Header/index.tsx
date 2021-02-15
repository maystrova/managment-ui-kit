import React from 'react'
import { Button } from '../Button'
import { Icon, ICON_SIZE } from '../Icon'
import { Avatar, AVATAR_SIZE } from '../Avatar'
import {
    StyledHeader,
    StyledHeaderButton,
    StyledHeaderButtons,
    StyledHeaderMenuItem,
    StyledHeaderRow,
    StyledHeaderSocialMedia,
    StyledHeaderTitle,
    StyledHeaderTopic,
    StyledHeaderUser,
} from './style'

export interface HeaderProps {
    creators: string[]
    icon: string
    title: string
    menu: string[]
    onShareWindowOpen: () => void
}

const Header = ({
    creators,
    icon,
    menu,
    title,
    onShareWindowOpen,
}: HeaderProps) => {
    return (
        <StyledHeader>
            <StyledHeaderRow>
                <StyledHeaderTopic>
                    <Icon size={ICON_SIZE.LARGE} src={icon} />
                    <StyledHeaderTitle>{title}</StyledHeaderTitle>
                </StyledHeaderTopic>
                <StyledHeaderSocialMedia>
                    {creators.map(creator => (
                        <StyledHeaderUser>
                            <Avatar size={AVATAR_SIZE.SMALL} src={creator} />
                        </StyledHeaderUser>
                    ))}
                    <StyledHeaderButtons>
                        <StyledHeaderButton>
                            <Button onClick={onShareWindowOpen} text='Share' />
                        </StyledHeaderButton>
                        <StyledHeaderButton>
                            <Button
                                backgroundColor='#FFF8DD'
                                color='#FFC200'
                                text='💬 Chat'
                            />
                        </StyledHeaderButton>
                    </StyledHeaderButtons>
                </StyledHeaderSocialMedia>
            </StyledHeaderRow>
            <div>
                {menu.map(item => (
                    <StyledHeaderMenuItem href='#'>{item}</StyledHeaderMenuItem>
                ))}
            </div>
        </StyledHeader>
    )
}

export { Header }

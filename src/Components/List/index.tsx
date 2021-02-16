import React from 'react'

import { ListType } from './types'
import {
    StyledList,
    StyledListAdd,
    StyledListItem,
    StyledListItems,
    StyledListItemsAvatar,
    StyledListItemsBlock,
    StyledListItemsCount,
    StyledListItemsIcon,
    StyledListTitle,
} from './style'

interface ListProps extends ListType {
    onAdditionalClick: () => void
}

const List = ({ items, addition, title, onAdditionalClick }: ListProps) => {
    return (
        <StyledList>
            <StyledListTitle>{title}</StyledListTitle>
            <div>
                <StyledListItemsBlock>
                    {items.map(item => (
                        <StyledListItems>
                            <StyledListItem href='#'>
                                {item.icon && (
                                    <StyledListItemsIcon
                                        src={item.icon}
                                        alt='icon'
                                    />
                                )}
                                {item.title}
                                {item.avatars?.map(avatar => (
                                    <StyledListItemsAvatar
                                        src={avatar}
                                        alt='avatar'
                                    />
                                ))}
                                {item.count && (
                                    <StyledListItemsCount>
                                        3
                                    </StyledListItemsCount>
                                )}
                            </StyledListItem>
                        </StyledListItems>
                    ))}
                </StyledListItemsBlock>
            </div>
            <div>
                <StyledListAdd
                    onClick={() => {
                        onAdditionalClick()
                    }}
                >
                    {addition}
                </StyledListAdd>
            </div>
        </StyledList>
    )
}

export { List }

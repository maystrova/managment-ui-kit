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
import { SIDEBAR_LIST } from '../Layout/tasks'

interface ListProps extends ListType {
    onAdditionalClick: () => void
    id: SIDEBAR_LIST
}

const List = ({ items, addition, title, onAdditionalClick, id }: ListProps) => {
    return (
        <StyledList>
            <StyledListTitle>{title}</StyledListTitle>
            <div>
                <StyledListItemsBlock key={id}>
                    {items.map(item => {
                        console.log('item', item.id)
                        return (
                            <StyledListItems key={item.id}>
                                <StyledListItem href='#'>
                                    {item.icon && (
                                        <StyledListItemsIcon
                                            src={item.icon.icon}
                                            alt='icon'
                                        />
                                    )}
                                    {item.title}
                                    {item.avatars?.map(avatar => (
                                        <StyledListItemsAvatar
                                            src={avatar.avatar}
                                            alt='avatar'
                                            key={avatar.id}
                                        />
                                    ))}
                                    {item.count && (
                                        <StyledListItemsCount
                                            key={item.count.id}
                                        >
                                            {item.count.count}
                                        </StyledListItemsCount>
                                    )}
                                </StyledListItem>
                            </StyledListItems>
                        )
                    })}
                </StyledListItemsBlock>
            </div>
            <div>
                <StyledListAdd
                    key={addition?.id}
                    onClick={() => {
                        onAdditionalClick()
                    }}
                >
                    {addition?.title}
                </StyledListAdd>
            </div>
        </StyledList>
    )
}

export { List }

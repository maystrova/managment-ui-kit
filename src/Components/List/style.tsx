import styled, { css } from 'styled-components'

const StyledList = styled.div`
    padding: 15px;
    line-height: 2.5;
    margin-bottom: 15px;
`

const StyledListTitle = styled.span`
    text-transform: uppercase;
    color: #878787;
`

const StyledListItemsBlock = styled.ul`
    padding: 0;
`

const StyledListItems = styled.li`
    list-style-type: none;
`

const StyledListItem = styled.a`
    color: white;
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #202020;
        border-right: #ffc200 solid;
    }
`

const StyledListItemsIcon = styled.img`
    margin-right: 10px;
`

const StyledListItemsAvatar = styled.img`
    margin-left: 5px;
`

const StyledListItemsCount = styled.span`
    width: 20px;
    height: 20px;
    background-color: #ffc200;
    color: black;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-left: 15px;
`

const StyledListAdd = styled.button`
    color: #ffc200;
    background: none;
    border: none;
    font-size: inherit;
    cursor: pointer;
    outline: none;
`

export {
    StyledList,
    StyledListTitle,
    StyledListItems,
    StyledListItem,
    StyledListItemsIcon,
    StyledListItemsAvatar,
    StyledListItemsCount,
    StyledListAdd,
    StyledListItemsBlock,
}

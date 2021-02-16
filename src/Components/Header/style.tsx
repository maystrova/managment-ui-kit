import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: white;
    padding: 0 20px;
`

const StyledHeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledHeaderTopic = styled.div`
    display: flex;
    align-items: center;
`

const StyledHeaderTitle = styled.h1`
    margin-left: 10px;
`
const StyledHeaderSocialMedia = styled.div`
    display: flex;
    align-items: center;
`
const StyledHeaderUser = styled.div`
    margin-left: 5px;
`

const StyledHeaderButtons = styled.div`
    display: flex;
    align-items: center;
`

const StyledHeaderButton = styled.div`
    margin-left: 10px;
`

const StyledHeaderMenuItem = styled.a`
    color: black;
    opacity: 70%;
    margin-right: 20px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    padding-bottom: 10px;
    display: inline-block;

    &:hover {
        border-bottom-color: #ffc200;
        transition: border-bottom-color 300ms ease-in-out;
    }
`

export {
    StyledHeader,
    StyledHeaderRow,
    StyledHeaderTopic,
    StyledHeaderTitle,
    StyledHeaderSocialMedia,
    StyledHeaderUser,
    StyledHeaderButtons,
    StyledHeaderButton,
    StyledHeaderMenuItem,
}

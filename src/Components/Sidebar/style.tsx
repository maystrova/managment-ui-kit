import styled from 'styled-components'

const StyledSidebar = styled.div`
    background-color: black;
    width: 270px;
    color: white;
`

const StyledSidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 15px;
    text-transform: uppercase;
`

const StyledSidebarHeaderMain = styled.div`
    display: flex;
    align-items: center;
`

const StyledSidebarHeaderTitle = styled.h3`
    margin: 0;
`

const StyledSidebarIcon = styled.div`
    margin-right: 10px;
`

const StyledSidebarFooter = styled.div`
    padding: 15px;
    line-height: 1.7;
`

const StyledSidebarFooterInvite = styled.a`
    color: #ffc200;
    text-decoration: none;
    border-bottom: 1px solid;
    padding-bottom: 3px;
    border-bottom-color: #ffc200ad;

    &:hover {
        opacity: 80%;
    }
`

export {
    StyledSidebar,
    StyledSidebarHeader,
    StyledSidebarHeaderMain,
    StyledSidebarIcon,
    StyledSidebarFooter,
    StyledSidebarFooterInvite,
    StyledSidebarHeaderTitle,
}

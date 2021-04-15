import styled, { createGlobalStyle } from 'styled-components'

const StyledLayout = styled.div`
    display: flex;
`

const StyledLayoutMain = styled.div`
    flex: 1;
`

const StyledLayoutContent = styled.div`
    padding: 20px;
`
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background-color: #eeebe5;
}

*,
*:after,
*:before {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
}
`

export { StyledLayout, StyledLayoutMain, StyledLayoutContent, GlobalStyle }

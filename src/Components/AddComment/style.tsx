import styled, { css } from 'styled-components'

const StyledAddComment = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

const StyledCommentAria = styled.input`
    width: 100%;
    border: none;
    background-color: #eaeaea;
    height: 30px;
    border-radius: 6px;
    margin-left: 10px;
    padding: 10px;
    outline: none;
`

export { StyledAddComment, StyledCommentAria }

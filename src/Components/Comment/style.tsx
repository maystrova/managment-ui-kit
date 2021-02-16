import styled from 'styled-components'

const StyledComment = styled.div`
    border-radius: 10px;
    background-color: #f7f6f3;
    border: none;
    align-items: center;
    margin: 0 0 20px 25px;
    padding: 20px 35px;
    position: relative;
`

const StyledCommentAvatar = styled.div`
    position: absolute;
    left: -24px;
    top: 24px;
`

const StyledCommentHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledCommentName = styled.span`
    font-weight: bold;
`

export {
    StyledComment,
    StyledCommentAvatar,
    StyledCommentHeader,
    StyledCommentName,
}

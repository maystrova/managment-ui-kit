import styled from 'styled-components'

const StyledTaskCardWrapper = styled.div`
    position: relative;
`

const StyledTaskCard = styled.div`
    background-color: #f7f6f3;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    z-index: 1;
    position: relative;

    &:hover {
        background-color: #fff8dd;
    }
`

const StyledTaskCardHeader = styled.div`
    padding: 20px 20px 0 60px;
    display: flex;
`

const StyledTaskCardCheckbox = styled.div`
    position: absolute;
    left: 16px;
    top: 16px;
    z-index: 2;
`

const StyledTaskCardDescription = styled.div`
    margin-bottom: 16px;
`

const StyledTaskCardFooter = styled.div`
    padding: 10px 20px 20px 60px;
    display: flex;
    align-items: center;
`

const StyledTaskCardUser = styled.div`
    margin-right: 10px;
    display: inline-flex;
`

export {
    StyledTaskCardWrapper,
    StyledTaskCard,
    StyledTaskCardCheckbox,
    StyledTaskCardFooter,
    StyledTaskCardHeader,
    StyledTaskCardUser,
    StyledTaskCardDescription,
}

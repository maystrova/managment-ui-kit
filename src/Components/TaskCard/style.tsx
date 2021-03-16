import styled from 'styled-components'

const StyledTaskCardWrapper = styled.div``

const StyledTaskCard = styled.div`
    background-color: #f7f6f3;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        background-color: #fff8dd;
    }
`

const StyledTaskCardHeader = styled.div`
    padding: 20px 20px 10px;
    display: flex;
    align-items: center;
`

const StyledTaskCardCheckbox = styled.div`
    margin-right: 10px;
`

const StyledTaskCardDescription = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

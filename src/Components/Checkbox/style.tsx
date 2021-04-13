import styled from 'styled-components'
import { CHECKBOX_SIZE, CHECKBOX_STYLE } from './index'

interface StyledCheckboxContainerProps {
    sizeType: CHECKBOX_SIZE
    styleType: CHECKBOX_STYLE
    isChecked: boolean
}

const getBackgroundColor = (
    style: CHECKBOX_STYLE,
    isChecked: boolean,
): string => {
    if (isChecked) {
        return '#CEF9C6'
    }

    switch (style) {
        case CHECKBOX_STYLE.ON_CARD:
            return '#fff'
        case CHECKBOX_STYLE.DEFAULT:
        default:
            return '#eee'
    }
}

const getSize = (size: CHECKBOX_SIZE): number => {
    switch (size) {
        case CHECKBOX_SIZE.LARGE:
            return 40
        case CHECKBOX_SIZE.DEFAULT:
        default:
            return 30
    }
}

const getCheckSize = (size: CHECKBOX_SIZE): number => {
    switch (size) {
        case CHECKBOX_SIZE.LARGE:
            return 16
        case CHECKBOX_SIZE.DEFAULT:
        default:
            return 12
    }
}

const StyledCheckboxContainer = styled.label`
    position: relative;
    width: ${(props: StyledCheckboxContainerProps) =>
        getSize(props.sizeType)}px;
    height: ${(props: StyledCheckboxContainerProps) =>
        getSize(props.sizeType)}px;
    cursor: pointer;
    background-color: ${(props: StyledCheckboxContainerProps) =>
        getBackgroundColor(props.styleType, props.isChecked)};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
    width: ${(props: StyledCheckboxContainerProps) =>
        getCheckSize(props.sizeType)}px;
    height: ${(props: StyledCheckboxContainerProps) =>
        getCheckSize(props.sizeType)}px;
        fill ${(props: StyledCheckboxContainerProps) =>
            props.isChecked ? '#1D201C' : '#B8B8B8'}
    }
`

const StyledCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: ${(props: StyledCheckboxContainerProps) =>
        getSize(props.sizeType)}px;
    height: ${(props: StyledCheckboxContainerProps) =>
        getSize(props.sizeType)}px;
`

interface StyledCheckmarkProps {
    checkedImage: string
}

const StyledCheckmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    pointer-events: none;

    &:hover {
        background-color: #ccc;
    }

    &:after {
        content: '';
        display: inline-block;
        width: 22px;
        height: 22px;
        position: absolute;
        left: 4px;
        top: -5px;
        background-image: ${(props: StyledCheckmarkProps) =>
            `url(${props.checkedImage})`};
        background-size: contain;
        background-repeat: no-repeat;
        opacity: 1;
    }
`

export { StyledCheckbox, StyledCheckboxContainer, StyledCheckmark }

import React from 'react'
import { StyledCheckbox, StyledCheckboxContainer } from './style'

import { ReactComponent as CheckedImage } from './check.svg'

export enum CHECKBOX_SIZE {
    DEFAULT = 30,
    LARGE = 40,
}

export enum CHECKBOX_STYLE {
    DEFAULT,
    ON_CARD,
}

interface CheckboxProps {
    isChecked: boolean
    onChange: (isChecked: boolean) => void
    sizeType?: CHECKBOX_SIZE
    styleType?: CHECKBOX_STYLE
}

const Checkbox = ({
    isChecked,
    onChange,
    sizeType = CHECKBOX_SIZE.DEFAULT,
    styleType = CHECKBOX_STYLE.DEFAULT,
}: CheckboxProps) => {
    return (
        <StyledCheckboxContainer
            sizeType={sizeType}
            styleType={styleType}
            isChecked={isChecked}
        >
            <StyledCheckbox
                sizeType={sizeType}
                styleType={styleType}
                type='checkbox'
                className={`Checkbox`}
                checked={isChecked}
                isChecked={isChecked}
                onChange={event => {
                    onChange(event.target.checked)
                }}
            />
            <CheckedImage />
        </StyledCheckboxContainer>
    )
}

export { Checkbox }

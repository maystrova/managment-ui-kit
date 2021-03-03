import React from 'react'
import { StyledCheckbox } from './style'

interface CheckboxProps {
    isChecked: boolean
    onChange: (isChecked: boolean) => void
}

const Checkbox = ({ isChecked, onChange }: CheckboxProps) => {
    return (
        <StyledCheckbox
            type='checkbox'
            className={`Checkbox`}
            checked={isChecked}
            onChange={event => {
                onChange(event.target.checked)
            }}
        />
    )
}

export { Checkbox }

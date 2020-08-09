import React from 'react'
import styled from '@emotion/styled'

interface InputProps {
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input`
`

const Input = ({ name, value, onChange }) => {
    return (
        <StyledInput
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
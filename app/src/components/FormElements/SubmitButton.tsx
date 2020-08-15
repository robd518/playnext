import React from 'react'
import styled from '@emotion/styled'

interface SubmitButtonProps {
    name: string
    text: string
}

const StyledSubmitButton = styled.button`
`

const SubmitButton = ({ name, text }: SubmitButtonProps) => {
    return (
        <StyledSubmitButton
            name={name}
        >
        {text}
        </StyledSubmitButton>
    )
}

export default SubmitButton
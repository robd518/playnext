import React from 'react'
import styled from '@emotion/styled'

interface FormProps {
    title: string
    name: string
    children: any
    onSubmit: any
}

const StyledForm = styled.form`
`

const Form = ({ title, name, children, onSubmit }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = children.filter((c) => c.props)
            .reduce((acc, c) => {
                let data = new FormData(e.target as HTMLFormElement)
                return { ...acc, [c.props.name]: data.get(c.props.name)}
            }, {})
            onSubmit(data)
    }

    return (
        <StyledForm
            onSubmit={handleSubmit}
            name={name}
        >
            {children}
        </StyledForm>
    )
}

export default Form
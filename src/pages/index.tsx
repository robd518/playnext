import React from 'react'
import { Form, Input, SubmitButton } from '../components/FormElements'
import useSearchForm from '../hooks/useSearchForm'

const Index = () => {

    const { values,
        handleOnSubmit,
        handleOnChange
    } = useSearchForm()

    return (
        <Form
            name="searchForm"
            title="Play Next"
            onSubmit={handleOnSubmit}
        >
            <Input
                name="searchInput"
                value={values.searchInput || ''}
                onChange={handleOnChange}
            />
            <SubmitButton
                name={"formSubmit"}
                text={"Search"}
            />
        </Form>
    )
}

export default Index


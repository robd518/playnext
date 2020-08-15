import { useState, useEffect, useRef } from 'react'

interface Values {
    searchInput: string
}

const initialValues: Values = {
    searchInput: ''
}

const useSearchForm = () => {
    const [values, setValues] = useState(initialValues)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const isFirstRun = useRef(true)

    useEffect(() => {
        if (isSubmitting) {
            setValues(initialValues)
            setIsSubmitting(false)
            isFirstRun.current = true
        }
    })

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false
            return
        }
    })

    const handleOnSubmit = () => {
        setIsSubmitting(true)
    }

    const handleOnChange = (e) => {
        e.persist()
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
        console.log(values)
    }

    return {
        values,
        handleOnSubmit,
        handleOnChange
    }
}

export default useSearchForm
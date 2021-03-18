import React from 'react'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import { useForm } from '../../shared/hooks/form-hook'

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator'

import './NewPlace.css'

const NewPlace = () => {
    const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }, 
            description: {
                value: '',
                isValid: false
            }
        }, false)

    const newPlaceSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    return (
        <form className="place-form" onSubmit={newPlaceSubmitHandler}>
            <Input 
                element="input" 
                id="title" 
                name="title" 
                maxLength="255" 
                type="text" 
                placeholder="Place title"
                label="Title"
                autoComplete="off"
                errorText="Please type a valid title"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler} />

            <Input 
                element="input" 
                id="address" 
                name="address" 
                maxLength="255" 
                type="text" 
                placeholder="Place Address"
                label="Address"
                autoComplete="off"
                errorText="Please type a valid address"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler} />
            
            <Input 
                element="textarea" 
                id="description" 
                name="description" 
                rows="5"  
                placeholder="Place description"
                label="Description"
                errorText="Please input a valid description, type at least 5 characters"
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler} />

            <Button type="submit" disabled={!formState.isValid}>
                Add Place
            </Button>
        </form>
    )
}

export default NewPlace
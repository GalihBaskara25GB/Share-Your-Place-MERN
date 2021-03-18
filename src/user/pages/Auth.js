import React, { useContext, useState } from 'react'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import Card from '../../shared/components/UIElements/Card'
import { AuthContext } from '../../shared/context/auth-context'
import { useForm } from '../../shared/hooks/form-hook'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator'

import './Auth.css'

const Auth = () => {
    const auth = useContext(AuthContext)
    const [isLoginMode, setisLoginMode] = useState(true)

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)

    const authSubmmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
        auth.login()
    }

    const swithModeHandler = () => {
        if(!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                }, 
                formState.inputs.email.isValid && formState.inputs.password.isValid
            )
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setisLoginMode(prevMode => !prevMode)
    }

    return (
        <Card className="authentication">
            <form onSubmit={authSubmmitHandler}>
                <h2>Login Required</h2>
                <hr />
                { !isLoginMode && 
                <Input 
                    element="input" 
                    id="name" 
                    name="name" 
                    maxLength="255" 
                    type="text" 
                    placeholder="Your name"
                    label="Name"
                    autoComplete="off"
                    errorText="Please type a name"
                    validators={[VALIDATOR_REQUIRE()]}
                    onInput={inputHandler} />
                }

                <Input 
                    element="input" 
                    id="email" 
                    name="email" 
                    maxLength="255" 
                    type="email" 
                    placeholder="Type your email"
                    label="Email"
                    autoComplete="off"
                    errorText="Please type a valid email"
                    validators={[VALIDATOR_EMAIL()]}
                    onInput={inputHandler} />

                <Input 
                    element="input" 
                    id="password" 
                    name="password" 
                    maxLength="255" 
                    type="password" 
                    placeholder="Place password"
                    label="Password"
                    autoComplete="off"
                    errorText="Please type a valid password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    onInput={inputHandler} />
            
                <Button type="submit" disabled={!formState.isValid} >
                    {isLoginMode ? 'Login' : 'Signup'}
                </Button>
            </form>
            <Button inverse onClick={swithModeHandler}>
                Switch to {isLoginMode ? 'Signup' : 'Login'}
            </Button>
        </Card>
    )
}

export default Auth
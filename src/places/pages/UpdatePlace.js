import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import Card from '../../shared/components/UIElements/Card'
import { useForm } from '../../shared/hooks/form-hook'

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validator'

const DUMMY_PLACES= [
    {
        id:'p1',
        title: 'ITN 2 Malang',
        description: 'Kampus bertema Taman Safari',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNiGCxCLKMd4PLBzT0tnVi3sLduC_eEYRsbOhd8=w408-h244-k-no',
        address: 'JL. Raya Karanglo KM. 2, Tasikmadu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65153',
        creator: 'u1',
        location: {
            lat: '-7.9166857',
            lng: '112.6342483'
        }
    },
    {
        id:'p2',
        title: 'ITN 1 Malang',
        description: 'Kampus bertema Gedung Angker',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNiGCxCLKMd4PLBzT0tnVi3sLduC_eEYRsbOhd8=w408-h244-k-no',
        address: 'JL. Raya Karanglo KM. 2, Tasikmadu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65153',
        creator: 'u2',
        location: {
            lat: '-7.9166857',
            lng: '112.6342483'
        }
    },
]

const UpdatePlace = () => {
    const [isLoading, setisLoading] = useState(true)
    const placeId = useParams().placeId
    
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)
    
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)
    
    useEffect(() => {
        if(identifiedPlace){
            setFormData(
                {
                    title: {
                        value: identifiedPlace.title,
                        isValid: true
                    },
                    description: {
                        value: identifiedPlace.description,
                        isValid: true
                    }
                }, true
            )
            setisLoading(false)
        }
    }, [setFormData, identifiedPlace])
    

    const updatePlaceSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    if(!identifiedPlace) {
        return(
            <div className="center">
                <Card>
                    <h2>Place Not Found</h2>
                </Card>
            </div>
        )
    }

    if(isLoading) {
        return(
            <div className="center">
                <Card>
                    <h2>Loading...</h2>
                </Card>
            </div>
        )
    }

    return (
        <form className="place-form" onSubmit={updatePlaceSubmitHandler}>
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
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid} />

            <Input 
                element="textarea" 
                id="description" 
                name="description" 
                rows="5"  
                placeholder="Place description"
                label="Description"
                errorText="Please input a valid description, type at least 5 characters"
                validators={[VALIDATOR_MINLENGTH(5)]}
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid} />

            <Button type="submit" disabled={!formState.isValid}>
                Update Place
            </Button>
        </form>
    )
}

export default UpdatePlace
import React, { useState, useContext } from 'react'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

import './PlaceItem.css'
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map'
import { AuthContext } from '../../shared/context/auth-context'

const PlaceItem = (props) => {
    const auth = useContext(AuthContext)
    
    const [showMap, setshowMap] = useState(false)  
    const [showConfirmModal, setShowConfirmModal] = useState(false)


    const openMapHandler = () => setshowMap(true)
    const closeMapHandler = () => setshowMap(false)

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true)
    }
    
    const cancelDeleteHandler = () => {
        setShowConfirmModal(false)
    }

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false)
        console.log(`DELETING... place with ID: `)
    }

    return (
        <React.Fragment>
        <Modal 
            show={showMap}
            onCancel={closeMapHandler}
            header={props.address}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>Close</Button>}
        >
            <div className="map-container">
                <Map center={props.coordinates} zoom={16} />
            </div>
        </Modal>
        <Modal 
            show={showConfirmModal}
            onCancel={cancelDeleteHandler}
            header="Warning"
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={
                <React.Fragment>
                    <Button onClick={cancelDeleteHandler} inverse>Cancel</Button>
                    <Button onClick={confirmDeleteHandler} danger>Delete</Button>
                </React.Fragment>
            }
        >
            <p>Are you sure to delete this place? This action cannot be undone!!</p>
        </Modal>
        
        <li className='place-item'>
            <Card className='place-item__content'>
                <div className='place-item__image'>
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openMapHandler}>View in map</Button>
                    { 
                        auth.isLoggedIn && (
                        <Button to={`/places/${props.id}`}>Edit</Button> 
                    )}
                    {   
                        auth.isLoggedIn && (
                        <Button onClick={showDeleteWarningHandler} danger>Delete</Button> 
                    )}
                </div>
            </Card>
        </li>
        </React.Fragment>
    )
}

export default PlaceItem
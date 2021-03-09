import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from '../components/PlaceList'

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

const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(places => places.creator === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
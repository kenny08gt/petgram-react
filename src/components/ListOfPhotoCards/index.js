import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Ul } from './styles'

export const ListOfPhotoCards = () => {
    return (
        <Ul>
            {[1 , 2, 3].map( id => <PhotoCard key={id} />)}
        </Ul>
    )
}

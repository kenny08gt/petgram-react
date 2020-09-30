import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Ul } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <Ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => <PhotoCard key={id} id={id} />)}
    </Ul>
  )
}

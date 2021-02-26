// @ts-nocheck
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function PetDetailsPage() {
  const [pet, setPet] = useState({})

  const params = useParams()
  console.log(params)

  useEffect(async () => {
    const response = await axios.get(
      `https://steven-zambito-tamagotchi.herokuapp.com/api/Pets/${params.id}`
    )

    setPet(response.data)
  }, [])

  return (
    <>
      <p>{pet.name}</p>
    </>
  )
}

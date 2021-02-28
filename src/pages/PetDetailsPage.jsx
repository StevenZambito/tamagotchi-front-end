// @ts-nocheck
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import moment from 'moment'

export function PetDetailsPage() {
  const [pet, setPet] = useState({})

  const params = useParams()
  console.log(params)

  const history = useHistory()

  useEffect(async () => {
    const response = await axios.get(
      `https://steven-zambito-tamagotchi.herokuapp.com/api/Pets/${params.id}`
    )

    setPet(response.data)
  }, [])

  const addPlaytime = async () => {
    const response = await axios.post(
      `https://steven-zambito-tamagotchi.herokuapp.com/api/Pets/${params.id}/playtimes`
    )

    setPet(response.data)
  }

  const addFeeding = async () => {
    const response = await axios.post(
      `https://steven-zambito-tamagotchi.herokuapp.com/api/Pets/${params.id}/feedings`
    )

    setPet(response.data)
  }

  const addScolding = async () => {
    const response = await axios.post(
      `https://steven-zambito-tamagotchi.herokuapp.com/api/Pets/${params.id}/scoldings`
    )

    setPet(response.data)
  }

  const deletePet = async () => {
    const response = await axios.delete(
      `https://steven-zambito-tamagotchi.herokuapp.com/api/Pets/${params.id}`
    )
    setPet(response.data)

    history.push('/')
  }

  return (
    <>
      <div className="tama-shell">
        <div className="tama-border">
          <div className="pet-div-info">
            <p id="pet-name">{pet.name}</p>
            <p>
              <span class="pet-info-bold">Birthday:</span>{' '}
              {moment(pet.birthday).format('LLL')}
            </p>
            <p>
              <span class="pet-info-bold">Hunger Level:</span> {pet.hungerLevel}
            </p>
            <p>
              <span class="pet-info-bold">Happiness Level:</span>{' '}
              {pet.happinessLevel}
            </p>
          </div>
        </div>

        <div className="tama-main-buttons">
          <button onClick={addPlaytime}>Play</button>
          <button id="feed-button" onClick={addFeeding}>
            Feed
          </button>
          <button onClick={addScolding}>Scold</button>
        </div>
        <div className="tama-delete-button">
          <button onClick={deletePet}>Delete Pet</button>
        </div>
      </div>
    </>
  )
}

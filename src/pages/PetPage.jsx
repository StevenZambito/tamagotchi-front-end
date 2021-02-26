import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PetComponent } from '../components/PetComponent'

export function PetPage() {
  const [petItems, setPetItems] = useState([])
  const [newPetItemName, setNewPetItemName] = useState('')

  async function loadAllPetItems() {
    const response = await axios.get(
      'https://steven-zambito-tamagotchi.herokuapp.com/api/Pets'
    )

    setPetItems(response.data)
  }

  // @ts-ignore
  useEffect(loadAllPetItems, [])

  async function handleNewPetItem(event) {
    event.preventDefault()

    const response = await axios.post(
      'https://steven-zambito-tamagotchi.herokuapp.com/api/Pets',
      { name: newPetItemName }
    )

    // const newPetItem = response.data

    // const newPetItems = [...petItems, newPetItem]

    // setPetItems(newPetItems)
    loadAllPetItems()

    setNewPetItemName('')
  }
  return (
    <>
      <h2>The Tomogatchis in question:</h2>
      <ul>
        {petItems.map(petItem => (
          // <li key={petItem.id}>{petItem.name}</li>
          <PetComponent
            key={petItem.id}
            name={petItem.name}
            reloadItems={loadAllPetItems}
          />
        ))}
      </ul>
      <form onSubmit={handleNewPetItem}>
        <p>hi</p>
        <input
          type="text"
          placeholder="Create a new pet"
          value={newPetItemName}
          onChange={event => {
            setNewPetItemName(event.target.value)
          }}
        />
      </form>
    </>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export function App() {
  const [petItems, setPetItems] = useState([])
  const [newPetItem, setNewPetItem] = useState('')

  useEffect(async function () {
    const response = await axios.get(
      'https://steven-zambito-tamagotchi.herokuapp.com/api/Pets'
    )

    setPetItems(response.data)
  }, [])

  return (
    <>
      <div className="app">
        <header>
          <h1>Tamagotchi!</h1>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Go Home</Link>
              </li>
              <li>
                <Link to="/1">Page 1</Link>
              </li>
              <li>
                <Link to="/2">Page 2</Link>
              </li>
            </ul>
          </nav> */}
        </header>
        {/* <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/1">
            Page 1
          </Route>
          <Route exact path="/2">
            Page 2
          </Route>
          <Route path="*">Not Found</Route>
        </Switch> */}
        <main>
          <h2>The Tomogatchis in question:</h2>
          <ul>
            {petItems.map(petItem => (
              <li key={petItem.id}>{petItem.name}</li>
            ))}
          </ul>
          <form>
            <p>hi</p>
            <input
              type="text"
              placeholder="Create a new pet"
              value={newPetItem}
              onChange={event => {
                setNewPetItem(event.target.value)
              }}
            />
          </form>
        </main>
        <footer>
          <p>Created by Steven Zambito</p>
        </footer>
      </div>
    </>
  )
}

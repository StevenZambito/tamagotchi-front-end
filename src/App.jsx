import { Link, Route, Switch } from 'react-router-dom'
import { PetPage } from './pages/PetPage'
import { PetDetailsPage } from './pages/PetDetailsPage'
import tamagotchibackground from './images/tamagotchiwallpaper.jpg'

export function App() {
  return (
    <>
      <div className="app">
        <header>
          <h1>Tamagotchi!</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <PetPage />
            </Route>
            <Route exact path="/pet/:id">
              <PetDetailsPage />
            </Route>
            <Route path="*">
              <p>Not Found</p>
            </Route>
          </Switch>
        </main>
        <footer>
          <p>Created by Steven Zambito</p>
        </footer>
      </div>
    </>
  )
}

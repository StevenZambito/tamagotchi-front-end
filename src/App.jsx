import { Link, Route, Switch } from 'react-router-dom'
import { PetPage } from './pages/PetPage'
import { PetDetailsPage } from './pages/PetDetailsPage'

export function App() {
  return (
    <>
      <div className="app">
        <header>
          <h1>Tamagotchi!</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Go Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <PetPage />
            </Route>
            <Route exact path="/:id">
              <PetDetailsPage />
            </Route>
            <Route path="*">Not Found</Route>
          </Switch>
        </main>
        <footer>
          <p>Created by Steven Zambito</p>
        </footer>
      </div>
    </>
  )
}

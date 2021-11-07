import CharacterPage from './pages/CharacterPage'
import { MarvelContextProvider } from './contexts/marvelContext';
import NavBar from './nav/NavBar'
import { Route, Switch, Redirect } from 'react-router-dom'

const App = () => {



  return (
    <div className="mainContent">
      <MarvelContextProvider>
        <NavBar />
        <Switch>
          <Route path='/characters'>
            <CharacterPage />
          </Route>
        </Switch>
      </MarvelContextProvider>
    </div>
  );
}

export default App;

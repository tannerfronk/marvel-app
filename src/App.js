import CharacterPage from './pages/CharacterPage'
import ComicPage from './pages/ComicsPage';
import { MarvelContextProvider } from './contexts/marvelContext';
import NavBar from './nav/NavBar'
import { Route, Switch } from 'react-router-dom'

const App = () => {



  return (
    <div className="mainContent">
      <MarvelContextProvider>
        <NavBar />
        <Switch>
          <Route path='/characters'>
            <CharacterPage />
          </Route>
          <Route path='/comics'>
            <ComicPage />
          </Route>
        </Switch>
      </MarvelContextProvider>
    </div>
  );
}

export default App;

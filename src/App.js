import CharacterPage from './pages/CharacterPage'
import ComicPage from './pages/ComicsPage'
import MarvelDetails from './pages/CharacterDetail'
import NotFound from './pages/NotFound'
import { MarvelContextProvider } from './contexts/marvelContext'
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
          <Route path='/details/:charId' exact>
            <MarvelDetails />
          </Route>
          <Route path='/comics'>
            <ComicPage />
          </Route>
          <Route path='/comics/:comicID' exact>
            <ComicPage />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </MarvelContextProvider>
    </div>
  );
}

export default App;

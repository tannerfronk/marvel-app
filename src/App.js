import Welcome from './pages/Welcome'
import CharacterPage from './pages/CharacterPage'
import ComicPage from './pages/ComicsPage'
import MarvelDetails from './pages/CharacterDetail'
import LoginForm from './components/login/LoginForm'
import SignupForm from './components/login/SignUpForm'
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
          <Route path='/' exact>
            <Welcome />
          </Route>
          <Route path='/characters'>
            <CharacterPage />
          </Route>
          <Route path='/details/:type/:id' exact>
            <MarvelDetails />
          </Route>
          <Route path='/comics'>
            <ComicPage />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/signup'>
            <SignupForm />
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

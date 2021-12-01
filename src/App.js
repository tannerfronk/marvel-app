import React from 'react'
import Welcome from './pages/Welcome'
import CharacterPage from './pages/CharacterPage'
import ComicPage from './pages/ComicsPage'
import MarvelDetails from './pages/CharacterDetail'
import LoginForm from './components/login/LoginForm'
import SignupForm from './components/login/SignUpForm'
import NotFound from './pages/NotFound'
import { MarvelContextProvider } from './contexts/marvelContext'
import NavBar from './nav/NavBar'
import { Route } from 'react-router-dom'
import IdentityContext from 'react-netlify-identity-gotrue'
import SlideRoutes from 'react-slide-routes'

const App = () => {

  return (
    <div className="mainContent">
      <IdentityContext url="https://sharp-blackwell-1ecc05.netlify.app">
        <MarvelContextProvider>
          <NavBar />
          <SlideRoutes duration={200}>
              <Route path='/' element={<Welcome />} exact />
              <Route path='/characters' element={<CharacterPage />} />
              <Route path='/comics' element={<ComicPage />} />
              <Route path='/details/:type/:id' element={<MarvelDetails />} exact />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/signup' element={<SignupForm />} />
              <Route path='*' element={<NotFound />} />
          </SlideRoutes>
        </MarvelContextProvider>
      </IdentityContext>
    </div>
  );
}

export default App;

import CharacterPage from './pages/CharacterPage'
import { MarvelContextProvider } from './contexts/marvelContext';
import NavBar from './nav/NavBar'

const App = () => {



  return (
    <div className="mainContent">
      <NavBar/>
        <MarvelContextProvider>
            <CharacterPage/>
        </MarvelContextProvider>
    </div>
  );
}

export default App;

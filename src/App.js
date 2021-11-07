import CharacterPage from './components/CharacterPage'
import { MarvelContextProvider } from './contexts/marvelContext';

const App = () => {



  return (
    <div className="mainContent">
        <MarvelContextProvider>
            <CharacterPage/>
        </MarvelContextProvider>
    </div>
  );
}

export default App;

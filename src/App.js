// import logo from './logo.svg';
import './App.css'
import {useState} from 'react';
import {Jokes} from './data/jokes'
import JokeCard from './components/JokeCard'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

const App = () => {
    const [currentJokes, setCurrentJokes] = useState([])
    const [amountOfJokes, setAmountOfJokes] = useState(0)

    // load 5 jokes on load
    for(let i = 0; i < 5; i++){
        currentJokes.push(Jokes[i])
    }

    const handleLoadMore = () => {
        for(let i = amountOfJokes; i < amountOfJokes + 5; i++){
            setCurrentJokes([Jokes[i], ...currentJokes])
        }
    }

  return (
    <div className="mainContent">
        <JokeCard jokeList={currentJokes}/>
        <Button>
            <Typography onClick={handleLoadMore}>Load More Jokes</Typography>
        </Button>
    </div>
  );
}

export default App;

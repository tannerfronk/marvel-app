// import logo from './logo.svg';
import './App.css'
import {useState} from 'react';
import {Jokes} from './data/jokes'
import JokeCard from './components/JokeCard'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

const App = () => {
    const [currentJokes, setCurrentJokes] = useState([Jokes[0], Jokes[1], Jokes[2]])
    const [amountOfJokes, setAmountOfJokes] = useState(5)

    // load one joke per click
    const handleLoadMore = () => {
        let currentJokesNum = amountOfJokes
        let totalJokes = amountOfJokes + 1
        for(let i = currentJokesNum; i < totalJokes; i++){
            setCurrentJokes([...currentJokes, Jokes[i]])
        }
        setAmountOfJokes(totalJokes)
    }

  return (
    <div className="mainContent">
        <JokeCard jokeList={currentJokes}/>
        <Button
            sx={{
                m: '1rem',
                background: '#fff',
                borderRadius: '5px',
                boxShadow: '5px 5px 5px gray'
            }}
        >
            <Typography onClick={handleLoadMore}>Load New Joke</Typography>
        </Button>
    </div>
  );
}

export default App;

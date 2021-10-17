// import {Jokes} from '../data/jokes'
// import {useState} from 'react';
import Card from '@mui/material/Card'
import Container from "@mui/material/Container"
import './JokeCard.css'
import PunchLine from './PunchLine'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'

import { useJokesContext } from '../contexts/jokeContext'

const JokeCard = () => {
    const jokeList = useJokesContext()
    const jokes = jokeList.jokes

    // const [currentJokes, setCurrentJokes] = useState(jokes)
    // const [amountOfJokes, setAmountOfJokes] = useState(3)

    // load more jokes
    // const handleLoadMore = () => {
    //     let newJokeSet = useJokesContext()
    //     setCurrentJokes(prevState => {
    //         return [...prevState, newJokeSet.jokes]
    //     })
    // }

    return (
            jokes.map((joke) => {
                return (
                    <Container key={joke.id} className="jokeCard">
                        <Card
                            sx={{
                                width: '100%',
                                my: '1rem',
                                boxShadow: '5px 5px 5px gray',
                                top: '50%',
                                left: '50%',
                                h2: {
                                    p: '0 1rem'
                                }
                            }}
                            className="cardInfo"
                        >
                            <h2>{joke.setup}</h2>
                            <PunchLine punchLine={joke.delivery} />
                        </Card>
                    </Container>
                )
            })
    )
}

export default JokeCard
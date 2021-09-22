// import {Jokes} from '../data/jokes'
import Card from '@mui/material/Card'
import Container from "@mui/material/Container";
import './JokeCard.css'
import PunchLine from './PunchLine'

const JokeCard = (props) => {
    const jokes = props.jokeList

    return (
        jokes.map((joke) => {
            return(
                <Container key={joke.id} className="jokeCard">
                    <Card
                        sx={{
                            width: '100%',
                            m: '1rem .5rem',
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
                        <PunchLine punchLine={joke.punchline}/>
                    </Card>
                </Container>
            )
        })
    )
}

export default JokeCard
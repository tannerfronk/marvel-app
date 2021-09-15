// import {Jokes} from '../data/jokes'
import Card from '@mui/material/Card'
import './JokeCard.css'
import PunchLine from './PunchLine'

const JokeCard = (props) => {
    const jokes = props.jokeList

    return (
        jokes.map((joke) => {
            return(
                <div key={joke.id} className="jokeCard">
                    <Card className="cardInfo">
                        <h2>{joke.setup}</h2>
                        <PunchLine punchLine={joke.punchline}/>
                    </Card>
                </div>
            )
        })
    )
}

export default JokeCard
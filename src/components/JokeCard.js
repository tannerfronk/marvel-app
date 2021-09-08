import {Jokes} from '../data/jokes'
import { Card } from '@material-ui/core'
import './JokeCard.css'
import PunchLine from './PunchLine'

const JokeCard = () => {

    return (
        Jokes.map((joke) => {
            return(
                <div className="jokeCard">
                    <Card className="cardInfo" key={joke.id}>
                        <h2>{joke.setup}</h2>
                        <PunchLine punchLine={joke.punchline}/>
                    </Card>
                </div>
            )
        })
    )
}

export default JokeCard
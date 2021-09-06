import {Jokes} from '../data/jokes'
import { Card } from '@material-ui/core'
import './JokeCard.css'

const JokeCard = () => {

    return (
        Jokes.map((joke) => {
            return(
                <div className ="jokeCard">
                    <Card key={joke.id}>
                        <h1>{joke.setup}</h1>
                        <h2 className="punchLine">{joke.punchline}</h2>
                    </Card>
                </div>
            )
        })
    )
}

export default JokeCard
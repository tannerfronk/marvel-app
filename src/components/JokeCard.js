import {Jokes} from '../data/jokes'
import { Card } from '@material-ui/core'

const jokeCard = () => {
    return (
        Jokes.map((joke) => {
            return(
                <Card key={joke.id}>
                    <h1>{joke.setup} {joke.punchline}</h1>
                </Card>
            )
        })
    )
}

export default jokeCard
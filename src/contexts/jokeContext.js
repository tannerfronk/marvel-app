import * as React from 'react'
import axios from 'axios'

const JokeContext = React.createContext({
    jokes: []
})

export const JokeContextProvider = (props) => {
    const [jokes, setJokes] = React.useState([])

    React.useEffect(() => {
        const fetchJokes = async () => {
            const jokeURL = `/.netlify/functions/jokes`
            try {
                const response = await axios.get(jokeURL)

                setJokes(response.data.jokes)
            } catch(e) {
                console.log(e)
            }
        }
        fetchJokes()
    }, [])

    return (
        <JokeContext.Provider value={{
            jokes
        }}>
            {props.children}
        </JokeContext.Provider>
    )
}

export const useJokesContext = () => React.useContext(JokeContext)
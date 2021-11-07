import * as React from 'react'
import axios from 'axios'

const MarvelContext = React.createContext({
    characters: []
})

export const MarvelContextProvider = (props) => {
    const [characters, setCharacters] = React.useState([])

    React.useEffect(() => {
        const fetchCharacters = async () => {
            const marvelURL = `/.netlify/functions/marvel`
            try {
                const response = await axios.get(marvelURL)

                setCharacters(response.data.data)
            } catch(e) {
                console.log(e)
            }
        }
        fetchCharacters()
    }, [])

    return (
        <MarvelContext.Provider value={{
            characters
        }}>
            {props.children}
        </MarvelContext.Provider>
    )
}

export const useMarvelContext = () => React.useContext(MarvelContext)
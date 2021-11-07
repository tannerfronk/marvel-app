import * as React from 'react'
import axios from 'axios'

const MarvelContext = React.createContext({
    characters: [],
    comics: []
})

export const MarvelContextProvider = (props) => {
    const [characters, setCharacters] = React.useState([])
    const [comics, setComics] = React.useState([])

    React.useEffect(() => {
        const fetchCharacters = async () => {
            const characterURL = `/.netlify/functions/marvel?type=characters`
            const comicURL = `/.netlify/functions/marvel?type=comics`
            try {
                const characterResponse = await axios.get(characterURL)
                const comicResponse = await axios.get(comicURL)

                setCharacters(characterResponse.data.data.results)
                setComics(comicResponse.data.data.results)
            } catch(e) {
                console.log(e)
            }
        }
        fetchCharacters()
    }, [])

    return (
        <MarvelContext.Provider value={{
            characters,
            comics
        }}>
            {props.children}
        </MarvelContext.Provider>
    )
}

export const useMarvelContext = () => React.useContext(MarvelContext)
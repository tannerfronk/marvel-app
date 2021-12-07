import * as React from 'react'
import axios from 'axios'

const MarvelContext = React.createContext({
    characters: [],
    comics: [],
    favorites: [],
    allCards: []
})

export const MarvelContextProvider = (props) => {
    const [characters, setCharacters] = React.useState([])
    const [comics, setComics] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [allCards, setAllCards] = React.useState([])


    const setAsFavorite = (character) => {
        if(favorites.indexOf(character.id) === -1){
            setFavorites((prevState) => [...prevState, character.id])
        } else {
            setFavorites(() => {
                return favorites.filter((el) => el !== character.id)
            })
        }
    }

    React.useEffect(() => {
        const fetchCharacters = async () => {
            const characterURL = `/.netlify/functions/marvel?type=characters`
            const comicURL = `/.netlify/functions/marvel?type=comics`
            try {
                const characterResponse = await axios.get(characterURL)
                const comicResponse = await axios.get(comicURL)

                setCharacters(characterResponse.data.data.results)
                setComics(comicResponse.data.data.results)
                setAllCards([...characterResponse.data.data.results, ...comicResponse.data.data.results])
            } catch(e) {
                console.log(e)
            }
        }
        fetchCharacters()
    }, [])

    return (
        <MarvelContext.Provider value={{
            characters,
            comics,
            favorites,
            setAsFavorite,
            allCards
        }}>
            {props.children}
        </MarvelContext.Provider>
    )
}

export const useMarvelContext = () => React.useContext(MarvelContext)
import * as React from 'react'
import { useState } from 'react' // unsure why above import isn't covering this

import axios from 'axios'

const MarvelContext = React.createContext({
    characters: [],
    comics: [],
    favorites: []
})

export const MarvelContextProvider = (props) => {
    const [characters, setCharacters] = React.useState([])
    const [comics, setComics] = React.useState([])
    const [favorites, setFavorites] = useState([])


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
            setAsFavorite
        }}>
            {props.children}
        </MarvelContext.Provider>
    )
}

export const useMarvelContext = () => React.useContext(MarvelContext)
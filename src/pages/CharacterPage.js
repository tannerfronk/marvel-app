import * as React from 'react'
import Box from '@mui/material/Box'
import CharacterCard from '../components/CharacterCard'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useMarvelContext } from '../contexts/marvelContext'
import Favorite from '@mui/icons-material/Favorite'
import { FavoriteSharp } from '@mui/icons-material'

const CharacterPage = () => {
    const characterList = useMarvelContext()
    const characters = characterList.characters
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [favoriteCharacters, setFavoriteCharacters] = useState([])

    const setCharacterAsFavorite = (character) => {
        if(!favoriteCharacters.includes(character.id)){
            setFavoriteCharacters((prevState) => [...prevState, character.id])
        } else {
            setFavoriteCharacters(() => {
                return favoriteCharacters.filter((el) => el !== character.id)
            })
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            {characters && characters.length > 0 &&
                characters.map((character) => {
                    return (
                        <CharacterCard
                            key={character.id}
                            charInfo={{ ...character }}
                            addFavorites={setCharacterAsFavorite}
                            modalFunction={handleOpen}
                        />
                    )
                })}
                <Modal open={open} onClose={handleClose}>
                    <Typography variant="h6">Character Information</Typography>
                </Modal>
        </Box>
    )
}

export default CharacterPage
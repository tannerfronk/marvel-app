import * as React from 'react'
import Box from '@mui/material/Box'
import CharacterCard from '../components/CharacterCard'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useMarvelContext } from '../contexts/marvelContext'
import { CircularProgress } from '@mui/material';
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useHistory } from 'react-router-dom'

const CharacterPage = () => {
    const characterList = useMarvelContext()
    const characters = characterList.characters
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [favoriteCharacters, setFavoriteCharacters] = useState([])
    const identity = useIdentityContext()
    const history = useHistory()

    if(!identity.user){
        history.push('/login')
    }

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
                justifyContent: 'center'
            }}
        >
            {(!characters || characters.length < 1) &&
                <Box sx={{ margin: 'auto', marginTop: 5 }}>
                    <CircularProgress variant="indeterminate" size='5em' sx={{ color: '#F0131E' }}></CircularProgress>
                    
                </Box>
            }
            {characters && characters.length > 0 &&
                characters.map((character) => {
                    return (
                        <CharacterCard
                            key={character.id}
                            cardInfo={{ ...character }}
                            page="characters"
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
import * as React from 'react'
import Box from '@mui/material/Box'
import CharacterCard from './CharacterCard'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import { useMarvelContext } from '../contexts/marvelContext'

const CharacterPage = () => {
    const characterList = useMarvelContext()
    const characters = characterList.characters.results
    console.log(characters)
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

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
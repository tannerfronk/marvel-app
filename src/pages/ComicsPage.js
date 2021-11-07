import * as React from 'react'
import Box from '@mui/material/Box'
import CharacterCard from '../components/CharacterCard'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useMarvelContext } from '../contexts/marvelContext'
import Favorite from '@mui/icons-material/Favorite'
import { FavoriteSharp } from '@mui/icons-material'

const ComicPage = () => {
    const comicList = useMarvelContext()
    const comics = comicList.comics
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [favoriteComics, setFavoriteComics] = useState([])

    const setComicAsFavorite = (comic) => {
        if(!favoriteComics.includes(comic.id)){
            setFavoriteComics((prevState) => [...prevState, comic.id])
        } else {
            setFavoriteComics(() => {
                return favoriteComics.filter((el) => el !== comic.id)
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
            {comics && comics.length > 0 &&
                comics.map((comic) => {
                    return (
                        <CharacterCard
                            key={comic.id}
                            charInfo={{ ...comic }}
                            addFavorites={setComicAsFavorite}
                            modalFunction={handleOpen}
                        />
                    )
                })}
                <Modal open={open} onClose={handleClose}>
                    <Typography variant="h6">Comic Information</Typography>
                </Modal>
        </Box>
    )
}

export default ComicPage
import * as React from 'react'
import Box from '@mui/material/Box'
import CharacterCard from '../components/CharacterCard'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useMarvelContext } from '../contexts/marvelContext'
import { CircularProgress } from '@mui/material';
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useNavigate } from 'react-router-dom'

const ComicPage = () => {
    const comicList = useMarvelContext()
    const comics = comicList.comics
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [favoriteComics, setFavoriteComics] = useState([])
    const identity = useIdentityContext()
    const navigate = useNavigate()

    if(!identity.user){
        navigate('/login')
    }

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
                justifyContent: 'center'
            }}
        >
            {(!comics || comics.length < 1) &&
                <Box sx={{ margin: 'auto', marginTop: 5, }}>
                    <CircularProgress variant='indeterminate' size='5em' sx={{ color: '#F0131E' }}></CircularProgress>
                    
                </Box>
            }
            {(comics && comics.length > 0 )&&
                comics.map((comic) => {
                    return (
                        <CharacterCard
                            key={comic.id}
                            cardInfo={{ ...comic }}
                            page="comics"
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
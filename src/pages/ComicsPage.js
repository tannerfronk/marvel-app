import * as React from 'react'
import Box from '@mui/material/Box'
import CharacterCard from '../components/CharacterCard'
import { useMarvelContext } from '../contexts/marvelContext'
import { CircularProgress } from '@mui/material';
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useNavigate } from 'react-router-dom'

const ComicPage = () => {
    const { comics, setAsFavorite } = useMarvelContext()
    const identity = useIdentityContext()
    const navigate = useNavigate()

    if(!identity.user){
        navigate('/login')
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
                            addFavorites={setAsFavorite}
                        />
                    )
                })}
        </Box>
    )
}

export default ComicPage
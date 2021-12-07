import * as React from 'react'
import Box from '@mui/material/Box'
import CharacterCard from '../components/CharacterCard'
import { useMarvelContext } from '../contexts/marvelContext'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useNavigate } from 'react-router-dom'

const Favorites = () => {
    const { allCards, favorites, setAsFavorite } = useMarvelContext()
    const [currentFavorites, setCurrentFavorites] = React.useState([])
    const identity = useIdentityContext()
    const navigate = useNavigate()

    if (!identity.user) {
        navigate('/login')
    }

    React.useEffect(() => {
        setCurrentFavorites((prevState) => {
            return allCards.filter((card) => favorites.indexOf(card.id) !== -1)
        })
    }, [favorites, allCards])

    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            {(!currentFavorites || currentFavorites.length < 1) &&
                <Box sx={{ margin: 'auto', marginTop: 5 }}>
                    <h4>No Favorites to display, go add some!</h4>
                </Box>
            }
            {currentFavorites && currentFavorites.length > 0 &&
                currentFavorites.map((card) => {
                    return (
                        <>
                            {card.name &&
                                <CharacterCard
                                    key={card.id}
                                    cardInfo={{ ...card }}
                                    page="characters"
                                    addFavorites={setAsFavorite}
                                />
                            }
                            {card.title &&
                                <CharacterCard
                                    key={card.id}
                                    cardInfo={{ ...card }}
                                    page="comics"
                                    addFavorites={setAsFavorite}
                                />
                            }
                        </>
                    )
                })}
        </Box>
    )
}

export default Favorites
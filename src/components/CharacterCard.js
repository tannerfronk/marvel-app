import * as React from 'react'
import Card from '@mui/material/Card'
import { IconButton, Typography } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActions } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { useNavigate } from 'react-router'
import Grow from '@mui/material/Grow';
import { useMarvelContext } from '../contexts/marvelContext'

const CharacterCard = (props) => {
    const [favorite, setFavorite] = React.useState(false)
    const { cardInfo, page } = props
    const { favorites, setAsFavorite } = useMarvelContext()
    const navigate = useNavigate()
    let cardTitle = ''
    let width = '200'

    if (page === 'characters') {
        cardTitle = cardInfo.name
    } else if (page === 'comics') {
        cardTitle = cardInfo.title
    }

    const handleSetFavorite = () => {
        setAsFavorite(cardInfo)
    }

    const handleInfoClick = () => {
        navigate(`/details/${page}/${cardInfo.id}`)
    }

    React.useEffect(() => {
        favorites.indexOf(cardInfo.id) !== -1 ? setFavorite(true) : setFavorite(false)
      }, [cardInfo.id, favorites])

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                m: 1,
                border: 2,
                width: width,
                maxWidth: 200,
                backgroundColor: '#222',
                color: 'white',
                borderColor: 'black'
            }}
        >
            <CardMedia component='img' alt='Marvel Character' height='200'
                image={cardInfo.thumbnail.path + '/standard_xlarge.' + cardInfo.thumbnail.extension} />
            <CardContent>
                <Typography>{cardTitle}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton sx={{ p: 0, m: 0 }} onClick={handleSetFavorite}>
                    <Grow in={favorite} mountOnEnter unmountOnExit
                        {...(favorite ? { timeout: 1500 } : {})}
                        style={{ position: 'absolute', marginLeft: '1.5rem' }}>
                        <FavoriteIcon sx={{ color: '#F0131E' }} />
                    </Grow>
                    <Grow in={!favorite} mountOnEnter unmountOnExit 
                        {...(!favorite ? { timeout: 1500 } : {})}
                        style={{ position: 'absolute', marginLeft: '1.5rem' }}>
                        <FavoriteIcon sx={{ color: '#555' }} />
                    </Grow>
                </IconButton>
                <IconButton sx={{ p: 0, color: '#F0131E' }} onClick={handleInfoClick}>
                    {cardInfo.name &&
                        <PermIdentityIcon />
                    }
                    {cardInfo.title &&
                        <MenuBookIcon />
                    }
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CharacterCard
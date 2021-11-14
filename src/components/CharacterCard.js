import * as React from 'react'
import Card from '@mui/material/Card'
import { IconButton, Typography } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActions } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { useHistory } from 'react-router'

const CharacterCard = (props) => {
    const [favorite, setFavorite] = React.useState(false)
    const { cardInfo, page } = props
    const history = useHistory()
    let cardTitle = ''
    let width = '200'

    if(page === 'characters'){
        cardTitle = props.cardInfo.name
    } else if(page === 'comics'){
        cardTitle = props.cardInfo.title
    }

    const handleSetFavorite = () => {
        setFavorite(!favorite)
        props.addFavorites(cardInfo)
    }

    const handleInfoClick = () => {
        history.push(`/details/${page}/${cardInfo.id}`)
    }

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                m: 1,
                border: 2,
                width: width,
                maxWidth: 200
            }}
        >
            <CardMedia component='img' alt='Marvel Character' height='200'
            image={cardInfo.thumbnail.path + '/standard_xlarge.' + cardInfo.thumbnail.extension}/>
            <CardContent>
                <Typography>{cardTitle}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton sx={{ p: 0, m: 0 }} onClick={handleSetFavorite}>
                    <FavoriteIcon sx={{ color: favorite ? '#f00' : '#555'}} />
                </IconButton>
                <IconButton sx={{ p: 0 }} onClick={handleInfoClick}>
                    <PermIdentityIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CharacterCard
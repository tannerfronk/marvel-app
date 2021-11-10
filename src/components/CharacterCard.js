import * as React from 'react'
import Card from '@mui/material/Card'
import { IconButton, Typography } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActions } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

const CharacterCard = (props) => {
    const [favorite, setFavorite] = React.useState(false)
    const { cardInfo, page } = props
    let cardTitle = ''
    let height = '200'
    let width = '200'
    let maxWidth = '200'

    if(page === 'characters'){
        cardTitle = props.cardInfo.name

    } else if(page === 'comics'){
        cardTitle = props.cardInfo.title
        height = '200'
        width = '400'
        maxWidth = '400'
    }

    const handleSetFavorite = () => {
        setFavorite(!favorite)
        props.addFavorites(cardInfo)
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
                maxWidth: maxWidth
            }}
        >
            <CardMedia component='img' alt='Marvel Character' height={height}
            image={props.cardInfo.thumbnail.path + '/standard_xlarge.' + props.cardInfo.thumbnail.extension}/>
            <CardContent>
                <Typography>{cardTitle}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton sx={{ p: 0, m: 0 }} onClick={handleSetFavorite}>
                    <FavoriteIcon sx={{ color: favorite ? '#f00' : '#555'}} />
                </IconButton>
                <IconButton sx={{ p: 0 }}>
                    <PermIdentityIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CharacterCard
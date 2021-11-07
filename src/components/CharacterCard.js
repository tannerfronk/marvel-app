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
    const { charInfo } = props

    const handleSetFavorite = () => {
        setFavorite(!favorite)
        props.addFavorites(charInfo)
    }

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                m: 1,
                border: 2,
            }}
        >
            <CardMedia component='img' alt='Marvel Character' height='200'
            image={props.charInfo.thumbnail.path + '/standard_xlarge.' + props.charInfo.thumbnail.extension}/>
            <CardContent>
                <Typography>{props.charInfo.name}</Typography>
            </CardContent>
            <CardActions>
                <IconButton sx={{ p: 0, m: 0 }} onClick={handleSetFavorite}>
                    <FavoriteIcon sx={{ color: favorite ? '#f00' : '#000'}} />
                </IconButton>
                <IconButton sx={{ p: 0 }}>
                    <PermIdentityIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CharacterCard
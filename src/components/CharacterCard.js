import * as React from 'react'
import Card from '@mui/material/Card'
import { IconButton, Typography } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActions } from '@mui/material'
import {FavoriteIcon} from '@mui/icons-material'

const CharacterCard = (props) => {



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
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CharacterCard
import * as React from 'react'
import { Box, Card, CardMedia, CardHeader, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useMarvelContext } from '../contexts/marvelContext'

const MarvelDetails = () => {
    const params = useParams()
    console.log(params)
    const marvelData = useMarvelContext()

    const character = marvelData.characters.find(item => item.id == params.charId)

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Typography>hello</Typography>
                <CardMedia component='img' alt='Marvel Character'
                image={character.thumbnail.path + '/standard_xlarge.' + character.thumbnail.extension} />
            </Card>
        </Box>
    )
}

export default MarvelDetails
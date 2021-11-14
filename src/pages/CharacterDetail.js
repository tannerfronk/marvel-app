import * as React from 'react'
import { Box, Card, CardMedia, CardHeader, CardContent, Divider, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material'
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
            <Box sx={{
                maxWidth: 1200,
                display: 'flex',
                flexDirection: 'row'
                }}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <CardMedia component='img' alt='Marvel Character' height='200'
                        image={character.thumbnail.path + '/standard_xlarge.' + character.thumbnail.extension} />
                </Card>
                <Card sx={{ maxWidth: 1000 }}>
                    <CardHeader title="Character Details" />
                    <Divider />
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        Name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {character.name}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        Description
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {character.description ? character.description : "N/A"}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        Comic Appearances
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {character.comics.available}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        Series Appearances
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {character.series.available}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        Character Specific Stories
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {character.stories.available}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        Wiki Page
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {character.urls[1].url}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </Box>
        </Box>
    )
}

export default MarvelDetails
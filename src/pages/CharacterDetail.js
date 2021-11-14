import * as React from 'react'
import { Box, Card, CardMedia, CardHeader, Divider, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useMarvelContext } from '../contexts/marvelContext'

const MarvelDetails = () => {
    const params = useParams()
    console.log(params)
    const marvelData = useMarvelContext()
    const type = params.type
    let card

    if(type === 'characters'){
        card = marvelData.characters.find(item => item.id == params.id)
    } else if(type === 'comics'){
        card = marvelData.comics.find(item => item.id == params.id)
    }

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
                        image={card.thumbnail.path + '/detail.' + card.thumbnail.extension} />
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
                                        {(type === 'characters') ? 'Name' : 'Title'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {card.name ?? card.title}
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
                                        {card.description ?? "N/A"}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Comic Appearances' : 'Pages'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {(type === 'characters') ? card.comics.available : card.pageCount}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Series Appearances' : 'Issue Variants'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {(type === 'characters') ? card.series.available : card.variants.length}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Character Specific Stories' : 'Number of Characters'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {(type === 'characters') ? card.stories.available : card.characters.available}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="textPrimary"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Wiki Page' : 'Issue #'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {(type === 'characters') ? card.urls[1].url : card.issueNumber}
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
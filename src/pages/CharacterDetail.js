import * as React from 'react'
import { Box, Button, Card, CardMedia, CardHeader, Divider, Typography, Table, TableBody, TableCell, TableRow } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom'
import { useMarvelContext } from '../contexts/marvelContext'
import { useHistory } from 'react-router-dom'

const MarvelDetails = () => {
    const params = useParams()
    const marvelData = useMarvelContext()
    const type = params.type
    const history = useHistory()
    let card

    if(type === 'characters'){
        card = marvelData.characters.find(item => item.id.toString() === params.id)
    } else if(type === 'comics'){
        card = marvelData.comics.find(item => item.id.toString() === params.id)
    }

    const handleBackToType = () => {
        history.goBack()
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
                    justifyContent: 'center',
                    backgroundColor: '#222',
                    color: 'white',
                    borderColor: 'black'
                }}>
                    <CardMedia component='img' alt='Marvel Character' sx={{width: 500}}
                        image={card.thumbnail.path + '/detail.' + card.thumbnail.extension} />
                </Card>
                <Card sx={{ 
                    maxWidth: 700,
                    backgroundColor: '#222',
                    color: 'white',
                    borderColor: 'black' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

                        <CardHeader title={(type === 'characters') ? "Character Details" : "Comic Details"} />
                        <Button sx={{ color: 'white' }} onClick={handleBackToType}><ArrowBackIcon /></Button>
                    </Box>
                    <Divider light='true' color="white" />
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Name' : 'Title'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="body2"
                                    >
                                        {card.name ?? card.title}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="subtitle2"
                                    >
                                        Description
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="body2"
                                    >
                                        {(card.description === "" || card.description === null) ? "N/A" : card.description }
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Comic Appearances' : 'Pages'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="body2"
                                    >
                                        {(type === 'characters') ? card.comics.available : card.pageCount}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Series Appearances' : 'Issue Variants'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="body2"
                                    >
                                        {(type === 'characters') ? card.series.available : card.variants.length}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Character Specific Stories' : 'Number of Characters'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="body2"
                                    >
                                        {(type === 'characters') ? card.stories.available : card.characters.available}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="subtitle2"
                                    >
                                        {(type === 'characters') ? 'Wiki Page' : 'Issue #'}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        color="white"
                                        variant="body2"
                                        className="link"
                                    >
                                        {(type === 'characters') ? <a style={{ textDecoration: 'none', color: 'white' }} href={card.urls[1].url} target="_blank" rel="noreferrer">{card.urls[1].url}</a> : card.issueNumber}
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
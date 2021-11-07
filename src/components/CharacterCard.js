// import {Jokes} from '../data/jokes'
// import {useState} from 'react';
import Card from '@mui/material/Card'
import Container from "@mui/material/Container"
import './JokeCard.css'
// import PunchLine from './PunchLine'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'

import { useMarvelContext } from '../contexts/marvelContext'

const CharacterCard = () => {
    const characterList = useMarvelContext()
    const characters = characterList.characters.results
    console.log(characters)

    return (
        <>
            {characters && characters.length > 0 && 
            characters.map((character) => {
                return (
                    <Container key={character.id} className="jokeCard">
                        <Card
                            sx={{
                                width: '100%',
                                my: '1rem',
                                boxShadow: '5px 5px 5px gray',
                                top: '50%',
                                left: '50%',
                                h2: {
                                    p: '0 1rem'
                                }
                            }}
                            className="cardInfo"
                        >
                            <h2>{character.name}</h2>
                        </Card>
                    </Container>
                )
            })}
        </>
    )
}

export default CharacterCard
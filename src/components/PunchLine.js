import {useState} from "react";
import Button from '@mui/material/Button'

const PunchLine = (props) => {
    const [punchLineText, setPunchLineText] = useState('Show Answer')
    const handleClick = () => {
        setPunchLineText(props.punchLine)
    }
    return (
        <Button
            sx={{
                backgroundColor: 'lightblue',
                mw: '50%',
                p: '1rem',
                borderRadius: '5px',
            }}
            className="punchLine" onClick={handleClick}>{punchLineText}</Button>
    )
}

export default PunchLine
import {useState} from "react";
import Button from '@mui/material/Button'

const PunchLine = (props) => {
    const [punchLineText, setPunchLineText] = useState(false)
    const handleClick = () => {
        setPunchLineText(!punchLineText)
    }
    return (
        <Button
            sx={{
                backgroundColor: 'lightblue',
                mw: '50%',
                p: '1rem',
                borderRadius: '5px',
            }}
            className="punchLine" onClick={handleClick}>{punchLineText ? props.punchLine : 'Show Answer'}</Button>
    )
}

export default PunchLine
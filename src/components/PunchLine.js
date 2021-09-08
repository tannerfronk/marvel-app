import {useState} from "react";
import './PunchLine.css'

const PunchLine = (props) => {
    const [punchLineText, setPunchLineText] = useState('Click for the answer')
    const handleClick = () => {
        setPunchLineText(props.punchLine)
    }
    return (
        <div className="punchLine" onClick={handleClick}>{punchLineText}</div>
    )
}

export default PunchLine
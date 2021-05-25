import MainContext from "../MainContext";
import {useContext, useState} from "react";

function NoteBox() {
    const {boxPosition, setBoxVisible,setMode, notes, setNotes} = useContext(MainContext)
    const types = [
        {
            name: 'comment',
            color: 'red',
            text: 'yorum'
        },
        {
            name: 'private-comment',
            color: '#999',
            text: 'Gizli Yorum'
        },
        {
            name: 'note',
            color: 'orange',
            text: 'Not'
        },

    ]
    const [color, setColor] = useState(types[0].color)
    const [note, setNote] = useState()

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    const addNote = () => {
        const currentNote = {
            note,
            number: notes.length+1,
            color,
            position: {
                x: boxPosition.x,
                y: boxPosition.y
            }
        }
        console.log(currentNote)
        setNotes([...note, currentNote])
        setBoxVisible(false)
    }

    return (
        <div onMouseEnter={() => setMode(false)} onMouseLeave={() => setMode(true)} className="noteBox"
             style={{'--color': color, position: 'absolute', top: boxPosition.y, left: boxPosition.x}}>
            <span className="noteBoxNumber">{notes.length + 1}</span>
            <select onChange={changeColor}>
                {types.map(type => (
                    <option value={type.color}>{type.text}</option>
                ))}
            </select>
            <textarea cols='30' rows='5' onChange={(e) => setNote(e.target.value)}/>
            <button onClick={addNote} disabled={!note}>Ekle</button>
        </div>
    )
}

export default NoteBox
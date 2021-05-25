import {useState} from "react";

function Note(note) {
    console.log(note)

    const [visible, setVisible] = useState(false)

    return (
        <div className='note'
             style={{'--color': note.color, position: 'absolute', top: note.position.y, left: note.position.x}}>
            <span className="noteBoxNumber">{note.number}</span>
            <div className='note-text'>{note.notes}</div>
        </div>
    )
}

export default Note
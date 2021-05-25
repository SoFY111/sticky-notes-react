import {useEffect, useRef, useState} from 'react'
import './App.css';

import MainContext from "./MainContext";
import LeaveCommentText from "./components/LeaveCommentText";
import Note from "./components/Note";
import NoteBox from "./components/NoteBox";

function App() {

    const screen = useRef(null)
    const [mode, setMode] = useState(false)
    const [notes, setNotes] = useState([
        {
            note: 'bu bir deneme notudur',
            number: 1,
            color: 'blue',
            position: {
                x: 350,
                y: 350
            }
        }
    ])
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    const [boxVisible, setBoxVisible] = useState(false)
    const [boxPosition, setBoxPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        screen.current.focus()
    }, [])

    const handleKeyUp = (e) => {
        if (e.key === 'c') {
            setMode(!mode)
            setBoxVisible(false)
        }
    }
    const handleMouseMove = (e) => {
        setPosition({
            x: e.pageX,
            y: e.pageY
            // x: e.screenX,
            // y: e.screenY - 61
        })
    }
    const handleClick = (e) => {
        if (mode) {
            setBoxPosition({
                x: position.x,
                y: position.y
            })
            setBoxVisible(true)
        }
    }

    const data = {
        position,
        boxPosition,
        setBoxVisible,
        setMode,
        notes,
        setNotes
    }

    return (
        <MainContext.Provider value={data}>
            <div ref={screen} tabIndex={0} onClick={handleClick} onMouseMove={handleMouseMove} onKeyUp={handleKeyUp}
                 className={`screen${mode && ' editable'}`}>
                <img src="https://webso.cool/images/sanalmagazalar.jpg" alt="res"/>
                {mode && <LeaveCommentText/>}

                {notes && notes.map(note => <Note {...note} />)}
                {boxVisible && <NoteBox/>}
            </div>
        </MainContext.Provider>
    );
}

export default App;

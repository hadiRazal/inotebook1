import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notes = () => {
  const context = useContext(NoteContext)
  const { notes, setNotes } = context
  return (

    <>
      <AddNote />
      <div className='row my-3'>
        <h3>Your notes</h3>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
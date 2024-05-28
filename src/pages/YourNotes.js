import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../firebase'
function YourNotes() {
    const [yourNotes, setYourNotes] = useState([]);
    let user = auth.currentUser;
    let userId = user ? user.uid : null;

    let getNotesCollection = collection(db, 'blogs');
    let getNotesQuery = query(getNotesCollection, where('userId', '==', userId))

    useEffect(() => {
        let getNotes = async () => {
            let notes = await getDocs(getNotesQuery)
            setYourNotes(notes.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            console.log(notes.docs)
        }
        getNotes()
    }, [])

    let deleteNote = async (index) => {
        try {
            let delNote = doc(getNotesCollection, index);
            await deleteDoc(delNote);
            setYourNotes((previousNotes) => previousNotes.filter((note) => note.id !== index))

        } catch (error) {
            console.log(error.message);

        }
    }

    let capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <div>
            {yourNotes.map((note) => {
                return <>
                    <div className='myNotes'>
                        <div className='myNotesData'>
                            <i class="fa-regular fa-trash-can" onClick={() => deleteNote(note.id)}></i>
                            <h1>{capitalizeFirstLetter(note.title)}</h1>
                            <div className='myNotesBorder'></div>
                            <textarea disabled>{capitalizeFirstLetter(note.note)}</textarea>
                        </div>
                    </div>
                </>
            })}
            {yourNotes.length === 0 && <h1 className='textCenter'>No Notes Added!</h1>}
        </div>
    )
}

export default YourNotes



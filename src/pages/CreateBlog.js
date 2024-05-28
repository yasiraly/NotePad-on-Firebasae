import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
function CreateBlog() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    let user = auth.currentUser;
    let userId = user ? user.uid : null;

    let dbRef = collection(db, 'blogs');
    
    let addNote = async () => {
        try {
            if (title === '' || note === '') {
                alert('Please fill all the fields to add a note!')
            }
            else {
                await addDoc(dbRef, { title, note, userId })
                navigate('/yournotes')
                alert('Your note is added successfully!')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className='textCenter'>
                <div className='globalFlex createBlog'>
                    <input type="text" name="" id="" placeholder='Title...' value={title} onChange={(event) => setTitle(event.target.value)} />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your notes...' value={note} onChange={(event) => setNote(event.target.value)}></textarea>
                    <button type='button' className='createBlogBtn' onClick={addNote}>Add note</button>
                </div>
            </div>
        </>
    )
}

export default CreateBlog


import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
function Login() {
    const navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()
    }
    let signInWithGoogle = async () => {
        try {
            let response = await signInWithPopup(auth, provider)
            console.log(response)
            navigate('/createblog')
            localStorage.setItem('user', auth)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <form action="" className='textCenter' onSubmit={handleSubmit}>
                <h2>Sign in with Google to continue</h2>
                <button onClick={signInWithGoogle}>Sign in with <span className='blue'>G</span><span className='red'>o</span><span className='yellow'>o</span><span className='blue'>g</span><span className='green'>l</span><span className='red'>e</span></button>
            </form>
        </>
    )
}

export default Login
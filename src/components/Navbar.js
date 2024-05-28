import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

function Navbar() {
    const [user] = useAuthState(auth);
    let navigate = useNavigate()
    let logoutUser = async () => {
        await signOut(auth);
        navigate('/login')
    }
    return (
        <>
            <header>
                <nav>
                    <div className='navbarData'>
                        <div className='logo'>
                            <h1>MyNotes</h1>
                        </div>
                        <div className='navbar globalFlex'>
                            {
                                !user && <NavLink to='/login'>Sign in / Login</NavLink>
                            }
                            {
                                user && <>
                                    <NavLink to='/yournotes'>Your Notes</NavLink>
                                    <NavLink to='/createblog'>Add Note</NavLink>
                                    <h3 className='userName'>{user.displayName}</h3>
                                </>
                            }
                            {
                                user && <button onClick={logoutUser} className='logoutBtn'>Logout</button>
                            }

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';
import YourNotes from './pages/YourNotes';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Footer from './components/Footer';
function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      <div className='body'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />} />
            {
              user && <>
                <Route path='/yournotes' element={<YourNotes />} />
                <Route path='/createblog' element={<CreateBlog />} />
              </>
            }

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

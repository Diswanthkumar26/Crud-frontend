import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUSer from './users/AddUSer';
import ViewUser from './users/ViewUser';
import EditUser from './users/EditUser';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='addUser' element={<AddUSer />}/>
        <Route path='user/:id' element={<ViewUser />}/>
        <Route path='edit/:id' element={<EditUser />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

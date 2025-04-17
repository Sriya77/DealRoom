
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/' element = {<HomePage/>} />
      <Route path='/login' element = {<LoginPage/>} />
      <Route path='/signup' element = {<SignUpPage/>} />
      <Route path='/settings' element = {<SettingsPage/>} />
      <Route path='/profile' element = {<ProfilePage/>} />

     </Routes>
    </>
  )
}

export default App

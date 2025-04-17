
import { Route, Routes } from 'react-router-dom'
// import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'

import { Loader } from "lucide-react";

function App() {

  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()

  useEffect(()=>{
    checkAuth()
  }, [checkAuth]);

  console.log({authUser})

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

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

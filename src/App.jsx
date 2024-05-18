import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  // console.log(import.meta.env.VITE_APP_APPWRITE_URL);
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()


  //as soon as application loads we check we are loggedin or not

  useEffect(()=>{

    authService.getCurrentUser() //if found we go to then
    .then( (userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally( ()=>setLoading(false))
  },[])


  // //conditional rendering
  // if(loading){
  //   null
  // }else{
  //   <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> 
  //   <div className='w-full block'>
  //     <Header/>
  //     <main>
  //       {/* <outlet> */} todo
  //     </main>
  //     <Footer/>
  //   </div>
  //   </div>
  // }
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

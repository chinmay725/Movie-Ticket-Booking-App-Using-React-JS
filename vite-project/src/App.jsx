import React from 'react'
import Navbar from './Components/Navbar'
import { Routes , Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import MovieDetails from './Pages/MovieDetails'
import SeatLayout from './Pages/SeatLayout'
import MyBookings from './Pages/MyBookings'
import Favorite from './Pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')


  return (
    <>
    <Toaster />

 {!isAdminRoute && <Navbar />}
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/Movies' element={<Movies/>}/>
    <Route path='/Movie:id' element={<MovieDetails/>}/>
    <Route path='/Movie:id/:date' element={<SeatLayout/>}/>
    <Route path='/MyBookings' element={<MyBookings/>}/>
    <Route path='/Favorite' element={<Favorite/>}/>

  </Routes>

  {!isAdminRoute && <Footer />}
    </>
  )
}

export default App

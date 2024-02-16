import './App.css'
// import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
// import axios from 'axios';
import { About_View, Detail_View, Form_New_View, Home_View, Landing_View } from './Views';













function App() {
  return (
    <>
      <div className='App'>
        {/* {pathname != '/' && <NavBar onSearch={onSearch} />} */}
        <Routes> 
          <Route path='/' element={<Landing_View/>}/>
          <Route path='/home' element={<Home_View/>} />
          <Route path='/detail' element={ <Detail_View/> } />
          <Route path='/about' element={<About_View/>} />
          <Route path='/createGame' element={<Form_New_View/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { About_View, Detail_View, Form_New_View, Home_View, Landing_View, Wellcome_View } from './Views';
// import onSearch from './Functions/useGames';
import React from 'react'








function App() {
  const [games, setGames] = useState([]);
  const URL = 'http://localhost:3001/mundoVideoJuegos/videogames'

  const onSearch = async () => {
    try {
      const { data } = await axios.get(`${URL}`);
      if (data.length) {
        setGames(data);
      } 
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    onSearch();
  }, []); 



  return (
    <>
      <div className='App'>
        {/* {pathname != '/' && <NavBar onSearch={onSearch} />} */}
        <Routes> 
          <Route path='/' element={<Landing_View />} />
          <Route path='/wellcome' element={<Wellcome_View/>}/>
          <Route path='/home' element={<Home_View games={games} />} />
          <Route path='/detail' element={ <Detail_View/> } />
          <Route path='/about' element={<About_View/>} />
          <Route path='/createGame' element={<Form_New_View/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

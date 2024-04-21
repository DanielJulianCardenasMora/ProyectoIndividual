import './App.css'
import axios from  'axios'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from 'react-router-dom'
import { About_View, Detail_View, Form_New_View, Home_View, Landing_View, Wellcome_View } from './Views';
import { getApiGames, getDataBaseGenres, getDBGames } from './Redux/actions';
import Nav_Bar from './Components/Wellcome/Nav_Bar/Nav_Bar';

axios.defaults.baseURL=proyectoindividual.up.railway.app

function App() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const getGames = () => {
    dispatch(getApiGames())
  }
  const getGenre = () => {
    dispatch(getDataBaseGenres())
  } 
  const getDB = () => {
    dispatch(getDBGames())
  } 
  

  useEffect(() => {
    getGames()
    getGenre()
    getDB()
  }, []); 


  return (
    <div className='App'>
      {pathname != '/' && <Nav_Bar />}
      <Routes> 
        <Route path='/' element={<Landing_View />} />
        <Route path='/wellcome' element={<Wellcome_View/>}/>
        <Route path='/home' element={<Home_View />} />
        <Route path='/detail/:id' element={<Detail_View />} />
        <Route path='/detailAPI/:id' element={<Detail_View />} />
        <Route path='/about' element={<About_View/>} />
        <Route path='/createGame' element={<Form_New_View/>}/>
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import axios from  'axios'
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from 'react-router-dom'
import { About_View, Detail_View, Form_New_View, Home_View, Landing_View, Wellcome_View } from './Views';
import { getApiGames, getDataBaseGenres, getDBGames } from './Redux/actions';
import Nav_Bar from './Components/Wellcome/Nav_Bar/Nav_Bar';
import homeimg from './z_imagesFonts/Images/HD-wallpaper1.png'
import homeimg2 from './z_imagesFonts/Images/HD-wallpaper2.png'
import girLanding from './z_imagesFonts/Images/Landing Girl.png'
import girl1 from './z_imagesFonts/Images/g1.png'
import girl2 from './z_imagesFonts/Images/g3.png'
axios.defaults.baseURL='proyectoindividual.up.railway.app'

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
    function preLoadImage(imageUrl) {
      const image = new Image();
      image.src = imageUrl;
    }
    preLoadImage(homeimg);
    preLoadImage(homeimg2);
    preLoadImage(girLanding);
    preLoadImage(girl1);
    preLoadImage(girl2);
  }, []);

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
        <Route path='/wellcome' element={<Wellcome_View homeimg={homeimg} homeimg2={homeimg2} girLanding={girLanding} girl1={girl1} girl2={girl2} />}/>
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

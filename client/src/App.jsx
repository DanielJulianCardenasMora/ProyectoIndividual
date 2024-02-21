import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom'
import { About_View, Detail_View, Form_New_View, Home_View, Landing_View, Wellcome_View } from './Views';
import { getApiGames, getDataBaseGenres } from './Redux/actions';






function App() {
  const games = useSelector((state) => state.gamesApi)
  const genres = useSelector((state) => state.gamesGenreDataBase)
  const gamesApiToShow = useSelector((state) => state.gamesApiToShow);
  const dispatch = useDispatch()
  const getGames = () => {
    dispatch(getApiGames())
  }
  const getGenre = () => {
    dispatch(getDataBaseGenres())
  } 



  useEffect(() => {
    getGames()
    getGenre()
  }, []); 




  return (
    <>
      <div className='App'>
        {/* {pathname != '/' && <NavBar onSearch={onSearch} />} */}
        <Routes> 
          <Route path='/' element={<Landing_View />} />
          <Route path='/wellcome' element={<Wellcome_View/>}/>
          <Route path='/home' element={<Home_View games={games} gamesApiToShow={ gamesApiToShow } />} />
          <Route path='/detail/:id' element={ <Detail_View/> } />
          <Route path='/about' element={<About_View/>} />
          <Route path='/createGame' element={<Form_New_View/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

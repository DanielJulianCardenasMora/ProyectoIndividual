import { Link } from 'react-router-dom'
import style from './Nav_Bar.module.css'






const Nav_Bar = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.home}>
          <Link to={'/wellcome'}>
              <h1>home</h1> 
          </Link>
        </div>
        <Link to={'/home'}>
          <h1>Find</h1> 
        </Link>
        <Link to={'/createGame'}>
          <h1>Create game</h1>
        </Link>
        <Link to={'/about'}>
          <h1>About</h1>
        </Link>
      </div>
    </>
  )
}

export default Nav_Bar
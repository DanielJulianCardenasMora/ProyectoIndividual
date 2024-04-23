import { useEffect } from 'react';
import style from './Landing.module.css'
import { Link } from "react-router-dom";
import girldragon from '../../z_imagesFonts/Images/Gilranddragon.png'
import warior from '../../../src/z_imagesFonts/Images/Wariioire.png'

const Landing = () => {
  return (
    <>
      <div>
        <Link to={'/wellcome'}>
          <button className={style.ingresar}>Enter</button>
        </Link>
      </div>

      <div className={style.bg} >
      </div>
        
      <div className={style.leftImages}>
        <img className={style.dragon} src={girldragon} />
        <img className={style.warrior} src={warior} />
      </div>
    </>
  )
}

export default Landing
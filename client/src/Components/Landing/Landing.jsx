import { useEffect } from 'react';
import style from './Landing.module.css'
import { Link } from "react-router-dom";
import girldragon from '../../z_imagesFonts/Images/Gilranddragon.png'
import warior from '../../../src/z_imagesFonts/Images/Wariioire.png'
import homeimg from '../../../src/z_imagesFonts/Images/HD-wallpaper1.png'




const Landing = () => {

  useEffect(() => {
    function preLoadImage(imageUrl) {
      const image = new Image();
      image.src = imageUrl;
    }

    preLoadImage(homeimg);
  }, []);

  return (
    <>
      <div>
        <Link to={'/wellcome'}>
          <button className={style.ingresar}>Ingresar</button>
        </Link>
      </div>

      <div className={style.bg} >
      </div>
        
      <div className={style.leftImages}>
        <img className={style.dragon} src={girldragon} />
        <img className={style.warrior} src={warior} />
        <img src={homeimg} alt="Home Background" preload="auto" style={{ display: "none" }} />
      </div>
    </>
  )
}

export default Landing
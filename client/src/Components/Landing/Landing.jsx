import { useEffect } from 'react';
import style from './Landing.module.css'
import { Link } from "react-router-dom";
import girldragon from '../../z_imagesFonts/Images/Gilranddragon.png'




const Landing = () => {

  useEffect(() => {
    function preLoadImage(imageUrl) {
      const image = new Image();
      image.src = imageUrl;
    }

    preLoadImage('../../../src/z_imagesFonts/Images/HD-wallpaper1.png');
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
        <img className={style.warrior} src={'../../../src/z_imagesFonts/Images/Wariioire.png'} />
        <img src={'../../../src/z_imagesFonts/Images/HD-wallpaper1.png'} alt="Home Background" preload="auto" style={{ display: "none" }} />
      </div>
    </>
  )
}

export default Landing
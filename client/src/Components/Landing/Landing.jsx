import style from './Landing.module.css'
import { Link } from "react-router-dom";





const Landing = () => {
  return (
    <>
      <div>
        <Link to={'/wellcome'}>
          <button className={style.ingresar}>Ingresar</button>
        </Link>
      </div>

      <div>
        <img className={style.bg} src={'../../../src/z_imagesFonts/Images/—Pngtree—3d renderings of contemporary and_5813645.jpg'} />
      </div>
        
      <div className={style.leftImages}>
        <img className={style.dragon} src={'../../../src/z_imagesFonts/Images/Gilr and dragon.png'} />
        <img className={style.warrior} src={'../../../src/z_imagesFonts/Images/Wariioire.png'} />
      </div>
    </>
  )
}

export default Landing
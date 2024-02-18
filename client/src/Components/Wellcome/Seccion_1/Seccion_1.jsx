import {style} from './Seccion_1.module.css'

const Seccion_1 = () => {
  return (
    <div>   <div className={style.section1}>
    <Nav_Bar />
    <div className={style.world}>
      <h1>Mundo</h1>  
      <h1>de lossssssss</h1>  
      <h1>Video Juegos</h1>  
    </div>
    
    <div className={style.circleOne}>
      <div className={style.bg}>
        <img className={style.imagen} src={'../../../src/z_imagesFonts/Images/Landing Girl 1.png'} />
      </div>
    </div>
    </div>
    </div>
  )
}

export default Seccion_1
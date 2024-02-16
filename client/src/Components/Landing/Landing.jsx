import style from './Landing.module.css'






const Landing = () => {
  return (
    <>
      <div className={style.cont}>
        <img className={style.bg} src={'../../../src/z_imagesFonts/Images/Background.png'} />
        <div className={style.leftImages}>
          <img className={style.dragon} src={'../../../src/z_imagesFonts/Images/Gilr and dragon 1.png'} />
          <img className={style.warrior} src={'../../../src/z_imagesFonts/Images/Wariioire 2.png'} />
        </div>
      </div>
        
    </>
  )
}

export default Landing
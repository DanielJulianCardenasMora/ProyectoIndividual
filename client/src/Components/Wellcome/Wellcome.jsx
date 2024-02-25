import style from './Wellcome.module.css'









const Wellcome = () => {
  return (
    <>
      <div className={style.section1}>
        <div className={style.world}>
          <h1>Mundo</h1>  
          <h1>de los</h1>  
          <h1>Video Juegos</h1>  
        </div>
        
        <div className={style.bg}>
          <img className={style.imagen2} src={'../../../src/z_imagesFonts/Images/HD-wallpaper.png'} />
          <img className={style.imagen} src={'../../../src/z_imagesFonts/Images/Landing Girl.png'} />
        </div>
      </div>


      <div className={style.section3}>
        <div className={style.bg_gamers}>
          <img className={style.gamer1} src={'../../../src/z_imagesFonts/Images/uwp4265035 1.png'} />
          <img className={style.gamer2} src={'../../../src/z_imagesFonts/Images/desktop-wallpaper-anime-girls-retro-wave-anime-girl-thumbnail 1.png'} />
          <img className={style.gamer3} src={'../../../src/z_imagesFonts/Images/desktop-wallpaper-anime-art-girl-by-valkryie-ymir-on-cool-art-retro-wave-anime-girl 1.png'} />
        </div>

        <div className={style.section_text}>
          <h1>Como optener el maximo poder de esta pagina?</h1>
          <h2>En "Find" entraras en contacto con un gran almacen de VideoJuegos</h2>
          <h3>Veras 15 Video Juegos en tu pantalla hasta un total de 100</h3>
          <h2>Filtra por rating</h2>
          <h3>Ordena y mira de mayor a menor en que rating se encuentran</h3>
          <h2>Busca mas</h2>
          <h3>En "Busca por ID" indica un numero hasta 800.000</h3>
          <h3>En "Busca por nombre" ingresa una palabra que este en el nombre del Video Juego</h3>
        </div>
      </div>
    </>
  )
}

export default Wellcome
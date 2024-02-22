const regexValue = /^(?=.{1,500}$).+/








function validation(data) {
    const errors = {}
    if (!regexValue.test(data.Nombre)) errors.Nombre = 'Debe tener un valor asignado'
    if (!regexValue.test(data.Fecha_de_lanzamiento)) errors.Fecha_de_lanzamiento= 'Debe tener un valor asignado'
    if (!regexValue.test(data.Rating)) errors.Rating = 'Debe tener un valor asignado'
    if (!regexValue.test(data.Plataformas)) errors.Plataformas = 'Debe tener un valor asignado'
    if (!regexValue.test(data.Descripcion)) errors.Descripcion = 'Debe tener un valor de maximo 500 caracteres'
    return errors
}



export default validation
const regexValue = /^(?=.{1,500}$).+/








function validation(data) {
    const errors = {}
    if (!regexValue.test(data.name)) errors.name = 'Debe tener un valor asignado'
    if (!regexValue.test(data.released)) errors.released= 'Debe tener un valor asignado'
    if (!regexValue.test(data.rating)) errors.rating = 'Debe tener un valor asignado'
    if (!regexValue.test(data.platforms)) errors.platforms = 'Debe tener un valor asignado'
    if (!regexValue.test(data.description)) errors.description = 'Debe tener un valor de maximo 500 caracteres'
    return errors
}



export default validation
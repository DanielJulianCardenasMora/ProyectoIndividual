const regexValue = /^(?=.{1,500}$).+/
const regexDecimal = /^\d*\.\d+$/
const regexFecha = /^([0-2][0-9]|(3)[0-1])(\/)([0][1-9]|[1][0-2])(\/)([1][9][0-9][0-9]|[2][0][0-2][0-9])$/









function validation(data) {
    const errors = {}
    if (!regexValue.test(data.name)) errors.name = 'No puedes repetir nombres'
    if (!regexFecha.test(data.released)) errors.released= 'Usa el formato del campo'
    if (!regexDecimal.test(data.rating)) errors.rating = 'Numero incluyendo decimal'
    if (!regexValue.test(data.platforms)) errors.platforms = 'Debe tener un valor asignado'
    if (!regexValue.test(data.description)) errors.description = 'Debe tener un valor de maximo 500 caracteres'
    return errors
}



export default validation
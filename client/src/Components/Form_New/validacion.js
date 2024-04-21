const regexValue = /^(?=.{1,500}$).+/
const regexDecimal = /^\d*\.\d+$/
const regexFecha = /^([0-2][0-9]|(3)[0-1])(\/)([0][1-9]|[1][0-2])(\/)([1][9][0-9][0-9]|[2][0][0-2][0-9])$/









function validation(data) {
    const errors = {}
    if (!regexValue.test(data.name)) errors.name = "Can't repeat names"
    if (!regexFecha.test(data.released)) errors.released= 'Use the format of the field'
    if (!regexDecimal.test(data.rating)) errors.rating = 'Number including decimal'
    if (!regexValue.test(data.platforms)) errors.platforms = 'Provide a value'
    if (!regexValue.test(data.description)) errors.description = 'Maximun 500 characters'
    return errors
}



export default validation
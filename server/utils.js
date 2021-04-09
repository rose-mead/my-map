const {snakeCase} = require('lodash')

function convertKeysToSnake(object) {
    for(key in object) {
       const newKey = snakeCase(key) 
       object[newKey] = parseBool(object[key])
       if(newKey != key) {
           delete object[key]
       }
    }
    return object
}

function parseBool (value) {
    // if true or false, parse it
    if(['true', 'false', true, false].includes(value) ){
        return JSON.parse(value)
    } else return value
}


module.exports = {
    convertKeysToSnake,
    parseBool
}
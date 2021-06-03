module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
    //split vai quebrar sempre que tiver a virgula, o trim remove espaçamentos antes e depois de uma string
}